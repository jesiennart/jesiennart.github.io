document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')

    function addShadow() {
        if (window.scrollY >= 100) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

    window.addEventListener('scroll', addShadow)

})

//project

const cardOne = document.querySelector('.card-one')
const cardTwo = document.querySelector('.card-two')
const cardThre = document.querySelector('.card-thre')
const cardFootOne = document.querySelector('.foot-one')
const cardFootTwo = document.querySelector('.foot-two')
const cardFooThre = document.querySelector('.foot-thre')

const colorIn = (params) => {
    cardFootOne.classList.add('pink')
}
const colorOut = (params) => {
    cardFootOne.classList.remove('pink')
}
const colorIn1 = (params) => {
    cardFootTwo.classList.add('pink')
}
const colorOut1 = (params) => {
    cardFootTwo.classList.remove('pink')
}
const colorIn2 = (params) => {
    cardFooThre.classList.add('pink')
}
const colorOut2 = (params) => {
    cardFooThre.classList.remove('pink')
}

cardOne.addEventListener('mouseover', colorIn)
cardTwo.addEventListener('mouseover', colorIn1)
cardThre.addEventListener('mouseover', colorIn2)
cardOne.addEventListener('mouseout', colorOut)
cardTwo.addEventListener('mouseout', colorOut1)
cardThre.addEventListener('mouseout', colorOut2)


//skills

const skillOne = document.querySelector('.skill-one')
const skillTwo = document.querySelector('.skill-two')
const skillThre = document.querySelector('.skill-thre')
const skillFour = document.querySelector('.skill-four')
const skillFive = document.querySelector('.skill-five')
const skillSix = document.querySelector('.skill-six')
const fa = document.querySelector('.fa-html5')
const fa2 = document.querySelector('.fa-css3')
const fa3 = document.querySelector('.fa-sass')
const fa4 = document.querySelector('.fa-bootstrap')
const fa5 = document.querySelector('.fa-node-js')
const fa6 = document.querySelector('.fa-react')

const percIn = (params) => {
    fa.classList.remove('fa-html5')
    fa.textContent = '95%'
    fa.style.fontStyle = ('normal')
}
const percOut = (params) => {
    fa.classList.add('fa-html5')
    fa.textContent = ''
}
const percIn2 = (params) => {
    fa2.classList.remove('fa-css3')
    fa2.textContent = '90%'
    fa2.style.fontStyle = ('normal')
}
const percOut2 = (params) => {
    fa2.classList.add('fa-css3')
    fa2.textContent = ''
}
const percIn3 = (params) => {
    fa3.classList.remove('fa-sass')
    fa3.textContent = '90%'
    fa3.style.fontStyle = ('normal')
}
const percOut3 = (params) => {
    fa3.classList.add('fa-sass')
    fa3.textContent = ''
}
const percIn4 = (params) => {
    fa4.classList.remove('fa-bootstrap')
    fa4.textContent = '70%'
    fa4.style.fontStyle = ('normal')
}
const percOut4 = (params) => {
    fa4.classList.add('fa-bootstrap')
    fa4.textContent = ''
}
const percIn5 = (params) => {
    fa5.classList.remove('fa-node-js')
    fa5.textContent = '60%'
    fa5.style.fontStyle = ('normal')
}
const percOut5 = (params) => {
    fa5.classList.add('fa-node-js')
    fa5.textContent = ''
}
const percIn6 = (params) => {
    fa6.classList.remove('fa-react')
    fa6.textContent = '50%'
    fa6.style.fontStyle = ('normal')
}
const percOut6 = (params) => {
    fa6.classList.add('fa-react')
    fa6.textContent = ''
}


skillOne.addEventListener('mouseover', percIn)
skillOne.addEventListener('mouseout', percOut)
skillTwo.addEventListener('mouseover', percIn2)
skillTwo.addEventListener('mouseout', percOut2)
skillThre.addEventListener('mouseover', percIn3)
skillThre.addEventListener('mouseout', percOut3)
skillFour.addEventListener('mouseover', percIn4)
skillFour.addEventListener('mouseout', percOut4)
skillFive.addEventListener('mouseover', percIn5)
skillFive.addEventListener('mouseout', percOut5)
skillSix.addEventListener('mouseover', percIn6)
skillSix.addEventListener('mouseout', percOut6)