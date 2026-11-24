import React from 'react';
import { HardHat, Layers, Users, Boxes } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const STATS: StatItem[] = [
  {
    value: '40+',
    label: 'Years of Experience',
    icon: <HardHat className="w-8 h-8 text-[#087CF0]" strokeWidth={1.6} aria-hidden="true" />,
  },
  {
    value: '250+',
    label: 'Projects Delivered',
    icon: <Layers className="w-8 h-8 text-[#087CF0]" strokeWidth={1.6} aria-hidden="true" />,
  },
  {
    value: '100+',
    label: 'Trusted Clients',
    icon: <Users className="w-8 h-8 text-[#087CF0]" strokeWidth={1.6} aria-hidden="true" />,
  },
  {
    value: 'Multi-Sector',
    label: 'Expertise',
    icon: <Boxes className="w-8 h-8 text-[#087CF0]" strokeWidth={1.6} aria-hidden="true" />,
  },
];

export const Statistics: React.FC = () => {
  return (
    <section
      aria-label="Company statistics"
      className="bg-white border-b border-[#D9E5F2] py-5 sm:py-6"
    >
      <div className="onycon-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-center justify-start sm:justify-center gap-3.5 px-3 sm:px-5 ${
                idx < STATS.length - 1 ? 'lg:border-r lg:border-[#D9E5F2]' : ''
              } ${idx % 2 === 0 ? 'border-r border-[#D9E5F2] lg:border-r' : ''}`}
            >
              <div className="shrink-0">{stat.icon}</div>
              <div>
                <div className="font-heading font-bold text-[19px] sm:text-[21px] text-[#071E4B] leading-tight tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[12px] sm:text-[12.5px] text-[#30415D] leading-snug mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
