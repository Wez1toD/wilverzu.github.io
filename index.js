const sobre_mi_btn = document.getElementById("sobre_mi_btn");
const proyectos_btn = document.getElementById("proyectos_btn");
const contacto_btn = document.getElementById("contacto_btn");

const sobre_mi_section = document.getElementById("sobre_mi");
const proyectos_section = document.getElementById("sobre_mi");

let sobre_mi_height = sobre_mi_section.clientHeight;
let proyectos_height = proyectos_section.clientHeight;

const header_nav = document.querySelector("header nav");
const header_toggle = document.querySelector(".header_toggle");

sobre_mi_btn.addEventListener("click", () => {
	window.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
	});
});
proyectos_btn.addEventListener("click", () => {
	window.scrollTo({
		left: 0,
		top: sobre_mi_height,
		behavior: "smooth",
	});
});

contacto_btn.addEventListener("click", () => {
	window.scrollTo({
		left: 0,
		top: sobre_mi_height + proyectos_height,
		behavior: "smooth",
	});
});

header_toggle.addEventListener("click", () => {
	header_toggle.classList.toggle("active");
	header_nav.classList.toggle("active");
});
