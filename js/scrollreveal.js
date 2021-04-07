ScrollReveal({ duration: 600 })

ScrollReveal({
  reset: true
});
ScrollReveal().reveal('.show-1', {
  deley: 100
})
ScrollReveal().reveal('.show-2', {
  delay: 300
})
ScrollReveal().reveal('.show-3', {
  delay: 500
})
var slideUp = {
  distance: '50%',
  origin: 'bottom',
  opacity: 0
};
ScrollReveal().reveal('.slide', slideUp);