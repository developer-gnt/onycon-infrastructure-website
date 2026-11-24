import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (targetId: string, activeNavId: string) => void;
}

type LegalTopic = 'privacy' | 'terms' | 'sitemap' | null;

const FOOTER_NAV_LINKS = [
  { label: 'About Us', targetId: 'about', navId: 'about' },
  { label: 'Services', targetId: 'services', navId: 'services' },
  { label: 'Projects', targetId: 'projects', navId: 'projects' },
  { label: 'Clients', targetId: 'clients', navId: 'clients' },
  { label: 'Careers', targetId: 'careers', navId: 'careers' },
  { label: 'Contact Us', targetId: 'contact', navId: 'contact' },
];

const LEGAL_CONTENT: Record<Exclude<LegalTopic, null>, { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'ONYCON Infrastructure respects the privacy of visitors to this corporate website. Contact details provided in the inquiry form are processed locally in your browser for validation only and are not transmitted to external third-party servers.',
      'For formal project inquiries or vendor onboarding, please write directly to ho@onyconinfra.com.',
    ],
  },
  terms: {
    title: 'Terms of Use',
    body: [
      'All project descriptions, service overviews, and corporate materials presented on this website are for general informational purposes regarding ONYCON Infrastructure.',
      'Unauthorized reproduction or commercial redistribution of brand marks and project imagery is prohibited.',
    ],
  },
  sitemap: {
    title: 'Site Map',
    body: [
      'Single-page corporate sections: Home (#home), About Us (#about), Company Highlights (#company-highlights), Our Services (#services), Our Projects (#projects), Our Clients (#clients), Careers at ONYCON (#careers), and Contact Us (#contact).',
    ],
  },
};

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModal, setLegalModal] = useState<LegalTopic>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLegalModal(null);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleNav = (e: React.MouseEvent, targetId: string, navId: string) => {
    e.preventDefault();
    onNavigate(targetId, navId);
  };

  return (
    <footer className="bg-[#001E49] text-white">
      <div className="onycon-container">
        {/* Top Single-Row Footer Bar matching reference image */}
        <div className="py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b border-white/25">
          {/* Left: White ONYCON Infrastructure Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, 'home', 'home')}
            aria-label="ONYCON Infrastructure top of page"
            className="inline-flex items-center shrink-0"
          >
            <BrandLogo variant="dark" />
          </a>

          {/* Vertical Divider 1 */}
          <span
            aria-hidden="true"
            className="hidden lg:inline-block w-px h-7 bg-white/40 shrink-0"
          />

          {/* Middle: Horizontal Corporate Navigation Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 xl:gap-x-12 gap-y-2 text-[13.5px] font-medium text-white/95"
          >
            {FOOTER_NAV_LINKS.map((link) => (
              <a
                key={link.navId}
                href={`#${link.targetId}`}
                onClick={(e) => handleNav(e, link.targetId, link.navId)}
                className="hover:text-[#4DB3FF] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Vertical Divider 2 */}
          <span
            aria-hidden="true"
            className="hidden lg:inline-block w-px h-7 bg-white/40 shrink-0"
          />

          {/* Right: Legal Links */}
          <div className="flex flex-wrap items-center gap-3 text-[12px] text-white/85 shrink-0">
            <a
              href="#privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                setLegalModal('privacy');
              }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <span className="h-3 w-px bg-white/40" aria-hidden="true" />
            <a
              href="#terms-of-use"
              onClick={(e) => {
                e.preventDefault();
                setLegalModal('terms');
              }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Terms of Use
            </a>
            <span className="h-3 w-px bg-white/40" aria-hidden="true" />
            <a
              href="#site-map"
              onClick={(e) => {
                e.preventDefault();
                setLegalModal('sitemap');
              }}
              className="hover:text-white transition-colors whitespace-nowrap"
            >
              Site Map
            </a>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="py-3.5 text-[12px] text-white/85">
          <p>&copy; 2025 Onycon Infrastructure. All Rights Reserved.</p>
        </div>
      </div>

      {/* Lightweight Accessible Legal Info Dialog */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-dialog-title"
          className="fixed inset-0 z-[100] bg-[#001E49]/60 flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white text-[#071E4B] rounded-xl border border-[#D9E5F2] shadow-2xl max-w-lg w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#D9E5F2]">
              <h4
                id="legal-dialog-title"
                className="font-heading font-bold text-[17px] text-[#062B60]"
              >
                {LEGAL_CONTENT[legalModal].title}
              </h4>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                aria-label="Close dialog"
                className="p-1.5 rounded-md text-[#30415D] hover:bg-[#EAF4FF] hover:text-[#062B60] transition-colors"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="pt-4 space-y-3 text-[13.5px] leading-relaxed text-[#30415D]">
              {LEGAL_CONTENT[legalModal].body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
