function myFunction() {
  var element = document.getElementById("projects");
  element.classList.add("filters__active");
  var beg = document.getElementById("projek");
  beg.classList.add("filters-tab-active");
  var dong = document.getElementById("kemampuan");
  dong.classList.remove("filters-tab-active");
  var kamu = document.getElementById("skills");
  kamu.classList.remove("filters__active");
}
function myFunction2() {
  var kekuatan = document.getElementById("projects");
  kekuatan.classList.remove("filters__active");
  var power = document.getElementById("projek");
  power.classList.remove("filters-tab-active");
  var element = document.getElementById("skills");
  element.classList.add("filters__active");
  var peng = document.getElementById("kemampuan");
  peng.classList.add("filters-tab-active");
}
/*Dark Light Theme*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*Scroll Reveal Animation*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
});

sr.reveal(`.profile__border`);
sr.reveal(`.profile__name`, { delay: 400 });
sr.reveal(`.profile__profession`, { delay: 500 });
sr.reveal(`.profile__social`, { delay: 600 });
sr.reveal(`.profile__info-group`, { interval: 100, delay: 700 });
sr.reveal(`.profile__buttons`, { delay: 800 });
sr.reveal(`.filters_content`, { delay: 900 });
sr.reveal(`.filters`, { delay: 900 });
