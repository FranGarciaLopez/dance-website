import gsap from "https://cdn.skypack.dev/gsap";
import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import SplitType from "https://cdn.skypack.dev/split-type";

gsap.registerPlugin(ScrollTrigger);

export function animateParagraph(selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  const split = new SplitType(el, { types: "lines, words, chars" });

  gsap.fromTo(
    split.words,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        end: "bottom 50%",
        scrub: 0.3,
        // markers: true,
      },
    }
  );
}
