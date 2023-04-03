let b =function(){
const a=document.createElement('section');
a.innerHTML = '<header id="entete"  ><button> <img src="edit.PNG" width="40%" alt=""></button> <button><img src="trash.PNG" alt="" width="40%"></button></header><textarea name="text" id="mytext" ></textarea>'  

} 


/*let a =document.createElement('section')
let head= document.createElement('header')
head.innerHTML =`<button> <img src="edit.PNG" width="40%" alt=""></button> 
<button><img src="trash.PNG" alt="" width="40%"></button>`
let text=document.createElement('textarea')
a.tagName='section'
head.idName='entete'
text.idName='mytext'
document.getElementById('contenant').appendChild(a)
document.getElementById('contenant').appendChild(head)
document.getElementById('contenant').appendChild(text)*/
let fonct=function(){
document.getElementById('contenant').insertAdjacentHTML('afterbegin',`<section id="macarte">
 <header id="entete" ><button id="edit"> <img src="edit.PNG" width="40%" alt=""></button> 
    <button id="supp"><img src="trash.PNG" alt="" width="40%"></button></header>
<textarea name="text" id="mytext" ></textarea>
</section>`)
}


const edit = document.getElementById('edit')
const supp = document.getElementById('supp')
const sect= document.getElementById('macarte')
const btn=document.getElementById('bouton')
const a1= btn.addEventListener("click",fonct)
const text=document.querySelector("#mytext")

/*list = document.querySelectorAll("section")
list.forEach(function(l){
    l.querySelector('#supp').addEventListener('click',function(){
    l.remove()
    })
    })*/

// Gestion de la suppression 
document.addEventListener('click',function(){
    list = document.querySelectorAll("section")
    list.forEach(function(l){
    l.querySelector('#supp').addEventListener('click',function(){
    l.remove()
    })
    })

})


// GERER LE BOUTON EDIT
document.addEventListener('click',function(){
    list = document.querySelectorAll("section")
    list.forEach(function(l){
    l.querySelector('#edit').addEventListener('click',function(){
        const text=document.getElementById("mytext")

        text.disabled=true
    
    })
    })

})


//supp.addEventListener('click',supprimer)










