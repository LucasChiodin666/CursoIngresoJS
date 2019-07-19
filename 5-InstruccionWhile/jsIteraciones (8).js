function mostrar()
{

	var num=0;
	var suma=0;
	var negativo=1;
  var mult=2;

  while(confirm ("")){//
   Do;{
     num=prompt("");
     num=parseInt(num);
   }while(isNaN(num));
   if(num >=0){
     suma+=num;
   }else{
     mult*=num;
   }

  }



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
