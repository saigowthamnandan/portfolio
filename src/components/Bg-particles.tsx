'use client';
import {useCallback} from 'react';
import type {Engine, IOptions, RecursivePartial} from 'tsparticles-engine';
import {loadFull} from 'tsparticles';

import dynamic from 'next/dynamic'; // Import dynamic from Next.js

// Dynamically import the Particles component (no SSR)
const Particles = dynamic(() => import('react-tsparticles'), {ssr: false});

export default function BackgroundParticles({
  optionsConfig,
  className,
  id,
}: {
  optionsConfig: RecursivePartial<IOptions>;
  className?: string;
  id: string;
}) {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  const particlesLoaded = useCallback(async () => {}, []);
  return <Particles className={`${className}`} init={particlesInit} loaded={particlesLoaded} id={id} options={optionsConfig} />;
}
