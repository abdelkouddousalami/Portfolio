// Scroll-based Animation Trigger
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
  
  // Background animation
  let hue = 0;
  function animateBackground() {
    hue += 0.5;
    document.body.style.backgroundColor = `hsl(${hue}, 70%, 15%)`;
    requestAnimationFrame(animateBackground);
  }
  
  animateBackground();
  
  function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
  }
  
  