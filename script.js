const sliderTrack = document.querySelector('.slider-track');

sliderTrack.addEventListener('mouseover', () => {
  sliderTrack.style.animationPlayState = 'paused';
});

sliderTrack.addEventListener('mouseout', () => {
  sliderTrack.style.animationPlayState = 'running';
});



