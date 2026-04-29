document.addEventListener("DOMContentLoaded", () =>  {
    console.log("Sitio cargando correctamente");

    //BOTON HACIA ARRIBA
    const btnTop = document.getElementById("btnTop");
    if (btnTop){
        window.addEventListener("scroll", () => {
            btnTop.style.display = window.scrollY >200 ? "block" : "none";
        });

        btnTop.addEventListener("click" , () => {
            window.scrollTo({ top: 0, behavior: "smooth"});
        });
    };

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("activo");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("activo");
    }
  });
});

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const countSpan = button.nextElementSibling;
    let count = parseInt(countSpan.textContent);

    if (button.classList.contains("liked")) {
      count--;
      button.classList.remove("liked");
    } else {
      count++;
      button.classList.add("liked");
    }

    countSpan.textContent = count;
  });
});