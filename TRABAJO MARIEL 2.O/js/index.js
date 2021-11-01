var inputs = document.getElementsByClassName('formulario-input');
for( var i = 0 ; i < inputs.length; i++){
    inputs [i].addEventListener('keyup', function(){
        if (this.value.length>= 1){
            this.nextElementSibling.classList.add('fijar')
        } else {
            this.nextElementSibling.classList.remove('fijar')
        }
});
}
function validar() {
    var Nombre, Apellido , Mail, Mensaje, expresion;
    Nombre = document.getElementsById("Nombre").value;
    Apellido = document.getElementsById("Apellido").value;
    Mail = document.getElementsById("Mail").value;
    Mensaje = document.getElementsById("Mensaje").value;
    expresion=/\w+@\w+\.+[a-z]/;

    if(Nombre=="" || Apellido=="" || Mail=="" || Mensaje==""){
        alert("Debe completar todos los campos");
        return false;
    }
    if(!expresion.test(correo)){
        alert("El correo no es valido")
    }

}