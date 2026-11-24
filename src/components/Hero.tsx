import React, { useState } from 'react';
import { SITE_IMAGES } from '../data/images';

export const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      aria-label="Hero banner"
      className="relative w-full bg-[#001E49] overflow-hidden"
    >
      {/* Desktop & Tablet full-width hero using the user-supplied background banner */}
      <div className="relative flex flex-col md:block md:h-[270px] lg:h-[345px] xl:h-[385px]">
        {/* Full-bleed background image on md+; stacked viaduct preview on mobile */}
        <div className="order-2 md:order-none relative h-[210px] md:h-full md:absolute md:inset-0 bg-gradient-to-br from-[#001E49] via-[#062B60] to-[#075BC7]">
          {!imgError && (
            <img
              src={SITE_IMAGES.heroHighway}
              alt="Sunlit elevated highway viaduct curving through green mountain valley at sunrise"
              width={1920}
              height={640}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-[75%_center] md:object-center"
            />
          )}
        </div>

        {/* Subtle safety gradient only on small-tablet left edge if viewport narrows */}
        <div
          aria-hidden="true"
          className="hidden md:block lg:hidden absolute inset-y-0 left-0 w-[44%] bg-gradient-to-r from-[#001E49]/85 via-[#001E49]/40 to-transparent pointer-events-none"
        />

        {/* Foreground Content Container */}
        <div className="order-1 md:order-none relative z-10 onycon-container h-full flex items-center py-7 md:py-6">
          <div className="w-full md:w-[40%] lg:w-[36%] text-white">
            <p className="font-heading text-[10px] sm:text-[11px] font-semibold tracking-[0.11em] text-[#E6F0FA] uppercase mb-2.5 sm:whitespace-nowrap">
              ENGINEERING <span className="mx-1.5 text-white/55">|</span> CONSTRUCTION{' '}
              <span className="mx-1.5 text-white/55">|</span> INFRASTRUCTURE
            </p>

            <h1 className="font-heading font-extrabold text-[32px] sm:text-[36px] lg:text-[42px] xl:text-[46px] leading-[1.04] tracking-[-0.015em] text-white">
              <span className="block">Integrated</span>
              <span className="block">Infrastructure</span>
              <span className="block text-[#4DB3FF]">Solutions</span>
            </h1>

            <div className="w-16 h-[1.5px] bg-white/50 my-3.5" aria-hidden="true" />

            <p className="text-[13px] sm:text-[14px] text-white/95 leading-[1.48] max-w-[320px]">
              Engineering, constructing and delivering critical infrastructure for a stronger, connected India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
