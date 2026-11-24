import React, { useState } from 'react';
import { MapPin, Building } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { SectionHeader } from './SectionHeader';

export const Projects: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white py-11 sm:py-14"
    >
      <div className="onycon-container">
        <SectionHeader
          id="projects-heading"
          title="OUR PROJECTS"
          subtitle="A proven track record of delivering complex and large-scale infrastructure projects."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-xl border border-[#D9E5F2] shadow-[0_4px_16px_rgba(6,43,96,0.06)] overflow-hidden flex flex-col"
            >
              <div className="h-[160px] sm:h-[165px] xl:h-[185px] bg-[#EAF4FF] overflow-hidden">
                {!failedImages[project.id] ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width={1000}
                    height={558}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                    }
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-[#075BC7] p-4">
                    <Building className="w-8 h-8 mb-1.5" strokeWidth={1.5} aria-hidden="true" />
                    <span className="font-heading text-xs font-semibold text-center">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-3.5 flex items-start gap-2.5 flex-1">
                <div className="w-7 h-7 rounded-full bg-[#EAF4FF] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#075BC7]" strokeWidth={1.9} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-[13.5px] text-[#071E4B] leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-[#30415D] mt-0.5">{project.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
