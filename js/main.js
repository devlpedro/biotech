
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
