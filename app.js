//Array para almacenar los nombres de los amigos
const amigos =[];

//funcion para agregar amigos
function agregarAmigo (){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value;

    if(nombreAmigo===""){
        alert ("Por favor, ingresa un nombre");
        return;
    }
    if (amigos.includes (nombreAmigo)){
        alert ("Tu amigo ya esta en la lista");
        return;
    }else{

    }amigos.push(nombreAmigo);
      mostrarListaAmigos ();
      
    inputAmigo.value = '';
    limpiarCaja();
    console.log ('amigos');
    }

    //funcion que muestra la lista de amigos en el HTML
function mostrarListaAmigos(){
        const lista = document.getElementById ("listaAmigos");

        lista.innerHTML="";

        for(let i=0; i<amigos.length; i++){

            const elemento= document.createElement ('li');
            elemento.textContent= amigos [i];
            lista.appendChild (elemento);
        }
    }
    
function limpiarCaja (){
    let resultado = document.getElementById ("resultado");
}
 
//funcion para sortear amigo
function sortearAmigo (){
    if(amigos.length===0){
        alert ("No se ha ingresado ningun nombre");
        return;
    }
    const random= Math.floor (Math.random () * amigos. length);
    const amigoSecreto =amigos [random];
    document.getElementById ("resultado").innerHTML= `<li>${amigoSecreto}</li>`;
    
}
function reiniciarSorteo (){
    amigos = [];
    document.getElementById ("listaAmigos").innerHTML= "";
    document.getElementById ("resultado").innerHTML = "";
    document.getElementById ("amigo").value = "";
    document.getElementById ("amigo").focus();

}
