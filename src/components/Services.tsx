import React, { useState } from 'react';
import { Factory } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/services';
import { SectionHeader } from './SectionHeader';

const ServiceIcon: React.FC<{ type: ServiceItem['iconType'] }> = ({ type }) => {
  if (type === 'industrial') {
    return <Factory className="w-6 h-6 text-[#075BC7]" strokeWidth={1.7} aria-hidden="true" />;
  }

  if (type === 'tunnel') {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 22V14C4 8.477 8.477 4 14 4C19.523 4 24 8.477 24 14V22"
          stroke="#075BC7"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M8 22V14C8 10.686 10.686 8 14 8C17.314 8 20 10.686 20 14V22"
          stroke="#075BC7"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 22V14.5C12 13.119 12.895 12 14 12C15.105 12 16 13.119 16 14.5V22"
          stroke="#087CF0"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <line x1="2" y1="22" x2="26" y2="22" stroke="#075BC7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="2" y1="19" x2="26" y2="19" stroke="#075BC7" strokeWidth="2.1" strokeLinecap="round" />
      <line x1="8" y1="8" x2="8" y2="23" stroke="#075BC7" strokeWidth="2.1" strokeLinecap="round" />
      <line x1="20" y1="8" x2="20" y2="23" stroke="#075BC7" strokeWidth="2.1" strokeLinecap="round" />
      <path
        d="M2 15C5 15 7 12 8 9C10 13 18 13 20 9C21 12 23 15 26 15"
        stroke="#087CF0"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="11" y1="12" x2="11" y2="19" stroke="#087CF0" strokeWidth="1.5" />
      <line x1="14" y1="12.5" x2="14" y2="19" stroke="#087CF0" strokeWidth="1.5" />
      <line x1="17" y1="12" x2="17" y2="19" stroke="#087CF0" strokeWidth="1.5" />
    </svg>
  );
};

export const Services: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="services-section-bg py-11 sm:py-14 border-y border-[#D9E5F2]/70"
    >
      <div className="onycon-container">
        <SectionHeader
          id="services-heading"
          title="OUR SERVICES"
          subtitle="End-to-end engineering and construction solutions across key infrastructure sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-xl border border-[#D9E5F2]/80 shadow-[0_6px_20px_rgba(6,43,96,0.07)] overflow-hidden flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-[185px] sm:h-[205px] xl:h-[225px] bg-[#EAF4FF] overflow-hidden">
                {!failedImages[service.id] ? (
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width={1000}
                    height={558}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [service.id]: true }))
                    }
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-[#075BC7]">
                    <ServiceIcon type={service.iconType} />
                    <span className="font-heading text-xs font-semibold mt-2">
                      {service.title}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body with overlapping circular icon badge */}
              <div className="relative px-5 pt-4 pb-5 flex items-start gap-3.5 bg-white flex-1">
                <div className="-mt-9 w-14 h-14 rounded-full bg-white border border-[#D9E5F2]/70 shadow-[0_3px_10px_rgba(6,43,96,0.1)] flex items-center justify-center shrink-0">
                  <ServiceIcon type={service.iconType} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-[16px] text-[#071E4B] leading-snug mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[12.5px] leading-[1.5] text-[#30415D]">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
