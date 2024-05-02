

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let fono = document.getElementById("fono").value;
    let rut = document.getElementById("rut").value;
    let error = "";
    
    let regexCorreo = /^\w[a-zA-Z0-9_\.-]{4,15}@\w+\.\w{2,3}$/;
    let regexFono = /^\+569\d{8}$/;
    let regexRut = /^\d{1,2}([\.\-\_\s]\d{3}){2}\-[0-9Kk]$/;
    
    if (nombre.length ===0) error += "El campo nombre no puede estar vacio\n";
    if (apellido.length ===0) error += "El campo apellido no puede estar vacio\n";
    if (!regexCorreo.test(correo))error += "Correo invalido\n";
    if (!regexFono.test(fono))error += "Numero invalido\n";
    if (!regexRut.test(rut)) error += "Rut invalido";
    
    if (error.length===0) return true;
   
    
       
    
    if (error.length !==0) {
      Swal.fire({
          icon: "error",
          title: "Aweonao",
          text: error
  
});
    };
    delete error;
    return false;
    
    
};