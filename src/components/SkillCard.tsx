import React from 'react';
import Image from 'next/image';

export default function Card({
  heading = ' ',
  skills = [],
  hcolor = 'var(--clr-accent)',
}: {
  heading: string;
  skills: {name: string; icon: string; type?: string}[];
  hcolor?: string;
}) {
  return (
    <div
      className="p-3 bg-[var(--clr-comp)] rounded-xl shadow-[2px_2px_2.5px_rgba(0,0,0,0.15)] border-[1px] border-[var(--clr-bdr)]"
      style={{'--clr': hcolor, color: 'var(--clr)'} as React.CSSProperties}>
      <h3 className="flex items-center gap-2 text-lg font-semibold mb-2">
        <svg
          viewBox="0 0 24 24"
          width={24}
          height={24}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round">
          <path strokeWidth="3" d="M5.99 6H6m5.99 0H12m5.99 0H18M5.99 12H6m5.99 0H12m5.99 0H18M5.99 18H6m5.99 0H12m5.99 0H18" />
        </svg>
        {heading}
      </h3>
      <ul className="skill-list">
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.icon && (
              <Image
                className="skill-icon"
                loading="lazy"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
                data-tooltip-id={skill.name}
                data-tooltip-content={skill.name}
                data-tooltip-place="top"
                data-tooltip-delay-show={500}
                data-tooltip-delay-hide={100}
                data-tooltip-style={{'--clr': hcolor, color: 'var(--clr)'}}
                data-tooltip-arrow={false}
                src={
                  skill.icon.startsWith('https://')
                    ? skill.icon
                    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-${
                        skill.type || 'original'
                      }.svg`
                }
                alt={skill.name}
                width={24}
                height={24}
              />
            )}
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
