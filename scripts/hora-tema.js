document.addEventListener("DOMContentLoaded", function () {
  const hour = new Date().getHours();
  const intro = document.getElementById("intro");

  if (!intro) return; // prevención por si no existe

  if (hour >= 6 && hour < 11) {
    intro.classList.add("morning");
  } else if (hour >= 17 && hour < 19) {
    intro.classList.add("evening");
  } else if (hour >= 19 || hour < 6) {
    intro.classList.add("night");
  }
});
