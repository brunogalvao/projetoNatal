gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".content-page",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});

// let all = gsap.utils.toArray("body");

// gsap.to(all, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".plantas",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: "+=10",
//   }
// })