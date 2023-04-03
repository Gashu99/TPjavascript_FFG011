
const suivant1=document.getElementById('suivant1')
const suivant2=document.getElementById('suivant2')
const suivant3=document.getElementById('suivant3')
const suivant4=document.getElementById('suivant4')

const rejouer=document.getElementById('rejouer')

const gd= document.getElementById('grandscore')

const serie1=document.getElementById('serie1')
const serie2=document.getElementById('serie2')
const serie3=document.getElementById('serie3')
const serie4=document.getElementById('serie4')
// DISPLAY DES AUTRES BLOCS 
serie2.style.display="none"
serie3.style.display="none"
serie4.style.display="none"
gd.style.display="none"
rejouer.style.display="none"


const scor=document.getElementById('score')
suivant1.addEventListener("click", ()=>{
    serie1.style.display="none"
    serie3.style.display="none"
    serie4.style.display="none"
    serie2.style.display="block"
})
suivant2.addEventListener("click", ()=>{
    serie4.style.display="none"
    serie2.style.display="none"
    serie1.style.display="none"
    serie3.style.display="block"
})
suivant3.addEventListener("click", ()=>{
    serie1.style.display="none"
    serie2.style.display="none"
    serie3.style.display="none"
    serie4.style.display="block"
})

function calculerscore(){

    
const rep1=document.querySelectorAll('input[name="s1"]')
const rep2=document.querySelectorAll('input[name="s2"]')
const rep3=document.querySelectorAll('input[name="s3"]')
const rep4=document.querySelectorAll('input[name="s4"]')
    let score=0
    rep1.forEach(i=>{
        if (i.checked && i.getAttribute('data-repcorrect')==="true"){
        score++
    }})
    rep2.forEach(i=>{
        if (i.checked && i.getAttribute('data-repcorrect')==="true"){
        score++
    }})
    rep3.forEach(i=>{
        if (i.checked && i.getAttribute('data-repcorrect')==="true"){
        score++
    }})
    rep4.forEach(i=>{
        if (i.checked && i.getAttribute('data-repcorrect')==="true"){
        score++
    }})
    return score
}
function lareponse(){
    
    const rep1=document.querySelectorAll('input[name="s1"]');
    const rep2=document.querySelectorAll('input[name="s2"]');
    const rep3=document.querySelectorAll('input[name="s3"]')
    const rep4=document.querySelectorAll('input[name="s4"]')
    let rep1selectionne = false;
    let rep2selectionne = false;
    let rep3selectionne = false;
    let rep4selectionne = false;
        rep1.forEach(i=>{
            if (i.checked){
        rep1selectionne = true;
                
        }})
        rep2.forEach(i=>{
            if (i.checked){
        rep2selectionne = true;
                
        }})
        rep3.forEach(i=>{
            if (i.checked){
        rep3selectionne = true;
                
        }})
        rep4.forEach(i=>{
            if (i.checked){
        rep4selectionne = true;
                
        }})
    }
const rep = document.querySelectorAll('input[type="radio"]')
rep.forEach(i=>{
    i.addEventListener("change", () => {
        lareponse()
    })
})
suivant4.addEventListener("click", () => {
    const sc = calculerscore()
    serie4.style.display="none"
    suivant2.style.display="none"
    gd.style.display="block"
    scor.innerText=`Bravo 🤩🤩 Vous avez trouvé: ${sc} /4`
    rejouer.style.display="block"

    
})
/*
rejouer.addEventListener("click",()=>{
    rejouer.style.display="none"
    gd.style.display="none"
    serie1.style.display="block"
})*/