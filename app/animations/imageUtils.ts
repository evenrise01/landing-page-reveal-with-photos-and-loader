import gsap from "gsap";
import { Flip } from "gsap/all";
import { ANIMATION_CONFIG } from "../constants/animationConfig";


/**
 * Animate images using GSAP Flip plugin
 * Images move from top-left to bottom-right with scale effects
 * Optimized for performance with GPU acceleration
 */
export const animateImages = () => {
  const images = document.querySelectorAll(".img");

  // Reset state
  images.forEach((img) => img.classList.remove("animate-out"));

  // Capture initial state
  const state = Flip.getState(images);

  // Apply final state
  images.forEach((img) => img.classList.add("animate-out"));

  // Create main timeline
  const mainTimeline = gsap.timeline();

  // Add flip animation with GPU acceleration
  mainTimeline.add(
    Flip.from(state, {
      duration: ANIMATION_CONFIG.images.duration,
      stagger: ANIMATION_CONFIG.images.stagger,
      ease: "power3.inOut",
      force3D: true,
    })
  );

  // Add scale animations for each image
  images.forEach((img, index) => {
    const scaleTimeline = gsap
      .timeline()
      .to(
        img,
        {
          scale: ANIMATION_CONFIG.images.scaleAmount,
          duration: ANIMATION_CONFIG.images.scaleDuration,
          ease: "power3.in",
          force3D: true,
        },
        0.025
      )
      .to(
        img,
        {
          scale: 1,
          duration: ANIMATION_CONFIG.images.scaleDuration,
          ease: "power3.out",
          force3D: true,
        },
        0.5
      );

    mainTimeline.add(scaleTimeline, index * ANIMATION_CONFIG.images.stagger);
  });

  return mainTimeline;
};