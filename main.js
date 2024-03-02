import 'waypoints/lib/noframework.waypoints.min';

// Facing Change JS

const $globalMenuBtns = document.querySelectorAll(
  '#global-menu-btn, #close-menu-btn, .menu-overlay'
);

const $siteNavBlock = document.querySelector('.site-nav-block');
const $siteNavMenu = document.querySelector('.site-nav-menu');
const $siteNavLinks = $siteNavMenu.querySelectorAll('.menu-item > a');

if ($globalMenuBtns.length) {
  $globalMenuBtns.forEach(($btn) => {
    $btn.addEventListener('click', (ev) => {
      ev.preventDefault();
      document.body.classList.toggle('nav-open');
      document.body.classList.toggle('nav-closed');
      $siteNavBlock?.scrollTop(0);
    });
  });
}

if ($siteNavLinks.length) {
  $siteNavLinks.forEach(($link) => {
    $link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      document.body.classList.add('nav-closed');
    });
  });
}

// waypoints
if (document.body.classList.contains('ppm-photo-book')) {
  const $bookPages = document.querySelectorAll('.book-page');
  if ($bookPages.length) {
    $bookPages.forEach(($page) => {
      new Waypoint({
        element: $page.querySelector('.page-content'),
        handler(direction) {
          if (direction && direction === 'down') {
            $page.classList.add('page-content-scrolling-down');
          } else {
            $page.classList.remove('page-content-scrolling-down');
          }
        },
        offset: '75%',
      });
    });
  }
}
