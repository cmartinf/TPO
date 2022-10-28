const nombre = document.getElementById ("name")
const telefono = document.getElementById ("telefono")

form.addEventListener ("submit", e=>{
    e.preventDefault() 
    if(nombre.value.length <5){
       alert ("Nombre Corto")
    }
    if(telefono.value.length <10){
        alert ("Telefono incorrecto")
    } 
} )


