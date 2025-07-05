'use client';
import ThemeToggle from './ThemeToggle';
import DockButton from './DockButton';
import '@/styles/components.css';
import SvgIcon from './SvgIcon';
import {IconVariants} from '@/utils/enums';
import Link from 'next/link';

const Dock = ({...props}): React.ReactElement => {
  return (
    <div className="dock" {...props}>
      <Link href="/" className="flex justify-center items-center w-full h-full">
        <SvgIcon alt="Home" name="gowtham-logo" variant={IconVariants.LARGE} className="cursor-pointer w-8 h-8 p-1" />
      </Link>
      <Link href="#about" className="flex justify-center items-center w-full h-full">
        About
      </Link>
      <Link href="#skills" className="flex justify-center items-center w-full h-full">
        Skills
      </Link>
      <Link href="#experience" className="flex justify-center items-center w-full h-full">
        Experience
      </Link>
      <Link href="#education" className="flex justify-center items-center w-full h-full">
        Education
      </Link>
      <DockButton data-tooltip-content="Github">
        <SvgIcon
          name={'github'}
          alt="Github"
          width={40}
          height={40}
          className="flex w-full h-full color-[var(--clr-text)] cursor-pointer"
        />
      </DockButton>
      <DockButton data-tooltip-content="Linkedin">
        <SvgIcon
          name={'linkedin'}
          alt="Linkedin"
          width={40}
          height={40}
          className="flex w-full h-full color-[var(--clr-text)] cursor-pointer"
        />
      </DockButton>
      <DockButton data-tooltip-content="Mail">
        <SvgIcon name={'mail'} alt="Mail" width={40} height={40} className="flex w-full h-full color-[var(--clr-text)] cursor-pointer" />
      </DockButton>
      {/* <DockButton data-tooltip-content="Theme"> */}
      <ThemeToggle />
      {/* </DockButton> */}
    </div>
  );
};

export default Dock;
