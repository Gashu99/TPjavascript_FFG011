/*document.getElementsByClassName('bloc1').insertAdjacentHTML('afterbegin',`<table>
            
<tr><p id="first">Mon Premier</p></tr>
<tr><p id="second">Mon Deuxieme</p></tr>
<tr><p id="third">Mon Troisieme</p></tr>
<tr><p id="four">Mon Quatrieme</p></tr>
</table>`)


document.getElementsByClassName('bloc2').insertAdjacentHTML('afterbegin',`<button id="gauche">>></button>
<button id="droite"> << </button></div>`)*/
const  droite=document.getElementById('droite')
const gauche=document.getElementById('gauche')
let deplacer= function(){
    let bloc = document.querySelectorAll('p')
    let sens = document.querySelector('.bloc3')
    let direction = document.querySelector('button')
    const first=document.getElementById('first')
    const second=document.getElementById('second')
    const third=document.getElementById('third')
    const four=document.getElementById('four')
    
    for (i=0;i<bloc.length;i++){  
        if (bloc[i].id=='first' ){
            sens.appendChild(first)} 
           
        if (bloc[i].id=='second' ){
           sens .appendChild(second)}   }
   
            
        
        
        
    
    
    
    /*for (b of bloc){
        if (b.id=='first' ){
            if (direction.id=='droite'){
                sens .appendChild(first)
            }
            
           
        }
        else if (b.id=='second'){

             if (direction.id=='droite'){
                sens .appendChild(second)
            }
        }
    }*/
}
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
droite.addEventListener('click',deplacer)
gauche.addEventListener('click',rediriger)

