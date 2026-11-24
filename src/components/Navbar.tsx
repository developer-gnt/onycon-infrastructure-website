import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NAV_ITEMS, NavItem } from '../data/navigation';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (targetId: string, activeNavId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (item: NavItem) => {
    if (!item.dropdown) return;
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(item.id);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  const handleLinkClick = (
    e: React.MouseEvent,
    targetId: string,
    navId: string
  ) => {
    e.preventDefault();
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(targetId, navId);
  };

  const handleDropdownToggle = (
    e: React.MouseEvent | React.KeyboardEvent,
    item: NavItem
  ) => {
    if (!item.dropdown) return;
    e.preventDefault();
    setOpenDropdown((prev) => (prev === item.id ? null : item.id));
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 bg-white border-b border-[#D9E5F2] shadow-[0_2px_10px_rgba(0,30,73,0.04)]"
    >
      <div className="onycon-container h-[66px] sm:h-[70px] flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home', 'home')}
          aria-label="ONYCON Infrastructure Home"
          className="flex items-center shrink-0 rounded focus-visible:outline-2"
        >
          <BrandLogo variant="light" />
        </a>

        {/* Desktop & Tablet Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center md:gap-3 lg:gap-7 xl:gap-11"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const isOpen = openDropdown === item.id;
            const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={`#${item.targetId}`}
                  aria-expanded={hasDropdown ? isOpen : undefined}
                  aria-haspopup={hasDropdown ? 'menu' : undefined}
                  onClick={(e) => {
                    if (hasDropdown) {
                      if (isOpen) {
                        handleLinkClick(e, item.targetId, item.id);
                      } else {
                        handleDropdownToggle(e, item);
                      }
                    } else {
                      handleLinkClick(e, item.targetId, item.id);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (hasDropdown && (e.key === 'ArrowDown' || e.key === ' ')) {
                      e.preventDefault();
                      setOpenDropdown(item.id);
                    }
                  }}
                  className={`font-heading inline-flex items-center gap-1 lg:gap-1.5 py-2 md:text-[12px] lg:text-[14px] xl:text-[14.5px] font-semibold whitespace-nowrap shrink-0 transition-colors relative ${
                    isActive
                      ? 'text-[#087CF0]'
                      : 'text-[#071E4B] hover:text-[#075BC7]'
                  }`}
                >
                  <span>{item.label}</span>
                  {hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-150 ${
                        isOpen ? 'rotate-180 text-[#087CF0]' : 'text-[#071E4B]'
                      }`}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  )}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0.5 left-0 right-0 h-[2.5px] bg-[#087CF0] rounded-full"
                    />
                  )}
                </a>

                {hasDropdown && isOpen && (
                  <div
                    role="menu"
                    aria-label={`${item.label} submenu`}
                    className="absolute left-0 top-full pt-1.5 min-w-[210px] z-50"
                  >
                    <div className="bg-white rounded-lg border border-[#D9E5F2] shadow-[0_10px_28px_rgba(6,43,96,0.12)] py-1.5">
                      {item.dropdown!.map((sub) => (
                        <a
                          key={sub.label}
                          role="menuitem"
                          href={`#${sub.targetId}`}
                          onClick={(e) => handleLinkClick(e, sub.targetId, item.id)}
                          className="block px-4 py-2 text-[13px] font-medium text-[#071E4B] hover:bg-[#EAF4FF] hover:text-[#075BC7] transition-colors whitespace-nowrap"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-[#062B60] hover:bg-[#EAF4FF] transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="md:hidden bg-white border-t border-[#D9E5F2] px-4 py-3 space-y-1 max-h-[80vh] overflow-y-auto"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
            const isExpanded = mobileExpanded === item.id;

            return (
              <div key={item.id} className="border-b border-[#D9E5F2]/60 last:border-b-0 pb-1">
                <div className="flex items-center justify-between">
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => handleLinkClick(e, item.targetId, item.id)}
                    className={`font-heading block py-2.5 text-[14px] font-semibold flex-1 ${
                      isActive ? 'text-[#087CF0]' : 'text-[#071E4B]'
                    }`}
                  >
                    {item.label}
                  </a>

                  {hasDropdown && (
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded((prev) => (prev === item.id ? null : item.id))
                      }
                      aria-expanded={isExpanded}
                      aria-label={`Toggle ${item.label} submenu`}
                      className="p-2 text-[#062B60]"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? 'rotate-180 text-[#087CF0]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>

                {hasDropdown && isExpanded && (
                  <div className="pl-3 pb-2 space-y-1">
                    {item.dropdown!.map((sub) => (
                      <a
                        key={sub.label}
                        href={`#${sub.targetId}`}
                        onClick={(e) => handleLinkClick(e, sub.targetId, item.id)}
                        className="block py-1.5 text-[13px] text-[#30415D] hover:text-[#075BC7]"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
};
