function validarNacional() {

    const codigoP = /^\d{4,5}$/; // 4 ó 5 numeros.
    const correo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // numeros y letras @ y un . 
    const usuario = /^[a-zA-Z0-9\_\-]{4,16}$/; // Letras, numeros, guion y guion_bajo.
    const password = /^.{4,12}$/;  // 4 a 12 digitos.
    const nomApe = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras y espacios, pueden llevar acentos.
    const telefono = /^[678]\d{8}$/; // Empezando por 6-7-8 y 9 numeros.
    const ubicacion = /^[a-zA-Z0-9\_\-\s\/\º]{4,25}$/; // Letras, numeros, guion y guion_bajo.
    const residencia = /^[a-zA-ZÀ-ÿ\s]{1,20}$/; // Letras y espacios, pueden llevar acentos.
    const dni = /^[0-9]{8}[A-Z-a-z]$/; // ocho numeros  y letra al final
    const pasaporte = /^[A-Z-a-z]{3}[0-9]{6}[A-Z-a-z]?$/; // 3 letras y 6 numeros letras adicionales al final.
    const nie = /^[XYZ][0-9]{7}[A-Z-a-z]$/; // X, Y o Z al comienzo y siete numeros letra al final.

    // **********  TIPO DE DOCUMENTO ***********
    let tipoDoc = document.getElementById('tipoDoc');
    const resTipoDoc = document.getElementById('resultadoTipoDoc');
    resTipoDoc.innerHTML = `<p style='background:#16C60C; border:2px solid black; color:white;display: inherit;'>${tipoDoc.value}</p>`;

    // **********  NUMERO DE DOCUMENTO ***********
    let numDocu = document.getElementById('numDocu');
    const resNumDocu = document.getElementById('resultadoNumDocu');

    if (tipoDoc.value == 'DNI'){
        if (dni.test(numDocu.value)) {
            resNumDocu.innerHTML = "<p style='display: inherit;'>✅</p>"
        }
        else {
            resNumDocu.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌ (nº de dni incorrecto)</p>"
        }
    }else if (tipoDoc.value == 'PASAPORTE') {
        if (pasaporte.test(numDocu.value)) {
            resNumDocu.innerHTML = "<p style='display: inherit;'>✅</p>"
        }
        else {
            resNumDocu.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌ (3 letras y 6 numeros)</p>"
        }
    }else if (tipoDoc.value == 'NIE') {
        if (nie.test(numDocu.value)) {
            resNumDocu.innerHTML = "<p style='display: inherit;'>✅</p>"
        }
        else {
            resNumDocu.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌ (nº de nie incorrecto)</p>"
        }
    }else if (tipoDoc.value == 'TARJETA_C') {
        if (nie.test(numDocu.value)) {
            resNumDocu.innerHTML = "<p style='display: inherit;'>✅</p>"
        }
        else {
            resNumDocu.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌ (nº de tarjeta c. incorrecto)</p>"
        }
    } else {
        resNumDocu.innerHTML = "<p style='background:pink; color:red;display: inherit;'>Algo salió mal intentalo de nuevo</p>"
    }   

    // **********  USUARIO ***********
    let usuario1 = document.getElementById('usuario');
    const resUsuario = document.getElementById('resultadoUsuario');

    if (usuario.test(usuario1.value)) {
        resUsuario.innerHTML = "<p style='display: inherit;'>✅</p>"
    }
    else {
        resUsuario.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌</p>"
    }

    // **********  PASSWORD ***********
    let password1 = document.getElementById('password');
    const resPassword = document.getElementById('resultadoPassword');

    if (password.test(password1.value)) {
        resPassword.innerHTML = "<p style='display: inherit;'>✅</p>"
    }
    else {
        resPassword.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌</p>"
    }

    // ************** EMAIL ****************
    let email = document.getElementById('email');
    const resEmail = document.getElementById('resultadoEmail');

    if (correo.test(email.value)) {
        resEmail.innerHTML = "<p style='display: inherit;'>✅</p>"
    }
    else {
        resEmail.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌(Email incorrecto)</p>"
    }

    // **********  CODIGO POSTAL ***********
    let cp = document.getElementById('codigo-postal');
    const resCP = document.getElementById('resultadoCP');    

    if (codigoP.test(cp.value)) {
        resCP.innerHTML = "<p style='display: inherit;'>✅</p>"
        
    }
    else {
        resCP.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌(maximo 5 numeros)</p>"
    }

    // **********  APELLIDO ***********
    let apellido = document.getElementById('apellido');
    const resApellido = document.getElementById('resultadoApellido');

    if (nomApe.test(apellido.value)) {
        resApellido.innerHTML = "<p style='display: inherit;'>✅</p>"
    }
    else {
        resApellido.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌ Apellido invalido (solo letras)</p>"
    }

    // **********  NOMBRE ***********
    let nombre1 = document.getElementById('nombre');
    const resNombre = document.getElementById('resultadoNombre');

    if (nomApe.test(nombre1.value)) {
        resNombre.innerHTML = "<p style='display: inherit;'>✅</p>"
    }
    else {
        resNombre.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌ Nombre invalido (solo letras)</p>"
    }

    // **********  MOVIL ***********
    let movil = document.getElementById('movil');
    const resMovil = document.getElementById('resultadoMovil');

    if (telefono.test(movil.value)) {
        resMovil.innerHTML = "<p style='display: inherit;'>✅</p>"
    }
    else {        
        resMovil.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌ (necesita 9 digitos y empieza por 86-7-8 )</p>"
    }

    // **********  DIRECCION ***********
    let direccion = document.getElementById('direccion');
    const resDireccion = document.getElementById('resultadoDireccion');

    if (ubicacion.test(direccion.value)) {
        resDireccion.innerHTML = "<p style='display: inherit;'>✅</p>"
    }
    else {
        resDireccion.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌</p>"
    }

    // **********  CIUDAD DE RESIDENCIA ***********
    let residenciaH = document.getElementById('residenciaH');
    const resResidenciaH = document.getElementById('resultadoResidenciaH');

    if (residencia.test(residenciaH.value)) {
        resResidenciaH.innerHTML = "<p style='display: inherit;'>✅</p>"
    }
    else {
        resResidenciaH.innerHTML = "<p style='background:pink; color:red;display: inherit;'>❌</p>"
    }

    // VALIDACIÓN si todos los campos son correctos  pinta el resultado !!!
    if(usuario.test(usuario1.value) && password.test(password1.value) && correo.test(email.value) && codigoP.test(cp.value) && nomApe.test(apellido.value) && nomApe.test(nombre1.value) && telefono.test(movil.value) && ubicacion.test(direccion.value) && residencia.test(residenciaH.value)){

    const resultadoTotal = document.getElementById('resultado-total');
    resultadoTotal.innerHTML = `    
            <table>
                <thead>
                    <tr>
                        <th>
                           Resultado de usuario
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="tdHead">
                            <label for="">Tipo de documento : <b>${tipoDoc.value}</b></label>
                        </td>                        
                    </tr>
                    <tr>
                        <td>
                            <label for="">Número de documento : <b>${numDocu.value}</b></label>
                        </td>                        
                    </tr>
                    <tr>
                        <td>
                            <label for="">Usuario : <b>${usuario1.value}</b></label>
                            <label for="">Password : <b>${password1.value}</b></label>                      
                        </tr>
                    <tr>
                        <td>
                            <label for="">Email : <b>${email.value}</b></label>
                        </td>                        
                    </tr>
                    <tr>
                        <td> <!–– Con padStart(5, 0) añadimos un cero a la izquierda si el número tiene menos de 5 digitos  ––> 
                            <label for="">CP : <b>${cp.value.padStart(5, 0)}</b></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="">Apellidos : <b>${apellido.value}</b></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="">Nombre : <b>${nombre1.value}</b></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="">Móvil : <b>${movil.value}</b></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="">Dirección : <b>${direccion.value}</b></label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="">Ciudad de Residencia Habitual : <b>${residenciaH.value}</b></label>
                        </td>
                    </tr>
                    <tr>
                    <td style="display: flex;justify-content: space-around;">
                        <button id="btn-resul" type="reset" onclick="location.reload()">Limpiar 🧹</button>
                    </td>                      
                </tr>                    
                </tbody>
            </table>
        `       
        let x = document.getElementById('validar');
        x.style.display = 'none';
}else{ // Si alguna valicación esta mal pintamos un div con la imagen del robot
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
}