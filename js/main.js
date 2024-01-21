document.addEventListener('DOMContentLoaded', () => {
  showCopyRightYearDynamically()
  showHideMenu()

  // Add other main.js functionality here if needed
});

const showHideMenu = () => {
  const menuBtn = document.getElementById("menuBtn");

  menuBtn.textContent = 'Show Menu';
  menuBtn.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    if (menuBtn.textContent === 'Show Menu') {
      navbar.style.opacity = 1;
      menuBtn.textContent = 'Hide Menu';
    } else {
      navbar.style.opacity = 0;
      menuBtn.textContent = 'Show Menu';
    }
  });
};

const showCopyRightYearDynamically = () => {
  const d = new Date();
  const year = document.getElementById("year")
  year.textContent = d.getFullYear()
}

