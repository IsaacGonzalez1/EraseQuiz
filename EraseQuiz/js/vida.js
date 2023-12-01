function volverAreproducir() { 

    var clip = document.getElementById('video');
    clip.currentTime = 0;
  }
  
  $(document).ready(function() { 
  
  var contestado = false;
  var contestado2 = false;
  var contestado3 = false;
  var contestado4 = false;
  
  function checkQuiz() {
   
    var clip = document.getElementById('video');
  
    $(".textoverlay4").css("display", "block")
    $('.menuVideo').removeAttr('disabled')
  
    //INFORMACIÓN 1
    if(clip.currentTime >= 9 && clip.currentTime < 15){
  
      $(".textoverlay4").html("Quieres saber por qué es importante la higiene bucal?");
    
    }else{
  
      $(".textoverlay4").html("");
  
    }
  
    if(clip.currentTime >= 10 && clip.currentTime < 16){
  
      $(".linkSangre").css("display","block");
      $(".linkSangre").html("Pulsa aquí para aprender mucho más sobre la higiene bucal."); 
  
    }else{
  
      $(".linkSangre").css("display","none");
      $(".linkSangre").html("");
  
    }
  
    //PREGUNTA 1
    if(clip.currentTime >= 19 && clip.currentTime < 24){
  
      if(!contestado){
  
        clip.pause();
        $(".textoverlay").css("display", "block")
        $(".textoverlay").html("¿Para qué sirven los dientes de enfrente (incisivos)?");
        $(".opcionQuiz").css("display","block");
        $('.menuVideo').attr('disabled', 'disabled')
        
      }
      
      $("#answer4").on('click', function(event){ 
  
        event.stopPropagation();
        event.stopImmediatePropagation();
  
        $(".opcionQuiz").css("display","none");
        $(".textoverlay").html("¡¡Enhorabuena, has acertado!!");
        $('.menuVideo').removeAttr('disabled')
  
        clip.play();
        contestado=true;
  
    });
    
    $("#answer1,#answer2,#answer3").on('click', function(event){ 
  
      event.stopPropagation();
      event.stopImmediatePropagation();
  
      $(".opcionQuiz").css("display","none");
      $(".textoverlay").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Para cortar la comida en pedacitos");
      $('.menuVideo').removeAttr('disabled')
  
      clip.play();
      contestado=true;
  
    });
  
    }else{
  
      $(".textoverlay").html("");
      $(".textoverlay").css("display", "none")
  
      contestado=false;
  
    }
  
    //PREGUNTA 2
    if(clip.currentTime >= 34 && clip.currentTime < 40){
  
      if(!contestado2){
  
        clip.pause();
        $(".textoverlay5").css("display", "block")
        $(".textoverlay5").html("¿Cuánto podemos producir de saliva al día?");
        $(".opcionQuiz2").css("display","block");
        $('.menuVideo').attr('disabled', 'disabled')
  
      }
      
      $("#answer6").on('click', function(event){ 
  
        event.stopPropagation();
        event.stopImmediatePropagation();
  
        $(".opcionQuiz2").css("display","none");
        $(".textoverlay5").html("¡¡Enhorabuena, has acertado!!");
        $('.menuVideo').removeAttr('disabled')
  
        clip.play();
        contestado2=true;
  
    });
    
    $("#answer5,#answer7,#answer8").on('click', function(event){ 
  
        event.stopPropagation();
        event.stopImmediatePropagation();
  
        $(".opcionQuiz2").css("display","none");
        $(".textoverlay5").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Entre 1 y 1.5 litros.");
        $('.menuVideo').removeAttr('disabled')
  
        clip.play();
        contestado2=true;
  
    });
  
    }else{
  
      $(".textoverlay5").html("");
      $(".textoverlay5").css("display", "none")
  
      contestado2=false;
  
    }
  
    //PREGUNTA 3
    if(clip.currentTime >= 56 && clip.currentTime < 65){
  
      if(!contestado3){
  
        clip.pause();
        $(".textoverlay6").css("display", "block")
        $(".textoverlay6").html("Nombra los 4 gustos principales.");
        $(".sendAnswer").css("display","block");
  
      }
  
      $("#answer9").on('click', function(event){
  
        event.stopPropagation(); 
        event.stopImmediatePropagation();  
  
        $(".sendAnswer").css("display","none");
  
        if($("#answerEscrita").val().toLowerCase() == "amargo, ácido, dulce y salado"){ 
  
        $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");
  
        }else if($("#answerEscrita").val().toLowerCase() == "leche"){
  
        $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");
        $("#answerEscrita").val("");
  
        }
  
        else{
  
        $(".textoverlay6").html("Lo sentimos, no has introducido la respuesta correcta. SOLUCIÓN: amargo, ácido, dulce y salado");
        $("#answerEscrita").val("");
  
        }
  
        clip.play();
        contestado3=true;
  
    });
  
    }else{
  
      $(".textoverlay6").html("");
      $(".textoverlay6").css("display", "none")
      contestado3=false;
  
    }
  
    //PREGUNTA 4
    if(clip.currentTime >= 95 && clip.currentTime < 99){
  
      if(!contestado4){
  
        clip.pause();
        $(".textoverlay7").css("display", "block")
        $(".textoverlay7").html("¿Por qué es importante la sal en nuestro cuerpo?");
        $(".opcionQuiz3").css("display","block");
        $('.menuVideo').attr('disabled', 'disabled')
  
      }
      
      $("#answer12").on('click', function(event){ 
  
        event.stopPropagation();
        event.stopImmediatePropagation();
  
        $(".opcionQuiz3").css("display","none");
        $(".textoverlay7").html("¡¡Enhorabuena, has acertado!!");
        $('.menuVideo').removeAttr('disabled')
  
        clip.play();
        contestado4=true;
  
    });
    
    $("#answer10,#answer11,#answer13").on('click', function(event){ 
  
      event.stopPropagation();
      event.stopImmediatePropagation();
  
      $(".opcionQuiz3").css("display","none");
      $(".textoverlay7").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Porque ayuda a nuestro cuerpo a usar el agua y a pensar");
      $('.menuVideo').removeAttr('disabled')
  
      clip.play();
      contestado4=true;
  
    });
  
    }else{
  
      $(".textoverlay7").html("");
      $(".textoverlay7").css("display", "none")
  
      contestado4=false;
  
    }
  
    //INFORMACIÓN 2
    if(clip.currentTime >= 101 && clip.currentTime < 108){
  
      $(".textoverlay8").html("¿Quieres saber más sobre la boca y los dientes?");
    
    }else{
  
      $(".textoverlay8").html("");
  
    }
  
    if(clip.currentTime >= 103 && clip.currentTime < 110){
  
      $(".linkJirafas").css("display","block");
      $(".linkJirafas").html("Pulsa aquí para descubrir más información y curiosidades acerca de la boca y los dientes."); 
    
    }else{
  
      $(".linkJirafas").css("display","none");
      $(".linkJirafas").html("");
  
    }
  
    //VOLVER A REPRODUCIR
    if(clip.currentTime + 20 >= clip.duration){
  
      $("#volverAreproducir").css("display","block");
  
    }else{
  
      $("#volverAreproducir").css("display","none");
  
    }
  
    
  }
  
  
  var contador = setInterval(checkQuiz, 1000); 
  
  });
  
  
  
  