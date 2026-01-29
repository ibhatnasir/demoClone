function showSidebar() {
  const sideBarContainer = document.querySelector(".sideBarContainer");
  sideBarContainer.style.display = "flex";
}

function hideSidebar() {
  const sideBarContainer = document.querySelector(".sideBarContainer");
  sideBarContainer.style.display = "none";
}

// function toggleSearchBox() {
//   const InputSearchIconClose = document.querySelector(".InputSearchIconClose");
//   InputSearchIconClose.style.display = "block";
// }

// const scrollWheel = document.querySelector(".dramaCardsRow");

// scrollWheel.addEventListener(
//   "wheel",
//   (evt) => {
//     // If touchpad is scrolling horizontally, let browser handle it
//     if (Math.abs(evt.deltaX) > Math.abs(evt.deltaY)) return;

//     evt.preventDefault(); // only block vertical wheel
//     scrollWheel.scrollLeft += evt.deltaY;
//   },
//   { passive: false }
// );

let preLoader = document.querySelector(".preLoader");
window.addEventListener("load", function () {
  preLoader.style.display = "none";
});

function displayLogin() {
  window.location.href = "zLogin.html";
}

function displayGetapp() {
  window.location.href = "zGetapp.html";
}

