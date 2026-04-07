const images = [
    "../assets/images/banner1.png",
    "../assets/images/banner2.png",
    "../assets/images/banner3.png"
];

let index = 0;
const bg = document.querySelectorAll(".bg");
const dots = document.querySelectorAll(".dot");
bg[0].style.backgroundImage = `url(${images[0]})`;
bg[1].style.backgroundImage = `url(${images[1]})`;

function showSlide(i) {
    let current = document.querySelector(".bg.active");
    let next = [...bg].find(el => !el.classList.contains("active"));

    next.style.backgroundImage = `url(${images[i]})`;

    current.classList.remove("active");
    next.classList.add("active");

    dots.forEach(dot => dot.classList.remove("active"));
    dots[i].classList.add("active");
}
let auto = setInterval(() => {
    index = (index + 1) % images.length;
    showSlide(index);
}, 2000);
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        index = parseInt(dot.dataset.index);
        showSlide(index);
        clearInterval(auto);
        auto = setInterval(() => {
            index = (index + 1) % images.length;
            showSlide(index);
        }, 2000);
    });
});