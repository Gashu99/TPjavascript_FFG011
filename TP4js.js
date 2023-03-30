//Minuscules
function minuscule(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

//Majuscules
function majuscule(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

//Nombres
function nombre(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

//Symboles
function symbole(){
    symboles='!@#$*%&(){}[]=<>/,.^'
    return symboles[Math.floor(Math.random()*symboles.length)]
}

const Func={
    lower:minuscule,
    upper:majuscule,
    number:nombre,
    sym:symbole
}

// recuperation de mes elements 
const taille=document.getElementById('long')
const maj = document.getElementById('maj')
const min = document.getElementById('min')
const num=document.getElementById('nombre')
const symb=document.getElementById('symbole')
const generation = document.getElementById('generation')
const afficher = document.getElementById('resultat')



//Mettre en place la fonction generated password
function generermotdepasse(lower,upper,number,sym,length){
    let generatedpassword=''
    //Faire la somme des elements cochés
    const typecount=lower+upper+number+sym
    //
    const typeArr=[{lower},{upper},{number},{sym}].filter(indice=>Object.values(indice)[0])
    
    if (typecount===0){
        return ''
    }
    for (let i=0;i<length;i+=typecount){
        typeArr.forEach(type=>{
            const fn=Object.keys(type)[0]
            generatedpassword += Func[fn]()
        })
    }
    const motdepasse=generatedpassword.slice(0,length)
    return motdepasse
}

generation.addEventListener('click',()=>{
    const longueur=+taille.value
    const hasupper=maj.checked
    const haslower=min.checked
    const hasnum=num.checked
    const hassymbol=symb.checked
    
   resultat.innerText=generermotdepasse(hasupper,haslower,hasnum,hassymbol,longueur)
})

