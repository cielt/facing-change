// Facing Change JS

const $globalMenuBtns = document.querySelectorAll(
  '#global-menu-btn, #close-menu-btn, .menu-overlay'
);

const $siteNavBlock = document.querySelector('.site-nav-block');

console.log($globalMenuBtns);
console.log($siteNavBlock);

if ($globalMenuBtns.length) {
  $globalMenuBtns.forEach(($btn) => {
    $btn.addEventListener('click', (ev) => {
      ev.preventDefault();
      document.body.classList.toggle('nav-open');
      document.body.classList.toggle('nav-closed');
      $siteNavBlock.scrollTop(0);
    });
  });
}
