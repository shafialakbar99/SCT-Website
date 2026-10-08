import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: any;
}

export class ErrorBoundary extends (React.Component as any) {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: any): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, info: any) {
    console.error('Humanity First BD error caught:', error, info);
  }

  handleReload = () => {
    try {
      if ('caches' in window) {
        caches.keys().then((names) => {
          names.forEach((name) => caches.delete(name));
        });
      }
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const r of registrations) {
            r.unregister();
          }
        });
      }
    } catch {}
    window.location.reload();
  };

  render() {
    if (this.state && this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 text-center">
            <div className="w-16 h-16 bg-emerald-50 text-[#0D6E4F] rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
              <AlertTriangle className="w-8 h-8 text-[#0D6E4F]" />
            </div>

            <h2 className="text-xl md:text-2xl font-black text-[#1B365D] mb-2 font-serif">
              Shaheen Cares Trust
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              একটি অপ্রত্যাশিত সমস্যা দেখা দিয়েছে। নিচের বাটন চেপে পেজটি পুনরায় লোড করুন।
              <br />
              <span className="text-xs text-slate-500 mt-1 block">
                (An unexpected issue occurred. Please reload to restore the session.)
              </span>
            </p>

            {this.state.error && (
              <div className="mb-6 p-3 bg-slate-50 rounded-lg text-left border border-slate-200/60 overflow-hidden">
                <p className="text-xs font-mono text-rose-600 font-semibold truncate">
                  {String(this.state.error)}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0D6E4F] hover:bg-[#09523B] text-white font-medium text-sm rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                রিলোড করুন (Reload)
              </button>

              <button
                type="button"
                onClick={() => { window.location.href = '/'; }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                <Home className="w-4 h-4" />
                হোম পেজ (Home)
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (this as any).props.children;
  }
}
