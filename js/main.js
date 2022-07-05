
let emblaNode = document.querySelector('.embla')
let options = { loop: false }

let embla = EmblaCarousel(emblaNode, options)


// Horarios

function getCurrentDate() {
    const currentDate = document.querySelector('.currentDate')
    currentDate.innerHTML = new Date().getHours() + ':' + new Date().getMinutes();

    currentDate = setInterval(getCurrentDate, 1000)
}
getCurrentDate()


// Menu

let openMenu = document.querySelector('nav ul')

let menuBtn = document.querySelector('.menuBtn')

function menuShow() {
    if (openMenu.classList.contains('open')) {
        menuBtn.classList.remove('open')
    } else {
        openMenu.classList.add('open')
    }


}
