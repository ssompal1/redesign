
document.getElementById("x").addEventListener('click',function() {
    document.getElementById('error-card').style.display = 'none';
});

document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('menu-items');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

  document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active'); 
    const leftButtons = document.getElementById('left-buttons');
    if (this.classList.contains('active')) {
      leftButtons.style.display = 'flex'; 
    } else {
      leftButtons.style.display = 'none'; 
    }
  });

