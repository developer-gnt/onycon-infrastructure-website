import React, { useState } from 'react';
import { Check, Briefcase, HardHat } from 'lucide-react';
import { SITE_IMAGES } from '../data/images';

const WHY_WORK_WITH_US = [
  'Challenging & large-scale projects',
  'Learning & growth opportunities',
  'Safe & inclusive work environment',
  'Be part of nation-building',
];

const CURRENT_OPENINGS = [
  'Project Manager',
  'Site Engineer',
  'Planning Engineer',
  'Quality Engineer',
];

export const Careers: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="bg-gradient-to-r from-white via-[#F9FCFF] to-[#F3F8FF] border-b border-[#D9E5F2] overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Left Column — Full-height Construction Crew Photo with Diagonal Right Cut */}
        <div className="w-full lg:w-[28%] xl:w-[27%] relative min-h-[210px] sm:min-h-[230px] lg:min-h-[195px] bg-white shrink-0">
          <div className="relative h-full w-full careers-image-clip overflow-hidden">
            {!imgError ? (
              <img
                src={SITE_IMAGES.careersEngineers}
                alt="Construction engineers wearing white safety helmets and high-visibility vests overlooking a tower crane"
                width={1200}
                height={675}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-[center_22%]"
              />
            ) : (
              <div className="w-full h-full bg-[#EAF4FF] flex flex-col items-center justify-center text-[#075BC7] p-6">
                <HardHat className="w-10 h-10 mb-2" strokeWidth={1.6} aria-hidden="true" />
                <span className="font-heading text-xs font-semibold">
                  ONYCON Engineering Team
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Area — Full-width 3-column horizontal content matching reference image */}
        <div className="flex-1 py-6 sm:py-7 px-4 sm:px-8 lg:pl-6 lg:pr-[clamp(1rem,3.5vw,3.5rem)] flex items-center">
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-8">
            {/* Column 1: CAREERS AT ONYCON */}
            <div className="w-full md:w-[33%] lg:w-[32%]">
              <h2
                id="careers-heading"
                className="font-heading font-extrabold text-[21px] sm:text-[23px] leading-tight text-[#071E4B] uppercase mb-2"
              >
                CAREERS AT ONYCON
              </h2>
              <p className="text-[13.5px] leading-[1.55] text-[#071E4B]/85 max-w-[270px]">
                Build a rewarding career with a team that creates lasting infrastructure for the nation.
              </p>
            </div>

            {/* Vertical Divider */}
            <span
              aria-hidden="true"
              className="hidden md:inline-block w-px h-28 bg-[#B8CEE6] shrink-0"
            />

            {/* Column 2: Why Work With Us */}
            <div className="w-full md:w-[33%] lg:w-[32%]">
              <h3 className="font-heading font-bold text-[15.5px] text-[#071E4B] mb-2.5">
                Why Work With Us
              </h3>
              <ul className="space-y-1.5">
                {WHY_WORK_WITH_US.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 text-[13px] text-[#071E4B]/85 leading-snug"
                  >
                    <Check
                      className="w-4 h-4 text-[#075BC7] shrink-0 mt-0.5"
                      strokeWidth={2.7}
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Current Openings Card */}
            <div className="w-full md:w-[30%] lg:w-[28%] xl:max-w-[300px]">
              <div className="bg-[#EAF3FD] border border-[#D9E5F2]/90 rounded-xl px-5 py-4">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Briefcase
                    className="w-[18px] h-[18px] text-[#0747A6] fill-[#0747A6]/15 shrink-0"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <h3 className="font-heading font-bold text-[15px] text-[#071E4B]">
                    Current Openings
                  </h3>
                </div>
                <ul className="space-y-1.5 pl-1">
                  {CURRENT_OPENINGS.map((role) => (
                    <li
                      key={role}
                      className="flex items-center gap-2.5 text-[13px] text-[#071E4B]/90 font-medium"
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#075BC7] shrink-0"
                      />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
