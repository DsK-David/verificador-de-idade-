function verificar(){
        var idade=document.getElementById("idade")
        var resul=document.getElementById("resultado")
        var agora=new Date()
        var ano=agora.getFullYear()
       s=ano-idade.value
  resul.innerHTML="Sua idade é de "+s+" anos"
  if(idade.value ==""){
          resul.innerHTML="Verifica os dados"
  }

}
