import {IOptions, RecursivePartial} from 'tsparticles-engine';

export const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

export const range = (start: number, end: number, step = 1) => {
  const output: number[] = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};

export const particleNasaTheme = (theme: string): RecursivePartial<IOptions> => ({
  autoPlay: true,
  backgroundMask: {
    composite: 'destination-out',
    cover: {
      opacity: 1,
      color: {
        value: '#000',
      },
    },
    enable: false,
  },
  clear: true,
  defaultThemes: {},
  delay: 0,
  fullScreen: false,
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: 'window',
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: 'circle',
      },
      onHover: {
        enable: true,
        mode: 'bubble',
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: 'ease-out-quad',
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 250,
        duration: 2,
        mix: false,
        opacity: 0,
        size: 0,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: 'ease-out-quad',
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      particle: {
        replaceCursor: false,
        pauseOnStop: false,
        stopDelay: 0,
      },
      light: {
        area: {
          gradient: {
            start: {
              value: '#ffffff',
            },
            stop: {
              value: '#000000',
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: '#000000',
          },
          length: 2000,
        },
      },
    },
  },
  manualParticles: [],
  particles: {
    bounce: {
      horizontal: {
        value: 1,
      },
      vertical: {
        value: 1,
      },
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      enable: false,
      maxSpeed: 50,
      mode: 'bounce',
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: theme === 'dark' ? `#ffffff` : `#000000`,
      animation: {
        h: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
        s: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
        l: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          delay: 0,
          sync: true,
          offset: 0,
        },
      },
    },
    effect: {
      close: true,
      fill: true,
      options: {},
      type: [],
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      center: {
        x: 50,
        y: 50,
        mode: 'percent',
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: 'none',
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: 'out',
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
      random: false,
      size: false,
      speed: {
        min: 0.1,
        max: 1,
      },
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fill: {},
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
      limit: 0,
      value: 240,
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1,
      },
      animation: {
        count: 0,
        enable: true,
        speed: 1,
        decay: 0,
        delay: 0,
        sync: false,
        mode: 'auto',
        startValue: 'random',
        destroy: 'none',
      },
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: '#000',
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      close: true,
      fill: true,
      options: {},
      type: 'circle',
    },
    size: {
      value: {
        min: 1,
        max: 3,
      },
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        decay: 0,
        delay: 0,
        sync: false,
        mode: 'auto',
        startValue: 'random',
        destroy: 'none',
      },
    },
    stroke: {
      width: 0,
    },
    zIndex: {
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
    destroy: {
      bounds: {},
      mode: 'none',
      split: {
        count: 1,
        factor: {
          value: 3,
        },
        rate: {
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
        particles: {},
      },
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: 'vertical',
      speed: 25,
    },
    tilt: {
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: 'clockwise',
      enable: false,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10,
      },
    },
    life: {
      count: 0,
      delay: {
        value: 0,
        sync: false,
      },
      duration: {
        value: 0,
        sync: false,
      },
    },
    rotate: {
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false,
      },
      direction: 'clockwise',
      path: false,
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        delay: 0,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        value: 45,
      },
      width: 1,
    },
    links: {
      blink: false,
      color: {
        value: '#fff',
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: '#000',
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    repulse: {
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  themes: [],
  zLayers: 100,
  key: 'nasa',
  name: 'NASA',
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
});

// export const bgParticlesConfig = (theme: string): RecursivePartial<IOptions> => ({
//   fpsLimit: 120,
//   interactivity: {
//     detect_on: 'window',
//     events: {
//       onClick: {
//         enable: true,
//         mode: 'repulse',
//       },
//       onHover: {
//         enable: true,
//         mode: 'grab',
//       },
//       resize: true,
//     },
//     modes: {
//       grab: {
//         distance: 200,
//         line_linked: {
//           opacity: 1,
//         },
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//       },
//       bubble: {
//         distance: 400,
//         size: 40,
//         duration: 2,
//         opacity: 8,
//         speed: 3,
//       },
//       push: {
//         particles_nb: 4,
//       },
//       remove: {
//         particles_nb: 2,
//       },
//     },
//   },
//   fullScreen: {
//     enable: true,
//     zIndex: -40,
//   },
//   style: {
//     position: 'absolute',
//     top: '3/4',
//     left: '0',
//     height: '100%',
//     width: '100%',
//   },
//   particles: {
//     color: {},
//     links: {
//       color: theme === 'dark' ? `#fff` : `#171929`,
//       distance: 100,
//       enable: true,
//       opacity: 0.5,
//       width: 1,
//     },
//     collisions: {
//       enable: false,
//     },
//     line_linked: {
//       enable: true,
//       distance: 100,
//       color: theme === 'dark' ? `#fff` : `#171929`,
//       opacity: 0.4,
//       width: 2.2,
//     },
//     move: {
//       direction: 'bottom-left',
//       enable: true,
//       out_mode: 'out',
//       random: true,
//       speed: 1,
//       straight: true,
//       attract: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 1200,
//       },
//     },
//     number: {
//       density: {
//         enable: true,
//         area: 800,
//       },
//       value: 80,
//     },
//     opacity: {
//       value: 100,
//       random: false,
//       anim: {
//         enable: false,
//         speed: 1,
//         // opacity_min: 0.1,
//         sync: false,
//       },
//     },
//     shape: {
//       type: 'image',
//       image: {
//         src: theme === 'dark' ? '/light-code.svg' : '/dark-code.svg',
//         height: 80,
//         width: 80,
//         replaceColor: false,
//       },
//     },
//     size: {
//       value: {
//         min: 2,
//         max: 12,
//       },
//       random: true,
//       anim: {
//         enable: false,
//         speed: 40,
//         size_min: 0.1,
//         sync: true,
//       },
//     },
//   },
//   detectRetina: false,
// });

export const bgParticlesConfig = (theme: string): RecursivePartial<IOptions> => ({
  fpsLimit: 120,
  interactivity: {
    detect_on: 'window',
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'grab',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  fullScreen: {
    enable: true,
    zIndex: -40,
  },
  style: {
    position: 'absolute',
    top: '3/4',
    left: '0',
    height: '100%',
    width: '100%',
  },
  particles: {
    color: {},
    links: {
      color: theme === 'dark' ? `#fff` : `#171929`,
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: false,
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: theme === 'dark' ? `#fff` : `#171929`,
      opacity: 0.4,
      width: 2.2,
    },
    move: {
      direction: 'none', // No direction, as we are using cursor to control movement
      enable: true,
      out_mode: 'out',
      random: false,
      speed: 0.5, // Slower movement for smoother 3D interaction
      straight: false, // Allow for free movement
      attract: {
        enable: false, // Disable individual attraction
      },
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80, // Number of particles to form the structure
    },
    opacity: {
      value: 100,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        sync: false,
      },
    },
    shape: {
      type: 'image',
      image: {
        src: theme === 'dark' ? '/light-code.svg' : '/dark-code.svg',
        height: 80,
        width: 80,
        replaceColor: false,
      },
    },
    size: {
      value: {
        min: 6,
        max: 12,
      },
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: true,
      },
    },
  },
  detectRetina: true, // Enable for higher resolution on retina displays
  threeD: {
    enable: true, // Enable 3D effect
    depth: 500, // Depth of the entire 3D structure
    camera: {
      enable: true,
      distance: 300, // Distance from camera to the particle structure
      rotation: {
        x: 1,
        y: 1,
        z: 0.5, // Apply rotation to camera for dynamic effect
      },
    },
  },
  custom: {
    mouseMovement: function (event: MouseEvent) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Normalize cursor position relative to the screen
      const normX = (mouseX / width) * 2 - 1; // Value between -1 and 1
      const normY = -(mouseY / height) * 2 + 1; // Value between -1 and 1

      // Set the 3D structure to move based on cursor position
      const depth = 500; // You can adjust this to simulate the depth of the structure
      const xPos = normX * depth;
      const yPos = normY * depth;

      // Move the entire structure based on cursor position
      const particles = document.querySelectorAll('.particle'); // Assuming you have a class for your particles
      particles.forEach((particle) => {
        (particle as HTMLElement).style.transform = `translate3d(${xPos}px, ${yPos}px, 0px)`; // Move particles in 3D space
      });
    },
  },
});
