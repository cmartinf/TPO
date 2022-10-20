var validarNombre = function (e) {
    if (formulario.nombre.value == 0){
        alert ("Completar Nombre");
        e.preventDefault ();
    }
}