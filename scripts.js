
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".about, .projects, .contact");
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add("in-view");
      }
    });
  });
  function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
  }
  
  