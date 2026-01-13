function showSidebar() {
    const sideBarContainer = document.querySelector('.sideBarContainer');
    sideBarContainer.style.display = 'flex';
}

function hideSidebar() {
    const sideBarContainer = document.querySelector('.sideBarContainer');
    sideBarContainer.style.display = 'none';
}

const scrollWheel = document.querySelector('.dramaCardsRow');

scrollWheel.addEventListener(
  'wheel',
  (evt) => {
    // If touchpad is scrolling horizontally, let browser handle it
    if (Math.abs(evt.deltaX) > Math.abs(evt.deltaY)) return;

    evt.preventDefault(); // only block vertical wheel
    scrollWheel.scrollLeft += evt.deltaY;
  },
  { passive: false }
);
