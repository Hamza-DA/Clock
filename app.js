const seconds = document.querySelector('.r')
const minustes = document.querySelector('.t')
const hours = document.querySelector('.s')

let dseconds = document.querySelector('#ds')
let dminutes = document.querySelector('#dm')
let dhours = document.querySelector('#dh')
let zone = document.querySelector('#z')

seconds.style.transform = `translateY(50%)`

function clock() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    dhours.innerHTML = h
    dminutes.innerHTML = m
    dseconds.innerHTML = s
    if (h > 12) {
        zone.innerHTML = 'PM'
    }
    seconds.style.transform = `rotate(${s / 60 * 360}deg)`
    minustes.style.transform = `rotate(${m / 60 * 360}deg)`
    hours.style.transform = `rotate(${h / 60 * 360}deg)`
}

setInterval(clock, 1000);