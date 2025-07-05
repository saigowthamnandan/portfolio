"use client';";
import {ThemeContext} from './ThemeContext';
import {useContext} from 'react';
import SvgIcon from './SvgIcon';
export default function ThemeToggle(): React.ReactElement {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div
      className="flex py-2 hover:py-3 hover:px-4 transistion-padding ease-in-out duration-300 text-[var(--clr-txt)]"
      onClick={toggleTheme}>
      {theme === 'dark' ? (
        <SvgIcon
          name="sun"
          alt="Mode"
          width={36}
          height={36}
          className="w-9 h-9 p-2 flex text-[var(--clr-txt)] items-center justify-center rounded-full transistion-bg ease-in-out duration-300 hover:bg-[var(--clr-comp-hover)] hover:text-[var(--clr-accent)]"
        />
      ) : (
        <SvgIcon
          name="moon"
          alt="Mode"
          width={36}
          height={36}
          className="w-9 h-9 p-2 flex items-center justify-center rounded-full transistion-bg ease-in-out duration-300 hover:bg-[var(--clr-comp-hover)] hover:text-[var(--clr-accent)]"
        />
      )}
    </div>
  );
}
