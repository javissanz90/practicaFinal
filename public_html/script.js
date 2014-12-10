
/*
 <!--
Autor = Javier Oltra Riera
Fecha = 10-dic-2014
Licencia = default
Version = 1.0
Descripcion = 
-->
 */        
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *  CopyRight Alejandro Montoya.
 */
var cont = 1;
function fotosInicio(){
    cont++;
    if(cont>3){
        cont=0;
    }
    alert(cont)
//    
               
}

window.onload= function(){
    setInterval(function(){
        cont++;
    if(cont>9){
        cont=1;
    }
    document.getElementById("fotosInicio").src="images/imagen"+cont+".jpg";},10000)
    
}

