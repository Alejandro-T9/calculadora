let pantalla = document.getElementById("pantalla");

// agrega el numero o el operador a la pantalla
function agregar(valor) {
    if (pantalla.value == "Error") {
        pantalla.value = "";
    }
    pantalla.value = pantalla.value + valor;
}

function borrarTodo() {
    pantalla.value = "";
}

// borra solo el ultimo
function borrar() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    if (pantalla.value == "") {
        return;
    }

    try {
        let resultado = eval(pantalla.value);
        pantalla.value = resultado;
        //console.log(resultado);
    } catch (error) {
        pantalla.value = "Error";
    }
}
