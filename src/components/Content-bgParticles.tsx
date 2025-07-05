'use client';
import {useContext} from 'react';
import BackgroundParticles from './Bg-particles';
import {ThemeContext} from './ThemeContext';
import {bgParticlesConfig} from '@/utils/helpers';

export default function ContentBgParticles() {
  const {theme} = useContext(ThemeContext);
  const optionsConfig = bgParticlesConfig(theme);
  console.log(theme);
  return <BackgroundParticles optionsConfig={optionsConfig} className="top-0 w-full h-full absolute -z-30" id="code-particles" />;
}
