"use client";
import { useGSAP } from "@gsap/react";
// import "./index.css";

import gsap from "gsap";
import { SplitText, Flip } from "gsap/all";

gsap.registerPlugin(SplitText, Flip);

const setupTextSplitting = () => {
  const textElements = document.querySelectorAll("h1, h2, p, a");
  textElements.forEach((element) => {
    SplitText.create(element, {
      type: "lines",
      linesClass: "line",
    });

    const lines = element.querySelectorAll(".line");
    lines.forEach((line) => {
      const textContent = line.textContent || "";
      line.innerHTML = `<span>${textContent}</span> `;
    });
  });
};

const createCounterDigits = () => {
  const counter1 = document.querySelector(".counter-1");
  const num0 = document.createElement("div");
  num0.className = "num";
  num0.textContent = "0";
  counter1?.appendChild(num0);

  const num1 = document.createElement("div");
  num1.className = "num num1offset1";
  num1.textContent = "1";
  counter1?.appendChild(num1);

  const counter2 = document.querySelector(".counter-2");
  for (let i = 0; i <= 10; i++) {
    const numDiv = document.createElement("div");
    numDiv.className = i === 1 ? "num num1offset2" : "num";
    numDiv.textContent = i === 10 ? "0" : i.toString();
    counter2?.appendChild(numDiv);
  }

  const counter3 = document.querySelector(".counter-3");
  for (let i = 0; i <= 30; i++) {
    const numDiv = document.createElement("div");
    numDiv.className = "num";
    numDiv.textContent = (i % 10).toString();
    counter3?.appendChild(numDiv);
  }
  const finalNum = document.createElement("div");
  finalNum.className = "num";
  finalNum.textContent = "0";
  counter3?.appendChild(finalNum);
};

const animateCounter = (
  counter: HTMLElement,
  duration: number,
  delay: number = 0
) => {
  const numHeight = counter.querySelector(".num")?.clientHeight || 0;
  const totalDistance =
    (counter.querySelectorAll(".num").length - 1) * numHeight;

  gsap.to(counter, {
    y: -totalDistance,
    duration: duration,
    delay: delay,
    ease: "power2.inOut",
  });
};

function animateImages() {
  const images = document.querySelectorAll(".img");

  images.forEach((img) => {
    img.classList.remove("animate-out");
  });

  const state = Flip.getState(images);

  images.forEach((img) => img.classList.add("animate-out"));

  const mainTimeline = gsap.timeline();

  mainTimeline.add(
    Flip.from(state, { duration: 1, stagger: 0.1, ease: "power3.inOut" })
  );

  images.forEach((img, index) => {
    const scaleTimeline = gsap.timeline();

    scaleTimeline
      .to(
        img,
        {
          scale: 2.5,
          duration: 0.45,
          ease: "power3.in",
        },
        0.025
      )
      .to(
        img,
        {
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        },
        0.5
      );

    mainTimeline.add(scaleTimeline, index * 0.1);
  });
  return mainTimeline;
}

export default function Home() {
  useGSAP(() => {
    setupTextSplitting();
    createCounterDigits();

    animateCounter(document.querySelector(".counter-3") as HTMLElement, 2.5);
    animateCounter(document.querySelector(".counter-2") as HTMLElement, 3);
    animateCounter(document.querySelector(".counter-1") as HTMLElement, 2, 1.5);

    const tl = gsap.timeline();
    gsap.set(".img", { scale: 0 });

    tl.to(".hero-bg", {
      scaleY: "100%",
      duration: 3,
      ease: "power2.inOut",
      delay: 0.25,
    });

    tl.to(
      ".img",
      {
        scale: 1,
        duration: 1,
        stagger: 0.125,
        ease: "power3.inOut",
      },
      "<"
    );

    tl.to(".counter", {
      opacity: 0,
      duration: 0.3,
      ease: "power3.out",
      delay: 0.3,
      onStart: () => {
        animateImages();
      },
    });

    tl.to(".sidebar .divider", {
      scaleY: "100%",
      duration: 1,
      ease: "power3.inOut",
      delay: 1.25,
    });

    tl.to(
      ["nav .divider", ".site-info .divider"],
      {
        scaleX: "100%",
        duration: 1,
        stagger: 0.5,
        ease: "power3.inOut",
      },
      "<"
    );

    tl.to(
      ".logo",
      {
        scale: 1,
        duration: 1,
        ease: "power4.inOut",
      },
      "<"
    );

    tl.to(
      [".logo-name a span", ".links a span", ".cta a span"],
      {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: 0.5,
      },
      "<"
    );

    tl.to([".header span", ".site-info span", ".hero-footer span"], {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out'
    }, "<")
  }, {});

  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>

        <div className="counter">
          {/* Animated numbers that run during the loading sequence
      Digits will be created dynamically using GSAP */}
          <div className="counter-1 digit"></div>
          <div className="counter-2 digit"></div>
          <div className="counter-3 digit"></div>
        </div>

        <div className="images-container">
          <div className="img">
            <img src="/img-1.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-2.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-3.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-4.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-5.jpg" alt="" />
          </div>
          {/* <div className="img">
            <img src="/img-6.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-7.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-8.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-9.jpg" alt="" />
          </div> */}
          <div className="img">
            <img src="/img-10.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-11.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-12.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-13.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-15.jpg" alt="" />
          </div>
          <div className="img">
            <img src="/img-14.jpg" alt="" />
          </div>
        </div>

        <nav>
          <div className="logo-name">
            <a href="#">Evenrise</a>
          </div>

          <div className="nav-items">
            <div className="links">
              <a href="#">Portfolio</a>
              <p></p>
              <a href="#">About</a>
            </div>
          </div>

          <div className="cta">
            <a href="">Contact Me</a>
          </div>

          <div className="divider"></div>
        </nav>

        <div className="sidebar">
          <div className="logo">
            <img src="/logo.jpg" alt="" />
          </div>
          <div className="divider"></div>
        </div>

        <div className="header">
          <h1>Visual Designer for modern brands</h1>
        </div>

        <div className="site-info">
          <h2>
            A designer and developer with a passion for creating beautiful and
            functional websites.
          </h2>
          <div className="divider"></div>
          <div className="site-info-copy">
            <p>Award winning designer and developer based in India.</p>
            <p>Developing since 2024.</p>
          </div>
        </div>

        <div className="hero-footer">
          <h2>Showcase Reel</h2>
        </div>
      </section>
    </>
  );
}
