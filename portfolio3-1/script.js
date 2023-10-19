// document.addEventListener('DOMContentLoaded', function() {
//   let typed = new Typed(".auto-typed"), {
//     strings: ["Student", "educator"]
//     typeSpeed: 150,
//     backSpeed: 150,
//     loop: true,
//   });
// });

document.adddEventListener('DOMContentLoaded', function(){
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu');

  function toggleNavMenu() {
    if (window .innerWidth < 789) {
      if (navMenu.style.display === 'block' || navMenu.style.display === '') {
      } else {
        navMenu.style.display = 'block'
      }
    } else {
      navMenu.style.display = 'block';
    }
  }

  menuIcon.adddEventListener('click', function() {
    toggleNavMenu();
  })
  
  toggleNavMenu();
  window.addEventListener('resize', toggleNavMenu);
  
  let typed = new Typed(".auto-type", {
    strings: ["Student", "Educator"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});
});