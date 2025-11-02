import gsap from "gsap";

/**
 * Create counter digit elements dynamically
 * Uses DocumentFragment for optimized DOM manipulation
 */
export const createCounterDigits = () => {
  // Counter 1: 0-1
  const counter1 = document.querySelector(".counter-1");
  if (counter1) {
    const fragment = document.createDocumentFragment();
    [0, 1].forEach((num, index) => {
      const div = document.createElement("div");
      div.className = index === 1 ? "num num1offset1" : "num";
      div.textContent = num.toString();
      fragment.appendChild(div);
    });
    counter1.appendChild(fragment);
  }

  // Counter 2: 0-10
  const counter2 = document.querySelector(".counter-2");
  if (counter2) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i <= 10; i++) {
      const div = document.createElement("div");
      div.className = i === 1 ? "num num1offset2" : "num";
      div.textContent = i === 10 ? "0" : i.toString();
      fragment.appendChild(div);
    }
    counter2.appendChild(fragment);
  }

  // Counter 3: 0-9 repeated + final 0
  const counter3 = document.querySelector(".counter-3");
  if (counter3) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i <= 30; i++) {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = (i % 10).toString();
      fragment.appendChild(div);
    }
    const finalNum = document.createElement("div");
    finalNum.className = "num";
    finalNum.textContent = "0";
    fragment.appendChild(finalNum);
    counter3.appendChild(fragment);
  }
};

/**
 * Animate counter by scrolling through digits
 * Uses will-change for GPU acceleration
 */
export const animateCounter = (
  counter: HTMLElement | null,
  duration: number,
  delay: number = 0
) => {
  if (!counter) return;

  const numHeight = counter.querySelector(".num")?.clientHeight || 0;
  const totalDistance =
    (counter.querySelectorAll(".num").length - 1) * numHeight;

  gsap.to(counter, {
    y: -totalDistance,
    duration,
    delay,
    ease: "power2.inOut",
    force3D: true, // Force GPU acceleration
  });
};