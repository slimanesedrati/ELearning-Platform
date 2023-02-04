const toggle = document.getElementById("hamburger")
const nav_list = document.querySelector('.nav-list')
const down = document.getElementById("down")
const li_one  = document.querySelector('.opt.op1') 
const li_two  = document.querySelector('.opt.op2')
const overlay = document.querySelector('.overlay')

toggle.addEventListener("click",() => {
    nav_list.classList.toggle("show")
    toggle.classList.toggle("active")
    overlay.classList.toggle("show")
})

down.addEventListener("click",() => {
    li_one.classList.toggle("active")
    li_two.classList.toggle("active")
})
