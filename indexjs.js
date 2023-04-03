const barre=document.getElementById('nav')
const menu=document.getElementById('menu')
const info=document.getElementById('myinfo')

barre.style.display= 'none'
info.style.display= 'none'


menu.addEventListener('click', ()=>{
    
    barre.style.display='block'
    info.style.display='block'
})