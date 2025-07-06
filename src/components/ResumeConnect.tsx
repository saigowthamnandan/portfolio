'use client';
import {IconVariants} from '@/utils/enums';
import SvgIcon from './SvgIcon';

export default function ResumeConnect() {
  function handleResumeClick(language: 'de' | 'en') {
    const url = language === 'de' ? '/resume-de.pdf' : '/resume-en.pdf';
    window.open(url, '_blank');
  }
  return (
    <div className="flex flex-col md:flex-row gap-2 text-lg font-bold items-center w-full">
      <b> --- </b>Let’s build something great! ✨
      <div
        onClick={() => handleResumeClick('de')}
        className="flex justify-center gap-1 items-center no-underline bg-[var(--clr-accent)] text-white px-2.5 py-1.5 rounded-lg hover:bg-[var(--clr-accent-l1)] transition-all duration-300 ease-in-out hover:border-[var(--clr-accent-l1)] hover:shadow-[0px_4px_6px_-1px_var(--clr-accent-l2),0px_2px_4px_-1px_var(--clr-accent-l2)]">
        <SvgIcon alt="resume" name="pdf" variant={IconVariants.SMALL} className="flex items-center" />
        <div>Resume</div>
        <SvgIcon alt="german" name="germany" variant={IconVariants.MEDIUM} className="flex items-center" />
        <div className="text-[var(--clr-accent)] bg-white rounded-md p-1 text-xs">DE</div>
      </div>
      <div
        onClick={() => handleResumeClick('en')}
        className="flex justify-center gap-1 items-center no-underline bg-[var(--clr-accent)] text-white px-2.5 py-1.5 rounded-lg hover:bg-[var(--clr-accent-l1)] transition-all duration-300 ease-in-out hover:border-[var(--clr-accent-l1)] hover:shadow-[0px_4px_6px_-1px_var(--clr-accent-l2),0px_2px_4px_-1px_var(--clr-accent-l2)]">
        <SvgIcon alt="resume" name="pdf" variant={IconVariants.SMALL} className="flex items-center" />
        <div>Resume</div>
        <SvgIcon alt="english" name="uk" variant={IconVariants.MEDIUM} className="flex items-center" />
        <div className="text-[var(--clr-accent)] bg-white rounded-md p-1 text-xs">EN</div>
      </div>
    </div>
  );
}
