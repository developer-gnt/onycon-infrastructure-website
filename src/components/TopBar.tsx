import React, { useState, useRef, useEffect } from 'react';
import { CONTACT_DETAILS } from '../data/navigation';

export const TopBar: React.FC = () => {
  const [showPortalNote, setShowPortalNote] = useState(false);
  const noteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (noteRef.current && !noteRef.current.contains(event.target as Node)) {
        setShowPortalNote(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShowPortalNote(false);
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div className="bg-[#002664] text-white text-[12px] border-b border-white/10">
      <div className="onycon-container min-h-[32px] py-1 flex flex-wrap items-center justify-between gap-2">
        {/* Left contact links with crisp solid white icons matching reference */}
        <div className="flex items-center gap-3.5 sm:gap-4">
          <a
            href={CONTACT_DETAILS.phoneHref}
            className="inline-flex items-center gap-2 text-white hover:text-[#4DB3FF] transition-colors whitespace-nowrap"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
            </svg>
            <span>{CONTACT_DETAILS.phoneDisplay}</span>
          </a>

          <span className="h-3.5 w-px bg-white/45 hidden xs:inline-block" aria-hidden="true" />

          <a
            href={CONTACT_DETAILS.emailHref}
            className="inline-flex items-center gap-2 text-white hover:text-[#4DB3FF] transition-colors whitespace-nowrap"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 3.2V18h16V7.2l-8 5-8-5Zm8 3.04 7.72-4.82H4.28L12 10.24Z" />
            </svg>
            <span>{CONTACT_DETAILS.email}</span>
          </a>
        </div>

        {/* Right Employee Login placeholder link */}
        <div className="relative" ref={noteRef}>
          <a
            href="#employee-login"
            onClick={(e) => {
              e.preventDefault();
              setShowPortalNote((prev) => !prev);
            }}
            aria-expanded={showPortalNote}
            className="inline-flex items-center gap-2 text-white hover:text-[#4DB3FF] transition-colors whitespace-nowrap"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
            </svg>
            <span>Employee Login</span>
          </a>

          {showPortalNote && (
            <div
              role="status"
              className="absolute right-0 top-full mt-1.5 w-64 rounded-md bg-white text-[#071E4B] shadow-lg border border-[#D9E5F2] p-3 text-[12px] leading-snug z-[60]"
            >
              <p className="font-heading font-semibold text-[#062B60] mb-1">
                Employee Portal Placeholder
              </p>
              <p className="text-[#30415D]">
                Internal employee login is managed via corporate SSO and is not enabled on this public showcase.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
