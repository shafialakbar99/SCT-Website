/**
 * Resilient, self-contained SVG Data URI Fallbacks
 * Guaranteed to render in air-gapped or restricted corporate firewall networks
 */

function createSvgPlaceholder(
  title: string,
  subtitle: string,
  gradientFrom: string,
  gradientTo: string,
  iconSvg: string
): string {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradientFrom}" />
      <stop offset="100%" stop-color="${gradientTo}" />
    </linearGradient>
    <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="1" fill="#ffffff" fill-opacity="0.08" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  <rect width="100%" height="100%" fill="url(#pattern)" />
  
  <g transform="translate(400, 210)">
    <circle r="52" fill="#ffffff" fill-opacity="0.12" />
    <circle r="42" fill="#ffffff" fill-opacity="0.18" />
    <g transform="translate(-24, -24)" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      ${iconSvg}
    </g>
  </g>
  
  <text x="400" y="310" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">
    ${title}
  </text>
  <text x="400" y="340" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#ffffff" fill-opacity="0.8" text-anchor="middle">
    ${subtitle}
  </text>
</svg>`.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Icons in SVG path format
const ICONS = {
  emergency: `<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`,
  water: `<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>`,
  education: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
  healthcare: `<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`,
  child: `<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>`,
  person: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
  general: `<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>`,
  gallery: `<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>`
};

export const SVG_FALLBACKS = {
  emergency: createSvgPlaceholder('Emergency Initiative', 'Shaheen Cares Trust', '#991B1B', '#B91C1C', ICONS.emergency),
  water: createSvgPlaceholder('Clean Water Project', 'Safe Drinking Water Initiative', '#0369A1', '#0284C7', ICONS.water),
  education: createSvgPlaceholder('Special Needs Inclusive Education', 'Project SPUS • Oct 2026 – Oct 2029', '#047857', '#059669', ICONS.education),
  healthcare: createSvgPlaceholder('Therapy & Rehabilitation', 'Support for Special Needs Children', '#4338CA', '#4F46E5', ICONS.healthcare),
  orphan: createSvgPlaceholder('Child Care & Holistic Wellbeing', 'Shaheen Cares Trust', '#BE185D', '#DB2777', ICONS.child),
  leadership: createSvgPlaceholder('Shaheen Cares Trust Leadership', 'Board of Trustees & Secretariat', '#1E293B', '#334155', ICONS.person),
  avatar: createSvgPlaceholder('Supporter Profile', 'Shaheen Cares Community', '#334155', '#475569', ICONS.person),
  gallery: createSvgPlaceholder('Field Operation Gallery', 'Shaheen Cares Trust in Action', '#0F766E', '#14B8A6', ICONS.gallery),
  general: createSvgPlaceholder('Shaheen Cares Trust', 'Building a Dignified Future Together', '#0D6E4F', '#0B5B41', ICONS.general)
};

/**
 * Resolves an intelligent fallback based on URL or context keywords
 */
export function getSmartFallback(urlOrCategory?: string): string {
  const str = (urlOrCategory || '').toLowerCase();
  if (str.includes('water') || str.includes('tube') || str.includes('well') || str.includes('saline')) {
    return SVG_FALLBACKS.water;
  }
  if (str.includes('flood') || str.includes('emergency') || str.includes('relief') || str.includes('rescue')) {
    return SVG_FALLBACKS.emergency;
  }
  if (str.includes('school') || str.includes('education') || str.includes('child') || str.includes('book')) {
    return SVG_FALLBACKS.education;
  }
  if (str.includes('health') || str.includes('medical') || str.includes('clinic') || str.includes('doctor')) {
    return SVG_FALLBACKS.healthcare;
  }
  if (str.includes('sponsor') || str.includes('orphan') || str.includes('student')) {
    return SVG_FALLBACKS.orphan;
  }
  if (str.includes('leader') || str.includes('chairman') || str.includes('ceo') || str.includes('board') || str.includes('staff')) {
    return SVG_FALLBACKS.leadership;
  }
  if (str.includes('avatar') || str.includes('donor')) {
    return SVG_FALLBACKS.avatar;
  }
  if (str.includes('gallery') || str.includes('photo') || str.includes('album')) {
    return SVG_FALLBACKS.gallery;
  }
  return SVG_FALLBACKS.general;
}

/**
 * Transforms external image URLs into Cloudflare Global CDN cached WebP endpoints.
 * This guarantees ultra-fast, unblocked loading across Bangladesh ISPs (Grameenphone, Banglalink, Robi, Teletalk, broadband)
 * as well as restricted office/corporate firewalls.
 */
export function getOptimizedImageUrl(url?: string, width = 1000): string {
  if (!url) return '';
  if (url.startsWith('data:') || url.startsWith('blob:') || url.startsWith('/')) {
    return url;
  }
  
  if (url.includes('wsrv.nl') || url.includes('weserv.nl')) {
    return url;
  }

  try {
    const parsed = new URL(url);
    const hostAndPath = parsed.host + parsed.pathname;
    return `https://wsrv.nl/?url=${encodeURIComponent(hostAndPath)}&w=${width}&q=82&output=webp`;
  } catch {
    const raw = url.replace(/^https?:\/\//, '');
    return `https://wsrv.nl/?url=${encodeURIComponent(raw)}&w=${width}&q=82&output=webp`;
  }
}

