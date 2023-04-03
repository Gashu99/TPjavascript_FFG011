const  droite=document.getElementById('droite')
const gauche=document.getElementById('gauche')


let rediriger= function(){
    let sens1 = document.querySelectorAll('.bloc3 p')
    let premierbloc=document.querySelector('.bloc1')
    let direction = document.querySelector('button')
    const first=document.getElementById('first')
    const second=document.getElementById('second')
    const third=document.getElementById('third')
    const four=document.getElementById('four')
    
    
        if (sens1[0].id=='first'){
            premierbloc.appendChild(first)}  
}
// transferer les elements de la gauche vers la droite 
let bloc = document.querySelectorAll('.bloc1 p')
let sens = document.querySelector('.bloc3')
let sensp = sens.querySelectorAll('.bloc3 p')

let direction = document.querySelector('button')
let premierbloc=document.querySelector('.bloc1')
bloc.forEach(i=>{
i.addEventListener('mouseover',(event)=>{
    let idele = event.target.id
    if (direction.id=='droite'){ 
        droite.addEventListener("click",()=>{sens.appendChild(document.getElementById(idele))})
        
            }
            
            
        })
    })

//Transferer de la droite vesr la gauche
sensp.forEach(i=>{
i.addEventListener('mouseover',(event)=>{
    let idele = event.target.id
    console.log(idele)
    if (direction.id=='gauche'){ 
        gauche.addEventListener("click",()=>{premierbloc.appendChild(document.getElementById(idele))})
            }
            
        })
    })
