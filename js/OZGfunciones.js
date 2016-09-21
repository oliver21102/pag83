
 function desordenar(ar){

 var clasee= document.getElementsByClassName(ar);
 var posiciones=[];
 var numerosD=ran(clasee.length);
for( var i=0; i<clasee.length; i++){
 posiciones.push({lf:clasee[i].style.left,tp:clasee[i].style.top});
}

for( var ii=0; ii<clasee.length; ii++){
   clasee[ii].style.left=posiciones[numerosD[ii]-1].lf;
  clasee[ii].style.top=posiciones[numerosD[ii]-1].tp;
}

    
}
 
function ran(num){
      var numeros=[];
      for (var i=1; i<num+1; i++)
      {
        numeros.push(i);
      }

      for (var  j=0; j<num; j++)
      {
        var tmp = numeros[j];
        var k = Math.floor(Math.random() * numeros.length);
        numeros[j] = numeros[k];
        numeros[k] = tmp;
      }
      return numeros;
    }


var index=10;
    function arrastrar(event,ui){
 var elemento=event.target.id;
 document.getElementById(elemento).style.zIndex=index;
 index++;
}

 

function mostrarSig(){
 document.getElementById("flecha").style.visibility="visible";

  
}

var dimension;

var cantidad=0;
 
function soltar(event,ui){
dimension= document.getElementsByClassName("palabras").length;
   var elemento=event.target.id;

 document.getElementById(ui.draggable.attr('id')).style.left=document.getElementById(elemento).style.left;
 document.getElementById(ui.draggable.attr('id')).style.top=document.getElementById(elemento).style.top;
 
  document.getElementById(ui.draggable.attr('id')).style.width=document.getElementById(elemento).style.width;
  document.getElementById(ui.draggable.attr('id')).style.height=document.getElementById(elemento).style.height;
  //document.getElementById(ui.draggable.attr('id')).style.zIndex=1;
 ui.draggable.draggable('option','revert',false);
 ui.draggable.draggable('option','disabled',true);
    cantidad++;  sonidoMB();

  if(cantidad==dimension){
       mostrarSig();
   }
} 


function sonidoMB(){
  var audio = document.createElement("audio");
 
    audio.src = "sonido/bien.wav";
    audio.play();
}

