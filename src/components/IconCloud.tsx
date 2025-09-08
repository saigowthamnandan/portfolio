'use client';
import {useContext} from 'react';
import {Cloud, renderSimpleIcon} from 'react-icon-cloud';
import {
  siPython,
  siReact,
  siJavascript,
  siMongodb,
  siTypescript,
  siRedux,
  siNextdotjs,
  siAngular,
  siNestjs,
  siFastify,
  siDotnet,
  siDocker,
  siKubernetes,
  siTerraform,
  siJenkins,
  siNginx,
  siGithubactions,
  siGitlab,
  siMysql,
  siRedis,
  siStorybook,
  siExpress,
  siVite,
  siGit,
  siGithub,
  siVercel,
  siMui,
  siHtml5,
  siCss,
  siTailwindcss,
  siCanva,
  siGooglegemini,
  siChakraui,
  siOpenai,
  siNodedotjs,
  siBootstrap,
  siFigma,
  siFastapi,
  siPostgresql,
} from 'simple-icons';
import {ThemeContext} from './ThemeContext';

const cloudIcons = [
  siPython,
  siReact,
  siJavascript,
  siMongodb,
  siChakraui,
  siExpress,
  siVite,
  siGit,
  siGithub,
  siVercel,
  siMui,
  siHtml5,
  siCss,
  siTailwindcss,
  siCanva,
  siGooglegemini,
  siOpenai,
  siNodedotjs,
  siBootstrap,
  siFigma,
  siTypescript,
  siRedux,
  siNextdotjs,
  siAngular,
  siNestjs,
  siFastify,
  siDotnet,
  siDocker,
  siKubernetes,
  siTerraform,
  siJenkins,
  siNginx,
  siGithubactions,
  siGitlab,
  siMysql,
  siRedis,
  siStorybook,
  siFastapi,
  siPostgresql,
];

const IconCloud = () => {
  const {theme} = useContext(ThemeContext);

  const icons =
    typeof window !== 'undefined' &&
    [...cloudIcons].map((icon) => {
      return renderSimpleIcon({
        minContrastRatio: 21,
        fallbackHex: theme == 'dark' ? '#fff' : '#000',
        icon,
        size: 72,
        aProps: {
          onClick: (e) => e.preventDefault(),
        },
      });
    });

  return (
    <>
      {typeof window !== 'undefined' && (
        <Cloud
          options={{
            // activateAudio: false,
            outlineMethod: 'none',
            pinchZoom: false,
            wheelZoom: false,
            initial: [0.1, 0.1],
            minSpeed: 0.01,
            clickToFront: 500,
            reverse: true,
          }}
          containerProps={{
            className: 'w-11/12 md:w-full',
          }}>
          {icons}
        </Cloud>
      )}
    </>
  );
};

export default IconCloud;
