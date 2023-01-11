//Lista de botones
let botones = getElementsById("btnScheme")
//Lista de bg
let background = document.querySelectorAll("#contenedor-principal")
//Botones
let botonSuperior = botones[0]
let botonIntermedioUno = botones[1]
let botonIntermedioDos = botones[2]
let botonInferior = botones[3]
//Backgrounds
let bgSuperior = background[0]
let bgIntermedio = background[1]
let bgInferior = background[2]
//Contenedores de informacion
let cont1 = document.getElementById("contenedor1")
let frame1 = document.getElementById("inicioframe")
let frame3 = document.getElementById("frameInferior")
botonSuperior.onclick = async function() {
    botonSuperior.classList.add("botonout")
    frame1.classList.add("antvoff")
    await sleep(650)
    botonSuperior.classList.remove("botonout")
    botonSuperior.classList.remove("btnVisible")
    frame1.classList.remove("antvoff")
    
    cont1.style.visibility = "hidden"
    botonSuperior.style.visibility = "hidden"
    let tamanioSuperior = 78
    let tamaniointermedio = 11
    for (let index = 0; index < 67; index = index + 0.5) {
        tamanioSuperior = tamanioSuperior- 0.5
        tamaniointermedio = tamaniointermedio + 0.5
        cont1.style.height = tamanioSuperior+"vh";
        bgSuperior.style.height = tamanioSuperior+"vh"
        bgIntermedio.style.height = tamaniointermedio+"vh"
        await sleep(6)
    }
    botonSuperior.style.visibility = "hidden"
    cont1.style.visibility = "hidden"
    botonIntermedioUno.style.visibility = "visible"
    botonIntermedioDos.style.visibility = "visible"
    botonIntermedioUno.classList.add("botonin")
    botonIntermedioDos.classList.add("botonin")
    await sleep(710)
    botonIntermedioUno.classList.remove("botonin")
    botonIntermedioDos.classList.remove("botonin")
    
}
botonIntermedioUno.addEventListener("click",async function(evt) {
    botonIntermedioUno.classList.add("botonout")
    botonIntermedioDos.classList.add("botonout")
    await sleep(300)
    botonIntermedioUno.classList.remove("botonout")
    botonIntermedioDos.classList.remove("botonout")
    botonIntermedioUno.style.visibility = "hidden"
    botonIntermedioDos.style.visibility = "hidden"
    let tamanioIntermedio = 78
    let tamanioSuperior = 11
    for (let index = 0; index < 67; index = index + 0.5) {
        tamanioSuperior = tamanioSuperior + 0.5
        tamanioIntermedio = tamanioIntermedio - 0.5
        cont1.style.height = tamanioSuperior+"vh";
        bgSuperior.style.height = tamanioSuperior+"vh"
        bgIntermedio.style.height = tamanioIntermedio+"vh"
        await sleep(6)
    }
    botonSuperior.style.visibility = "visible"
    cont1.style.visibility = "visible"
    botonSuperior.classList.add("botonin")
    frame1.classList.add("antvon")
    await sleep(650)
    frame1.classList.remove("antvon")
    botonSuperior.classList.remove("botonin")
    
})
botonIntermedioDos.addEventListener("click",async function(evt) {
    botonIntermedioUno.classList.add("botonout")
    botonIntermedioDos.classList.add("botonout")
    await sleep(220)
    botonIntermedioUno.classList.remove("botonout")
    botonIntermedioDos.classList.remove("botonout")
    botonIntermedioUno.style.visibility = "hidden"
    botonIntermedioDos.style.visibility = "hidden"
    let tamanioIntermedio = 78
    let tamanioInferior = 11
    for (let index = 0; index < 67; index = index + 0.5) {
        tamanioInferior = tamanioInferior + 0.5
        tamanioIntermedio = tamanioIntermedio - 0.5
        bgInferior.style.height = tamanioInferior+"vh"
        bgIntermedio.style.height = tamanioIntermedio+"vh"
        await sleep(6)
    }
    botonInferior.style.visibility = "visible"
    frame3.style.visibility = "visible"
    botonInferior.classList.add("botonin")
    frame3.classList.add("antvon")
    await sleep(710)
    botonInferior.classList.remove("botonin")
    frame3.classList.remove("antvon")
})
botonInferior.addEventListener("click",async function(evt) {
    frame3.classList.add("antvoff")
    botonInferior.classList.add("botonout")
    await sleep(710)
    botonInferior.classList.remove("botonout")
    frame3.classList.remove("antvoff")
    botonInferior.style.visibility = "hidden"
    frame3.style.visibility = "hidden"
    let tamanioInferior = 78
    let tamanioIntermedio = 11
    for (let index = 0; index < 67; index = index + 0.5) {
        tamanioInferior = tamanioInferior - 0.5
        tamanioIntermedio = tamanioIntermedio + 0.5
        bgIntermedio.style.height = tamanioIntermedio+"vh"
        bgInferior.style.height = tamanioInferior+"vh"
        await sleep(6)
    }
    botonIntermedioUno.style.visibility = "visible"
    botonIntermedioDos.style.visibility = "visible"
    botonIntermedioUno.classList.add("botonin")
    botonIntermedioDos.classList.add("botonin")
    await sleep(700)
    botonIntermedioUno.classList.remove("botonin")
    botonIntermedioDos.classList.remove("botonin")
})

function getElementsById(elementID){
    var elementCollection = new Array();
    var allElements = document.getElementsByTagName("*");
    for(i = 0; i < allElements.length; i++){
        if(allElements[i].id == elementID)
            elementCollection.push(allElements[i]);

    }
    return elementCollection;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}