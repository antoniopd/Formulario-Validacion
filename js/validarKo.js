// Funcion para mostrar la imagen del robot si la validación del formulario no salió bien.
function validarKo() {
         
        let div = document.createElement('div');
        div.id = 'content';
        div.className = 'container';

        div.style.visibility = 'visible';
        if (div.style.visibility == 'visible') {
            let x = document.getElementById('validar');
            x.style.display = 'none';
        }

        let text = document.createTextNode(` `);

        div.appendChild(text);
        div.innerHTML = `<br><img src="./img/error-no-es-fracaso.jpg" alt="" />`

        // Metemos en el body el div con appenChild y lo borramos en 5 segundos con SetTimeout
        document.body.appendChild(div);
        setTimeout(() => {
            document.body.removeChild(div);
        }, 5000);
        
    }
//  Funcion para ver la contraseña 
  function showPass(){
    let eye = document.getElementById('Eye');
    let temp = document.getElementById('password');
    if (temp.type === 'password') {
        temp.type = 'text';
        eye.style.opacity=0.8;
    } else {
        temp.type = 'password';
        eye.style.opacity=0.2;
    }
  }
