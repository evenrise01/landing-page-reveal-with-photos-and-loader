"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, Flip } from "gsap/all";

// Import animation utilities
import { setupTextSplitting } from "./animations/textUtils";
import { createCounterDigits, animateCounter } from "./animations/counterUtils";
import { setupMainTimeline } from "./animations/timelineSetup";
import { ANIMATION_CONFIG } from "./constants/animationConfig";
import { useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(SplitText, Flip);

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    
    // Setup
    setupTextSplitting();
    createCounterDigits();

    // Initialize counter animations
    animateCounter(
      document.querySelector(".counter-3"),
      ANIMATION_CONFIG.counter.duration.medium
    );
    animateCounter(
      document.querySelector(".counter-2"),
      ANIMATION_CONFIG.counter.duration.slow
    );
    animateCounter(
      document.querySelector(".counter-1"),
      ANIMATION_CONFIG.counter.duration.fast,
      ANIMATION_CONFIG.counter.delay
    );

    // Setup and run main timeline
    setupMainTimeline();
  }, {scope: containerRef});

  return (
    <section ref = {containerRef} className="hero">
      <div className="hero-bg" />

      <div className="counter">
        <div className="counter-1 digit" />
        <div className="counter-2 digit" />
        <div className="counter-3 digit" />
      </div>

      <div className="images-container">
        {[1, 2, 3, 4, 5, 10, 11, 12, 13, 15, 14].map((num) => (
          <div key={num} className="img">
            <img src={`/img-${num}.jpg`} alt="" />
          </div>
        ))}
      </div>

      <nav>
        <div className="logo-name">
          <a href="#">Evenrise</a>
        </div>

        <div className="nav-items">
          <div className="links">
            <a href="#">Portfolio</a>
            <p />
            <a href="#">About</a>
          </div>
        </div>

        <div className="cta">
          <a href="#">Contact Me</a>
        </div>

        <div className="divider" />
      </nav>

      <div className="sidebar">
        <div className="logo">
          <img src="/logo.jpg" alt="Logo" />
        </div>
        <div className="divider" />
      </div>

      <div className="header">
        <h1>Visual Designer for modern brands</h1>
      </div>

      <div className="site-info">
        <h2>
          A designer and developer with a passion for creating beautiful and
          functional websites.
        </h2>
        <div className="divider" />
        <div className="site-info-copy">
          <p>Award winning designer and developer based in India.</p>
          <p>Developing since 2024.</p>
        </div>
      </div>

      <div className="hero-footer">
        <h2>Showcase Reel</h2>
      </div>
    </section>
  );
}