'use client';
import ThemeToggle from './ThemeToggle';
import DockButton from './DockButton';
import '@/styles/components.css';
import SvgIcon from './SvgIcon';
import {IconVariants} from '@/utils/enums';
import Link from 'next/link';
import {useEffect, useState} from 'react';

const sections = ['about', 'skills', 'experience', 'education', 'projects', 'contact'];
const Dock = ({...props}): React.ReactElement => {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      let found = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            found = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    handleScroll(); // Set on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleSectionClick(section: string) {
    setActiveSection(section);
  }
  return (
    <div className="dock" {...props}>
      <Link href="#home" className="flex justify-center items-center w-full h-full">
        <SvgIcon alt="Home" name="gowtham-logo" variant={IconVariants.LARGE} className="cursor-pointer w-8 h-8 p-1" />
      </Link>
      <Link
        onClick={() => {
          handleSectionClick('#about');
        }}
        href="#about"
        className={`flex justify-center items-center w-full h-full  hover:text-[var(--clr-accent)] ${
          activeSection === '#about' ? 'text-[var(--clr-accent)] border-b-2 border-[var(--clr-accent)]' : 'text-[var(--clr-text)]'
        }`}>
        About
      </Link>
      <Link
        onClick={() => {
          handleSectionClick('#skills');
        }}
        href="#skills"
        className={`flex justify-center items-center w-full h-full  hover:text-[var(--clr-accent)] ${
          activeSection === '#skills' ? 'text-[var(--clr-accent)] border-b-2 border-[var(--clr-accent)]' : 'text-[var(--clr-text)]'
        }`}>
        {' '}
        Skills
      </Link>
      <Link
        onClick={() => {
          handleSectionClick('#experience');
        }}
        href="#experience"
        className={`flex justify-center items-center w-full h-full  hover:text-[var(--clr-accent)] ${
          activeSection === '#experience' ? 'text-[var(--clr-accent)] border-b-2 border-[var(--clr-accent)]' : 'text-[var(--clr-text)]'
        }`}>
        {' '}
        Experience
      </Link>
      <Link
        onClick={() => {
          handleSectionClick('#education');
        }}
        href="#education"
        className={`flex justify-center items-center w-full h-full  hover:text-[var(--clr-accent)] ${
          activeSection === '#education' ? 'text-[var(--clr-accent)] border-b-2 border-[var(--clr-accent)]' : 'text-[var(--clr-text)]'
        }`}>
        {' '}
        Education
      </Link>
      <Link
        onClick={() => {
          handleSectionClick('#projects');
        }}
        href="#projects"
        className={`flex justify-center items-center w-full h-full  hover:text-[var(--clr-accent)] ${
          activeSection === '#projects' ? 'text-[var(--clr-accent)] border-b-2 border-[var(--clr-accent)]' : 'text-[var(--clr-text)]'
        }`}>
        {' '}
        Projects
      </Link>
      <Link
        onClick={() => {
          handleSectionClick('#contact');
        }}
        href="#contact"
        className={`flex justify-center items-center w-full h-full  hover:text-[var(--clr-accent)] ${
          activeSection === '#contact' ? 'text-[var(--clr-accent)] border-b-2 border-[var(--clr-accent)]' : 'text-[var(--clr-text)]'
        }`}>
        {' '}
        Contact
      </Link>
      <DockButton data-tooltip-content="Linkedin">
        <Link href="https://www.linkedin.com/in/ganta-sai-gowtham-nandan-218b93185/" target="_blank" rel="noopener noreferrer">
          <SvgIcon
            name={'linkedin'}
            alt="Linkedin"
            width={40}
            height={40}
            className="flex w-full h-full color-[var(--clr-text)] cursor-pointer"
          />
        </Link>
      </DockButton>
      <DockButton data-tooltip-content="Github">
        <Link href="https://github.com/saigowthamnandan" target="_blank" rel="noopener noreferrer">
          <SvgIcon
            name={'github'}
            alt="Github"
            width={40}
            height={40}
            className="flex w-full h-full color-[var(--clr-text)] cursor-pointer"
          />
        </Link>
      </DockButton>
      <DockButton data-tooltip-content="Mail">
        <Link href="mailto:saigowthamnandanganta0208@gmail.com" target="_blank" rel="noopener noreferrer">
          <SvgIcon name={'mail'} alt="Mail" width={40} height={40} className="flex w-full h-full color-[var(--clr-text)] cursor-pointer" />
        </Link>
      </DockButton>
      {/* <DockButton data-tooltip-content="Theme"> */}
      <ThemeToggle />
      {/* </DockButton> */}
    </div>
  );
};

export default Dock;
