import { Facebook, Home } from 'lucide-react';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/FunkAwayGCS7434',
  nextdoor:
    'https://nextdoor.com/page/funk-away-garbage-cleaning-service-llc-westville-il?init_source=search&query=funk+away+gcs&referrer=nextdoor',
  tiktok: 'https://www.tiktok.com/@funk.away.gcs',
} as const;

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 3c.29 2.06 1.44 3.4 3.5 3.6v2.42c-1.19.11-2.24-.28-3.46-1.02v5.9c0 3.62-2.42 5.9-5.5 5.9-2.87 0-5.04-2.02-5.04-4.85 0-3.02 2.19-4.94 5.4-4.6v2.63c-.42-.11-.86-.16-1.28-.16-1.2 0-2.02.79-2.02 1.9 0 1.15.87 1.98 2.08 1.98 1.4 0 2.34-1 2.34-2.93V3h4z" />
    </svg>
  );
}

/**
 * Prominent, brand-coloured social bar shown in every page footer.
 * Links out to Facebook (FB), Nextdoor (ND) and TikTok (TT).
 */
export function SocialLinks({
  heading = 'Follow Us',
  className = '',
}: {
  heading?: string;
  className?: string;
}) {
  const tile =
    'group relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform';

  return (
    <div className={className}>
      {heading && (
        <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 mb-4">
          {heading}
        </p>
      )}
      <div className="flex justify-center gap-4">
        <a
          href={SOCIAL_LINKS.facebook}
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          aria-label="Follow us on Facebook"
          className={`${tile} bg-[#1877F2] text-white shadow-blue-500/25`}
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href={SOCIAL_LINKS.nextdoor}
          target="_blank"
          rel="noopener noreferrer"
          title="Nextdoor"
          aria-label="Find us on Nextdoor"
          className={`${tile} bg-[#8ED081] text-slate-900 shadow-green-500/25`}
        >
          <Home className="w-6 h-6 absolute opacity-25" />
          <span className="font-black text-sm z-10 tracking-tighter">ND</span>
        </a>
        <a
          href={SOCIAL_LINKS.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          title="TikTok"
          aria-label="Follow us on TikTok"
          className={`${tile} bg-slate-950 text-white shadow-black/30`}
        >
          <TiktokIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
