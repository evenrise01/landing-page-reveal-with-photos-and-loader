// Animation configuration constants
export const ANIMATION_CONFIG = {
    counter: {
      duration: { fast: 2, medium: 2.5, slow: 3 },
      delay: 1.5,
    },
    loader: {
      duration: 3,
      delay: 0.25,
    },
    images: {
      duration: 1,
      stagger: 0.125,
      scaleDuration: 0.45,
      scaleAmount: 2.5,
    },
    dividers: {
      duration: 1,
      delay: 1.25,
      stagger: 0.5,
    },
    text: {
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
    },
  } as const;