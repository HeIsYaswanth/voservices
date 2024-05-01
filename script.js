var t1 = gsap.timeline();
t1.from("#nav h4", {
  y: -50,
  opacity: 0,
  duration: 0.7,
});

t1.from("#menu a", {
  y: -50,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
  delay: -0.5,
});

t1.from("#heading h1", {
  x: -200,
  opacity: 0,
  duration: 0.9,
  stagger: 0.3,
});

t1.from("#images img", {
  rotate: 20,
  opacity: 0,
  duration: 4,
  stagger: 0.8,
});
