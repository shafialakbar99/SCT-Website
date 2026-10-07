import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { AdminModal } from './AdminModal';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  itemName?: string;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Deletion',
  message = 'Are you sure you want to delete this record? This action cannot be undone.',
  itemName
}) => {
  return (
    <AdminModal isOpen={isOpen} onClose={onClose} title={title} maxWidth="md">
      <div className="flex flex-col items-center text-center p-2">
        <div className="w-14 h-14 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400 mb-4">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">{message}</p>
        {itemName && (
          <p className="font-semibold text-slate-900 dark:text-white text-sm bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg mb-6 max-w-full truncate">
            {itemName}
          </p>
        )}
        <div className="flex items-center justify-end gap-3 w-full mt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-lg shadow-sm transition-colors"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </AdminModal>
  );
};
