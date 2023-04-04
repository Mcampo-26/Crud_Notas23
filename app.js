const titulo = document.getElementById("titulo")
titulo.innerHTML="Titulo"

const parrafo = document.getElementById("parrafo")
parrafo.innerHTML="Hoy es jueves treinta de marzo , clase numero treinta y cuatro"
/*
function addParagraph(x){
    let newParagraph = document.crerateElement("p")
    let newText=document.createTextNode(x)
    newParagraph =appendChild(newText)
    const dadDiv=document.getElementById("myDiv")
    dadDiv.appendChild(newParagraph) 
}*/
function addNota(x){
    let par = document.createElement("p")
    par.textContent=x
    parrafo.appendChild(par)
}