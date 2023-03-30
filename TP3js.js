const ns=document.getElementById('ns')
const nd=document.getElementById('nd')
const nw=document.getElementById('nw')
const ni=document.getElementById('ni')


let fonctns= function(){
    const contenu='MonProjet4'
    const affich=document.querySelector('.affichage')
    para=document.createElement('p')
    para.className='vert'
    para.textContent=contenu
    //para.style.color='green'
    affich.appendChild(para)

    affich.style.display= "block"
    setTimeout(function(){
        affich.style.display="none"},1000
    )

    //document.querySelector('.affichage').insertAdjacentElement('afterbegin',`<p >Mon projet 4</p>`)
}
let fonctnd= function(){
    const contenu='MonProjet4'
    const affich=document.querySelector('.affichage')
    para=document.createElement('p')
    para.textContent=contenu
    para.className='rouge'
    //para.style.color='red'
    affich.appendChild(para)

    affich.style.display= "block"
    setTimeout(function(){
        affich.style.display="none"},1000
    )

    //document.querySelector('.affichage').insertAdjacentElement('afterbegin',`<p >Mon projet 4</p>`)
}
let fonctnw= function(){
    const contenu='MonProjet4'
    const affich=document.querySelector('.affichage')
    para=document.createElement('p')
    para.className='jaune'
    para.textContent=contenu
    //para.style.color='yellow'
    affich.appendChild(para)

    affich.style.display= "block"
    setTimeout(function(){
        affich.style.display="none"},1000
    )

    //document.querySelector('.affichage').insertAdjacentElement('afterbegin',`<p >Mon projet 4</p>`)
}
let fonctni= function(){
    const contenu='MonProjet4'
    const affich=document.querySelector('.affichage')
    para=document.createElement('p')
    para.className='bleu'
    para.textContent=contenu
    //para.style.color='aqua'
    affich.appendChild(para)

    affich.style.display= "block"
    setTimeout(function(){
        affich.style.display="none"},1000
    )

    //document.querySelector('.affichage').insertAdjacentElement('afterbegin',`<p >Mon projet 4</p>`)
}
ns.addEventListener('click',fonctns)
nd.addEventListener('click',fonctnd)
nw.addEventListener('click',fonctnw)
ni.addEventListener('click',fonctni)