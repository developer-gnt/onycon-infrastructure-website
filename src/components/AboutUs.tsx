import React, { useState } from 'react';
import { Target, Flag, Gem, Building2 } from 'lucide-react';
import { SITE_IMAGES } from '../data/images';
import { CompanyHighlights } from './CompanyHighlights';

export const AboutUs: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="bg-white py-10 sm:py-12">
      <div className="onycon-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-7 items-center">
          {/* Left + Middle Visual Assembly (9 cols on desktop) */}
          <div className="lg:col-span-9 relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-4 items-start">
              {/* Left Column — Company Introduction */}
              <div className="md:col-span-5 flex flex-col justify-start pt-1 lg:pb-24">
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="w-8 h-[2px] bg-[#075BC7]" aria-hidden="true" />
                  <span className="font-heading font-bold text-[12px] tracking-[0.06em] text-[#075BC7] uppercase">
                    ABOUT US
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-[24px] sm:text-[27px] xl:text-[31px] leading-[1.15] tracking-[-0.015em] text-[#071E4B] mb-3.5">
                  A Trusted Engineering &amp; Construction Partner
                </h2>

                <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#071E4B]/85 max-w-[395px]">
                  Onycon Infrastructure is an engineering and construction company with rich experience and varied expertise across industrial, tunneling and infrastructure projects.
                </p>
              </div>

              {/* Middle Column — Uploaded Corporate Facility Graphic */}
              <div className="md:col-span-7 flex items-center lg:pb-5">
                <div className="relative w-full bg-white overflow-hidden">
                  {!imgError ? (
                    <img
                      src={SITE_IMAGES.aboutBuilding}
                      alt="Modern industrial corporate building with blue glass facade, white cladding, and diagonal blue accent"
                      width={1400}
                      height={700}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-auto block object-contain"
                    />
                  ) : (
                    <div className="w-full aspect-[2/1] rounded-xl bg-[#EAF4FF] flex flex-col items-center justify-center text-[#075BC7] p-6">
                      <Building2 className="w-10 h-10 mb-2" strokeWidth={1.5} aria-hidden="true" />
                      <span className="font-heading text-xs font-semibold">
                        ONYCON Infrastructure Facility
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Company Highlights Strip tucked below left copy & overlapping bottom-left image corner on desktop */}
            <div className="mt-5 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0 lg:w-[67%] xl:w-[64%] z-10">
              <CompanyHighlights />
            </div>
          </div>

          {/* Right Column — Vision, Mission, Values with left vertical divider */}
          <div
            id="about-principles"
            className="lg:col-span-3 lg:border-l lg:border-[#D9E5F2] lg:pl-7 flex flex-col justify-center"
          >
            {/* Our Vision */}
            <div className="flex items-start gap-4 pb-4 border-b border-[#D9E5F2]">
              <Target
                className="w-9 h-9 text-[#075BC7] shrink-0 mt-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-heading font-bold text-[15.5px] text-[#071E4B] mb-1">
                  Our Vision
                </h3>
                <p className="text-[12.5px] leading-[1.5] text-[#071E4B]/85">
                  To be a leading infrastructure company known for engineering excellence.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="flex items-start gap-4 py-4 border-b border-[#D9E5F2]">
              <Flag
                className="w-9 h-9 text-[#075BC7] shrink-0 mt-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-heading font-bold text-[15.5px] text-[#071E4B] mb-1">
                  Our Mission
                </h3>
                <p className="text-[12.5px] leading-[1.5] text-[#071E4B]/85">
                  To deliver high-quality, safe and sustainable infrastructure projects.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div id="about-values" className="flex items-start gap-4 pt-4">
              <Gem
                className="w-9 h-9 text-[#075BC7] shrink-0 mt-0.5"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-heading font-bold text-[15.5px] text-[#071E4B] mb-1">
                  Our Values
                </h3>
                <p className="text-[12px] leading-[1.6] text-[#071E4B]/85">
                  Integrity <span className="mx-1.5 text-[#9FB8D6]">|</span> Quality{' '}
                  <span className="mx-1.5 text-[#9FB8D6]">|</span> Safety
                  <br />
                  Reliability <span className="mx-1.5 text-[#9FB8D6]">|</span> People{' '}
                  <span className="mx-1.5 text-[#9FB8D6]">|</span> Sustainability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
