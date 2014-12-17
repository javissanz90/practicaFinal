
/*
 <!--
Autor = Javier Oltra Riera
Fecha = 17-dic-2014
Licencia = default
Version = 1.0
Descripcion = script formulario -->
 */        
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function activeCheck() {
    console.log('ok');
    var relleno = true;
    var form = document.getElementsByName("form");
    for (var i = 0; i < form.length; i++) {
        if (form[i].value == "") {
            relleno = false;
            break;
        }
    }
    if (relleno) {
        document.getElementById("terminos").disabled = false;
    } else {
        document.getElementById("terminos").disabled = true;
        document.getElementById("terminos").checked = false;
    }
}
