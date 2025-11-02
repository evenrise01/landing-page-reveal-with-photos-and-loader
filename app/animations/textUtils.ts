import { SplitText } from "gsap/all";

/**
 * Setup text splitting for animations
 * Splits text elements into lines and wraps them in spans
 * Uses DocumentFragment for better performance
 */
export const setupTextSplitting = () => {
  const textElements = document.querySelectorAll("h1, h2, p, a");
  
  // Batch DOM operations
  textElements.forEach((element) => {
    const split = SplitText.create(element, {
      type: "lines",
      linesClass: "line",
    });

    // Use DocumentFragment to minimize reflows
    split.lines.forEach((line) => {
      const textContent = line.textContent || "";
      const span = document.createElement("span");
      span.textContent = textContent;
      line.innerHTML = "";
      line.appendChild(span);
    });
  });
};