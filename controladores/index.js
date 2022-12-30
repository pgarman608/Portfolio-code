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
botonSuperior.addEventListener("click",async function(evt) {
    botonSuperior.style.visibility = "hidden"
    let tamanioSuperior = 78
    let tamaniointermedio = 11
    for (let index = 0; index < 67; index = index + 0.5) {
        tamanioSuperior = tamanioSuperior- 0.5
        tamaniointermedio = tamaniointermedio + 0.5
        bgSuperior.style.height = tamanioSuperior+"vh"
        bgIntermedio.style.height = tamaniointermedio+"vh"
        await sleep(6)
    }
    botonIntermedioUno.style.visibility = "visible"
    botonIntermedioDos.style.visibility = "visible"
})
botonIntermedioUno.addEventListener("click",async function(evt) {
    botonIntermedioUno.style.visibility = "hidden"
    botonIntermedioDos.style.visibility = "hidden"
    let tamanioIntermedio = 78
    let tamanioSuperior = 11
    for (let index = 0; index < 67; index = index + 0.5) {
        tamanioSuperior = tamanioSuperior + 0.5
        tamanioIntermedio = tamanioIntermedio - 0.5
        bgSuperior.style.height = tamanioSuperior+"vh"
        bgIntermedio.style.height = tamanioIntermedio+"vh"
        await sleep(6)
    }
    botonSuperior.style.visibility = "visible"    
})
botonIntermedioDos.addEventListener("click",async function(evt) {
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
    botonSuperior
    botonInferior.style.visibility = "visible"
})
botonInferior.addEventListener("click",async function(evt) {
    botonInferior.style.visibility = "hidden"
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