const hamburger = document.getElementById('hamburger');
const leftButtons = document.getElementById('left-buttons');

hamburger.addEventListener('click', function () {
  this.classList.toggle('active');
  //after hamburger clicked display the left buttons columnwise
  if (this.classList.contains('active')) {
    leftButtons.style.display = 'flex';
  } else {
    leftButtons.style.display = 'none';
  }
});

window.addEventListener('resize', () => {
  //when resize bigger than mobile, automatically reset leftbuttons and hamburger
  if (window.innerWidth > 475) {
    leftButtons.style.display = 'flex';
    hamburger.classList.remove('active');
  } else {
    leftButtons.style.display = hamburger.classList.contains('active') ? 'flex' : 'none';
  }
});


