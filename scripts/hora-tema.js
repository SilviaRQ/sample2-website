document.addEventListener("DOMContentLoaded", function () {
  const hour = new Date().getHours();
  const intro = document.getElementById("intro");

  if (!intro) return; // prevención por si no existe

  if (hour >= 5 && hour < 10) {
    intro.classList.add("morning");
  } else if (hour >= 18 && hour < 20) {
    intro.classList.add("evening");
  } else if (hour >= 20 || hour < 5) {
    intro.classList.add("night");
  }
});
