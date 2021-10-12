const hamburgesa = document.querySelector('.hamburgesa')
const menu = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(hamburgesa)

hamburgesa.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})