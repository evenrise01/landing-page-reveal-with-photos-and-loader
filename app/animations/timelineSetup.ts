import gsap from "gsap";
import { animateImages } from "./imageUtils";
import { ANIMATION_CONFIG } from "../constants/animationConfig";

/**
 * Setup the main animation timeline
 * Optimized with GPU acceleration and proper will-change handling
 */
export const setupMainTimeline = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      // Clean up will-change after animations complete
      gsap.set([".img", ".hero-bg", ".divider", ".logo", "span"], {
        clearProps: "will-change",
      });
    },
  });

  // Set initial states
  gsap.set(".img", { scale: 0 });

  // Loader background
  tl.to(".hero-bg", {
    scaleY: "100%",
    duration: ANIMATION_CONFIG.loader.duration,
    ease: "power2.inOut",
    delay: ANIMATION_CONFIG.loader.delay,
    force3D: true,
  });

  // Images appear
  tl.to(
    ".img",
    {
      scale: 1,
      duration: ANIMATION_CONFIG.images.duration,
      stagger: ANIMATION_CONFIG.images.stagger,
      ease: "power3.inOut",
      force3D: true,
    },
    "<"
  );

  // Counter fade out and trigger image animation
  tl.to(".counter", {
    opacity: 0,
    duration: 0.3,
    ease: "power3.out",
    delay: 0.3,
    onStart: () => {
      animateImages();
    },
  });

  // Sidebar divider
  tl.to(".sidebar .divider", {
    scaleY: "100%",
    duration: ANIMATION_CONFIG.dividers.duration,
    ease: "power3.inOut",
    delay: ANIMATION_CONFIG.dividers.delay,
    force3D: true,
  });

  // Nav and site-info dividers
  tl.to(
    ["nav .divider", ".site-info .divider"],
    {
      scaleX: "100%",
      duration: ANIMATION_CONFIG.dividers.duration,
      stagger: ANIMATION_CONFIG.dividers.stagger,
      ease: "power3.inOut",
      force3D: true,
    },
    "<"
  );

  // Logo scale
  tl.to(
    ".logo",
    {
      scale: 1,
      duration: ANIMATION_CONFIG.text.duration,
      ease: "power4.inOut",
      force3D: true,
    },
    "<"
  );

  // Navigation text
  tl.to(
    [".logo-name a span", ".links a span", ".cta a span"],
    {
      y: "0%",
      duration: ANIMATION_CONFIG.text.duration,
      stagger: ANIMATION_CONFIG.text.stagger,
      ease: "power4.inOut",
      delay: ANIMATION_CONFIG.text.delay,
      force3D: true,
    },
    "<"
  );

  // Header and footer text
  tl.to(
    [".header span", ".site-info span", ".hero-footer span"],
    {
      y: "0%",
      duration: ANIMATION_CONFIG.text.duration,
      stagger: ANIMATION_CONFIG.text.stagger,
      ease: "power4.out",
      force3D: true,
    },
    "<"
  );

  return tl;
};