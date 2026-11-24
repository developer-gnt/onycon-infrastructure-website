import React from 'react';
import { Building2, Users, Award, Leaf } from 'lucide-react';

interface HighlightItem {
  label: string;
  value: string;
  boldValue?: boolean;
  icon: React.ReactNode;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    label: 'Established',
    value: '1980+',
    boldValue: true,
    icon: <Building2 className="w-7 h-7 text-[#075BC7]" strokeWidth={1.6} aria-hidden="true" />,
  },
  {
    label: 'Team Strength',
    value: '500+',
    boldValue: true,
    icon: <Users className="w-7 h-7 text-[#075BC7]" strokeWidth={1.6} aria-hidden="true" />,
  },
  {
    label: 'Quality & Safety',
    value: 'ISO Compliant',
    boldValue: false,
    icon: <Award className="w-7 h-7 text-[#075BC7]" strokeWidth={1.6} aria-hidden="true" />,
  },
  {
    label: 'Multi-Sector',
    value: 'Expertise',
    boldValue: false,
    icon: <Leaf className="w-7 h-7 text-[#075BC7]" strokeWidth={1.6} aria-hidden="true" />,
  },
];

export const CompanyHighlights: React.FC = () => {
  return (
    <div
      id="company-highlights"
      className="bg-[#F2F7FD]/95 backdrop-blur-xs border border-[#DCE8F5] rounded-xl shadow-[0_6px_20px_rgba(6,43,96,0.08)] px-3 py-3 sm:px-5 sm:py-3.5"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 items-center">
        {HIGHLIGHTS.map((item, idx) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-2 sm:px-3.5 ${
              idx < HIGHLIGHTS.length - 1 ? 'sm:border-r sm:border-[#D4E2F1]' : ''
            } ${idx % 2 === 0 ? 'border-r border-[#D4E2F1] sm:border-r' : ''}`}
          >
            <div className="shrink-0">{item.icon}</div>
            <div className="min-w-0">
              <div className="text-[11.5px] font-semibold text-[#071E4B]/85 leading-tight truncate">
                {item.label}
              </div>
              <div
                className={`font-heading leading-tight mt-0.5 tabular-nums whitespace-nowrap ${
                  item.boldValue
                    ? 'font-extrabold text-[14px] sm:text-[15px] text-[#071E4B]'
                    : 'font-semibold text-[12.5px] sm:text-[13px] text-[#071E4B]/90'
                }`}
              >
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
