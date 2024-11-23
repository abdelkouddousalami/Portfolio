
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".about, .projects, .contact");
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.classList.add("in-view");
      }
    });
  });
  
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  

  function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
  }
  
  