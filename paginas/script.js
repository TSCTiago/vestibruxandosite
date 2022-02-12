const hamburguer = document.querySelector('.hamburguer');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');



hamburguer.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})