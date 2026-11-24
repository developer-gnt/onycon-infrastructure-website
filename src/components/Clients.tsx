import React from 'react';
import { CLIENTS_DATA, ClientItem } from '../data/clients';

const ClientWordmark: React.FC<{ client: ClientItem }> = ({ client }) => {
  switch (client.variant) {
    case 'hcl':
      return (
        <svg
          width="118"
          height="28"
          viewBox="0 0 118 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="HCL"
          className="h-[24px] sm:h-[27px] w-auto"
        >
          {/* Classic wide skewed italic HCL geometric wordmark */}
          <g transform="skewX(-18) translate(10, 0)">
            {/* H */}
            <path d="M2 4H9.5V11.5H20.5V4H28V24H20.5V16.5H9.5V24H2V4Z" fill="#0B4DA2" />
            {/* C */}
            <path
              d="M47 3.5C55.5 3.5 60.5 6.8 61.5 11.2H53.5C52.6 9.2 50.4 8.2 47 8.2C42.2 8.2 39.5 10.6 39.5 14C39.5 17.4 42.2 19.8 47 19.8C50.4 19.8 52.7 18.8 53.6 16.8H61.6C60.5 21.3 55.4 24.5 47 24.5C37.2 24.5 31.8 20.1 31.8 14C31.8 7.9 37.2 3.5 47 3.5Z"
              fill="#0B4DA2"
            />
            {/* L */}
            <path d="M66 4H73.5V19H89V24H66V4Z" fill="#0B4DA2" />
          </g>
        </svg>
      );

    case 'indswift':
      return (
        <span className="inline-flex items-center gap-2.5 select-none">
          <svg
            width="34"
            height="34"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] shrink-0"
          >
            <circle cx="18" cy="18" r="15" stroke="#0C2D84" strokeWidth="2.4" />
            <path
              d="M8.5 12C13 15.5 23 20.5 27.5 24M27.5 12C23 15.5 13 20.5 8.5 24"
              stroke="#0C2D84"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-heading font-bold text-[16px] sm:text-[18px] text-[#0C2D84] tracking-[-0.02em] whitespace-nowrap">
            Ind-Swift
          </span>
        </span>
      );

    case 'ivax':
      return (
        <span
          className="relative inline-flex items-center justify-center w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full select-none shadow-[0_2px_8px_rgba(6,43,96,0.18)]"
          style={{
            background:
              'radial-gradient(circle at 35% 30%, #0D6CE0 0%, #063C93 58%, #002366 100%)',
          }}
        >
          {/* Subtle bright cyan-blue crescent edge highlight matching reference */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full border-b-2 border-l-2 border-[#38B6FF]/85 pointer-events-none"
          />
          <span className="font-heading font-bold text-[12px] sm:text-[13px] tracking-[0.04em] text-white">
            IVAX
          </span>
        </span>
      );

    case 'kanakdhara':
      return (
        <span className="inline-flex items-center select-none">
          <svg
            width="148"
            height="42"
            viewBox="0 0 148 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="KANAKADHARA let's prosper"
            className="h-[36px] sm:h-[40px] w-auto"
          >
            <text
              x="2"
              y="26"
              fill="#0B2249"
              fontFamily="Montserrat, sans-serif"
              fontWeight="800"
              fontSize="13.5"
              letterSpacing="0.2"
            >
              KANAK
            </text>
            {/* Stylized slanted quill + green A peak matching reference emblem */}
            <path d="M62 4L66 2L59 17L56 16L62 4Z" fill="#0B2249" />
            <path
              d="M54 27L60 15L66 27L60 35L54 27Z"
              stroke="#16A34A"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="round"
            />
            <line x1="56.5" y1="25" x2="63.5" y2="25" stroke="#16A34A" strokeWidth="1.8" />
            <text
              x="67"
              y="26"
              fill="#0B2249"
              fontFamily="Montserrat, sans-serif"
              fontWeight="800"
              fontSize="13.5"
              letterSpacing="0.2"
            >
              DHARA
            </text>
            <text
              x="122"
              y="16"
              fill="#0B2249"
              fontFamily="Montserrat, sans-serif"
              fontWeight="700"
              fontSize="7"
            >
              TM
            </text>
            <text
              x="71"
              y="37"
              fill="#0B2249"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              fontSize="8.5"
            >
              let&apos;s prosper
            </text>
          </svg>
        </span>
      );

    case 'kriexf':
      return (
        <span className="inline-flex items-center gap-2.5 select-none">
          <span className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] bg-[#0A479E] text-white flex items-center justify-center shrink-0">
            <span
              className="font-bold text-[22px] sm:text-[24px] leading-none tracking-[-0.04em]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              13
            </span>
          </span>
          <span className="font-heading font-extrabold text-[11.5px] sm:text-[12.5px] leading-[1.15] tracking-[0.04em] text-[#071E4B] text-left">
            KRI
            <br />
            EXF
          </span>
        </span>
      );
  }
};

export const Clients: React.FC = () => {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative bg-gradient-to-b from-[#F4F9FF] via-[#FAFCFF] to-[#F5F9FF] py-8 sm:py-10 border-y border-[#D9E5F2] overflow-hidden"
    >
      {/* Subtle diagonal light-blue geometric corner facets matching reference */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-0 w-[12%] bg-[#E5F0FD]/80 pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 0, 42% 100%, 0 100%)' }}
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 right-0 w-[13%] bg-[#E5F0FD]/75 pointer-events-none"
        style={{ clipPath: 'polygon(68% 0, 100% 0, 100% 100%, 15% 100%)' }}
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 right-0 w-[8%] bg-[#DCEBFB]/70 pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 45% 0, 100% 100%, 55% 100%)' }}
      />

      <div className="onycon-container relative z-10">
        {/* Compact Section Header matching reference proportions */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center justify-center gap-4 mb-1.5">
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#087CF0]" aria-hidden="true" />
            <h2
              id="clients-heading"
              className="font-heading font-extrabold text-[21px] sm:text-[24px] tracking-[0.03em] text-[#071E4B] uppercase"
            >
              OUR CLIENTS
            </h2>
            <span className="w-12 sm:w-20 h-[1.5px] bg-[#087CF0]" aria-hidden="true" />
          </div>
          <p className="text-[13px] sm:text-[14px] text-[#071E4B]/85 leading-snug">
            Trusted by leading organisations across various sectors.
          </p>
        </div>

        {/* Full-width horizontal client logo row with thin vertical dividers */}
        <div className="w-full flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-y-4">
          {CLIENTS_DATA.map((client, idx) => (
            <React.Fragment key={client.id}>
              <div
                aria-label={client.name}
                className="px-5 lg:px-4 py-1.5 flex items-center justify-center min-h-[48px] flex-1"
              >
                <ClientWordmark client={client} />
              </div>
              {idx < CLIENTS_DATA.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline-block w-px h-9 bg-[#B8CEE6] shrink-0"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
