const dateactuelle=new Date()

const datefin=new Date ("Dec 31,2023 23:59:59")

const ecart= dateactuelle.getTime() -datefin.getTime() 


//calcul des jours restants

const jourrestant=Math.floor(ecart/(1000*60*60*24))

//heure restant 
const heurerestant=Math.floor((ecart%(1000*60*60*24))/ (1000 * 60 * 60))

//minutes
const minuterestant=Math.floor((ecart%(1000*60*60))/ (1000 * 60 ))

//SECONDES RESTANT
const seconderestant=Math.floor((ecart%(1000*60))/ (1000 ))

document.getElementById('mydate').innerHTML=jourrestant+"   "+" 0"+heurerestant+"  "+" 0"+minuterestant+"  "+" 0"+seconderestant

console.log(seconderestant)