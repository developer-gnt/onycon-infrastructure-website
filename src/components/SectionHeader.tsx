import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  id?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  id,
}) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-9">
      <div className="inline-flex items-center justify-center gap-3.5 mb-2">
        <span className="w-10 sm:w-14 h-[1.5px] bg-[#087CF0]" aria-hidden="true" />
        <h2
          id={id}
          className="font-heading font-bold text-[22px] sm:text-[26px] tracking-[0.03em] text-[#071E4B] uppercase"
        >
          {title}
        </h2>
        <span className="w-10 sm:w-14 h-[1.5px] bg-[#087CF0]" aria-hidden="true" />
      </div>
      <p className="text-[13.5px] sm:text-[14.5px] text-[#30415D] leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
