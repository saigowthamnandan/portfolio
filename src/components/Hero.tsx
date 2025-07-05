'use client';
import IconCloud from './IconCloud';
import {useContext} from 'react';
import {particleNasaTheme} from '../utils/helpers';
import SpaceBg from './SpaceBg';
import {ThemeContext} from './ThemeContext';
import '@/styles/home.css';
import Image from 'next/image';
import BackgroundParticles from './Bg-particles';
import SvgIcon from './SvgIcon';

export default function Hero() {
  const {theme} = useContext(ThemeContext);

  return (
    <div className="hero-container">
      <div className="hero-1">{<IconCloud />}</div>
      <div className="hero-2">
        <div className="flex flex-col justify-center items-center gap-5 h-full">
          <div className="flex justify-center items-center gap-3 px-2">
            <Image
              src={'/gowtham.jpg'}
              alt="gowtham"
              className="rounded-full w-25 h-25 transistion-all ease-in-out duration-300 hover:scale-110"
              width={50}
              height={50}
              priority={true}
              loading="eager"
            />
            <div className="flex flex-col gap-1 justify-center">
              <div className="text-xl md:text-3xl text-center">
                Hi, I&apos;m Sai Gowtham Nandan Ganta<span className="wave">👋</span>
              </div>
              <div className="flex gap-1 items-center justify-center text-sm md:text-[16px]">
                <span>
                  <SvgIcon alt="location" name="location" />
                </span>
                <span>Bielefeld, North Rhine-Westphalia, Germany</span>
              </div>
            </div>
          </div>
          <div>
            <h1>
              <span className="outlined-txt">FULLSTACK</span>
            </h1>
            <h1>
              <span className="shine-txt">DEVELOPER</span> &
            </h1>
            <h1>
              <span className="highlight-txt">Solution</span> EXPERT
            </h1>
          </div>
        </div>
      </div>
      <div id="space-container" className="space-container">
        <SpaceBg />
        <BackgroundParticles
          optionsConfig={particleNasaTheme(theme)}
          className="top-0 left-0 w-full h-2/3 fixed -z-20"
          id="nasa-particles"
        />
      </div>
    </div>
  );
}
