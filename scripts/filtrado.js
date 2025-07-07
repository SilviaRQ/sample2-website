const botones = document.querySelectorAll(".filter-btn");
const proyectos = document.querySelectorAll(".proyecto");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const filtro = boton.getAttribute("data-filter");

    proyectos.forEach(proyecto => {
      const categoria = proyecto.getAttribute("data-category");

      if (filtro === "all" || categoria === filtro) {
        proyecto.classList.remove("oculto");
      } else {
        proyecto.classList.add("oculto");
      }
    });
  });
});
