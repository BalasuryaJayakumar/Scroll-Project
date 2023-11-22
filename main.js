const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const anchorBtn = document.querySelector(".anchr_btn");
const anchorNav = document.querySelector(".header_nav");

anchorBtn.addEventListener("click", () => {
    anchorNav.classList.toggle("block");
})


const header = document.querySelector(".header");
const arrowBtn = document.querySelector(".div_scroll");
const figure = document.querySelector(".figure_btn");

window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height;
    if(scrollHeight > headerHeight) {
        header.classList.add("header_block");
    } else {
        header.classList.remove("header_block");
    }

    if (scrollHeight > 500) {
        arrowBtn.classList.add("block");
    } else {
        arrowBtn.classList.remove("block");
    }
});

const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const headerHeight = header.getBoundingClientRect().height;
        const navHeight = anchorNav.getBoundingClientRect().height;
        const headBlock = header.classList.contains("header_block");
        let position = element.offsetTop - headerHeight;

        if (!headBlock) {
            position = position - headerHeight;
        }

        if (headerHeight > 123) {
            position = position + navHeight;
        }
       window.scrollTo({
        left: 0,
        top: position,
       });
       anchorNav.classList.remove("block");
    })
})
 