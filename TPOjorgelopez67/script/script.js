
let images = ["photo/bolsas-plasticas.jpg", "photo/slider-jumbo-3.jpg", "photo/1-48mmx90m-transparente.png"];


let index = 0;
const imgElement = document.getElementById("plasticos");

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 2500);
};

/* plasticoss /////////////////////////////////*/////////////


/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("MyForm").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById("nombre").value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var clave = document.getElementById('telefono').value;
    if (telefono.length == 0) {
      alert (" Por favor dejanos tu telefono');
      return;
    }
    }
    */
    

    function validateform(){  
      var name=document.Myform.name.value;  
      var password=document.Myform.password.value;
      var telefono=document.Myform.telefono.value;    
        
      if (name==null || name==""){  
        alert("nombre no puede estar en blanco");  
        return false;  
      }else if(password.length<6){  
        alert("Passworddebe ser al menos 6 caracteres.");  
        return false;  
        }  
      }  

