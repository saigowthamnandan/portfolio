import Link from 'next/link';
import SvgIcon from './SvgIcon';
import {IconVariants} from '@/utils/enums';

type TimelineItemProps = {
  children: React.ReactNode;
  icon: React.ReactNode | string;
  color?: string;
  bgColor?: string;
  to?: string;
  reverse?: boolean;
  iconSize?: IconVariants;
};

export default function TimelineItem({
  children,
  icon,
  iconSize,
  color = 'var(--clr-accent)',
  bgColor = 'transparent',
  to,
}: TimelineItemProps) {
  let IconElement;
  if (typeof icon === 'string') {
    IconElement = <SvgIcon name={icon} alt={icon} variant={iconSize} />;
  } else {
    IconElement = icon;
  }

  const style: React.CSSProperties & Record<string, string> = {
    '--clr': color,
    '--bg-clr': bgColor,
  } as React.CSSProperties & Record<string, string>;

  if (!to) {
    return (
      <li className="timeline-item" style={style}>
        <div className="timeline-icon">{IconElement}</div>
        <div className="new-comment">{children}</div>
      </li>
    );
  }

  return (
    <li className="timeline-item" style={style}>
      <Link href={to} target="_blank" rel="noreferrer">
        <div className="timeline-icon">{IconElement}</div>
        <div className="new-comment">{children}</div>
      </Link>
    </li>
  );
}

const TimeStamp = ({stamp}: {stamp: string}) => {
  return <div className="stamp">{stamp}</div>;
};

export function Timeline({children, reverse}: {children: React.ReactNode; reverse?: boolean}) {
  return (
    <ol
      className={`list-style-none border-l-[3px] border-l-[var(--clr-accent)] pr-4 flex flex-col gap-8 ${
        reverse && 'border-l-0 border-r-[3px] border-r-[var(--clr-accent)] flex-row-reverse justify-start self-end items-end'
      }`}>
      {children}
    </ol>
  );
}

export {TimeStamp};
