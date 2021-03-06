angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout, $state, $ionicPlatform, $cordovaNativeAudio, $cordovaVibration, $cordovaFile) {
  $scope.usuario = {};
  $scope.usuario.respuestas = {};
  $scope.usuario.preguntas = {};
  $scope.usuario.preguntas.uno = {};
  $scope.usuario.preguntas.uno.opcion = {};
  $scope.usuario.preguntas.dos = {};
  $scope.usuario.preguntas.dos.opcion = {};
  $scope.usuario.preguntas.tres = {};
  $scope.usuario.preguntas.tres.opcion = {};
  $scope.usuario.correctas = {};
  $scope.usuario.puntaje = 0;
  $scope.finPartida = false;

  $scope.preguntas = " Cual fue el primer campeon invicto del futbol argentino?";
  $scope.Ver = false;
  $scope.respuestas = {};
  $scope.respuestas.uno = "A - San Lorenzo";
  $scope.respuestas.dos = "B - River";
  $scope.respuestas.tres = "C - Boca";
  $scope.respuestas.cuatro = "D - Racing";
  $scope.instancia = 1;
  $scope.eligio = false;



   $ionicPlatform.ready(function(){
    try{

      $cordovaNativeAudio
      .preloadSimple('correcto', 'mp3/correcto.mp3')
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.log(error);
      });
    } catch(ex){
      console.log(ex.message);
    }


    try{
      $cordovaNativeAudio
      .preloadSimple('incorrecto', 'mp3/incorrecto.mp3')
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.log(error);
      });
    } catch(ex){
      console.log(ex.message);
    }

   });
  

  $scope.Respuesta=function(rta){
      $scope.eligio = true;

      if($scope.instancia == 1){
      $("#uno").removeClass("button-positive");
      $("#uno").addClass("resp-correcta");
      $scope.usuario.respuestas.uno = $scope.respuestas.uno;
      $scope.usuario.correctas.uno = $scope.respuestas.uno;
      $scope.usuario.puntaje += 100;
      if(rta == 'b'){
        $("#dos").removeClass("button-positive");
        $("#dos").addClass("resp-incorrecta");
        $scope.usuario.respuestas.uno = $scope.respuestas.dos;
        $scope.usuario.puntaje -= 100;
      } else if(rta == 'c'){
        $("#tres").removeClass("button-positive");
        $("#tres").addClass("resp-incorrecta");
        $scope.usuario.respuestas.uno = $scope.respuestas.tres;
        $scope.usuario.puntaje -= 100;
      } else if(rta == 'd'){
        $("#cuatro").removeClass("button-positive");
        $("#cuatro").addClass("resp-incorrecta");
        $scope.usuario.respuestas.uno = $scope.respuestas.cuatro;
        $scope.usuario.puntaje -= 100;
      }

      $scope.usuario.preguntas.uno.ques = $scope.preguntas;
      $scope.usuario.preguntas.uno.opcion.a = $scope.respuestas.uno;
      $scope.usuario.preguntas.uno.opcion.b = $scope.respuestas.dos;
      $scope.usuario.preguntas.uno.opcion.c = $scope.respuestas.tres;
      $scope.usuario.preguntas.uno.opcion.d = $scope.respuestas.cuatro;
      console.log($scope.usuario.respuestas.uno);

        if ($scope.usuario.respuestas.uno == $scope.usuario.correctas.uno){

          try{
            $cordovaVibration.vibrate(500);
          } catch(ex){
            console.log(ex.message);
          }

            try{
                $cordovaNativeAudio.play('correcto');
            } catch(ex){

              console.log(ex.message);
            }

        } else{

          try{
            $cordovaVibration.vibrate([500, 200, 500]);
          } catch(ex){
            console.log(ex.message);
          }

            try{
                $cordovaNativeAudio.play('incorrecto');
            } catch(ex){

              console.log(ex.message);
            }

        }
    }

    if($scope.instancia == 2){
      $("#tres").removeClass("button-positive");
      $("#tres").addClass("resp-correcta");
      $scope.usuario.respuestas.dos = $scope.respuestas.tres;
      $scope.usuario.correctas.dos = $scope.respuestas.tres;
      $scope.usuario.puntaje += 100;
      if(rta == 'b'){
        $("#dos").removeClass("button-positive");
        $("#dos").addClass("resp-incorrecta");
        $scope.usuario.respuestas.dos = $scope.respuestas.dos;
        $scope.usuario.puntaje -= 100;
      } else if(rta == 'a'){
        $("#uno").removeClass("button-positive");
        $("#uno").addClass("resp-incorrecta");
        $scope.usuario.respuestas.dos = $scope.respuestas.uno;
        $scope.usuario.puntaje -= 100;
      } else if(rta == 'd'){
        $("#cuatro").removeClass("button-positive");
        $("#cuatro").addClass("resp-incorrecta");
        $scope.usuario.respuestas.dos = $scope.respuestas.cuatro;
        $scope.usuario.puntaje -= 100;
      }

      $scope.usuario.preguntas.dos.ques = $scope.preguntas;
      $scope.usuario.preguntas.dos.opcion.a = $scope.respuestas.uno;
      $scope.usuario.preguntas.dos.opcion.b = $scope.respuestas.dos;
      $scope.usuario.preguntas.dos.opcion.c = $scope.respuestas.tres;
      $scope.usuario.preguntas.dos.opcion.d = $scope.respuestas.cuatro;
      console.log($scope.usuario.respuestas.dos);

        if ($scope.usuario.respuestas.dos == $scope.usuario.correctas.dos){

          try{
            $cordovaVibration.vibrate(500);
          } catch(ex){
            console.log(ex.message);
          }

            try{
                $cordovaNativeAudio.play('correcto');
            } catch(ex){

              console.log(ex.message);
            }

        } else{

          try{
            $cordovaVibration.vibrate([500, 200, 500]);
          } catch(ex){
            console.log(ex.message);
          }

            try{
                $cordovaNativeAudio.play('incorrecto');
            } catch(ex){

              console.log(ex.message);
            }

        }
    }

    if($scope.instancia == 3){
      $("#dos").removeClass("button-positive");
      $("#dos").addClass("resp-correcta");
      $scope.usuario.respuestas.tres = $scope.respuestas.dos;
      $scope.usuario.correctas.tres = $scope.respuestas.dos;
      $scope.usuario.puntaje += 100;
      if(rta == 'c'){
        $("#tres").removeClass("button-positive");
        $("#tres").addClass("resp-incorrecta");
        $scope.usuario.respuestas.tres = $scope.respuestas.tres;
        $scope.usuario.puntaje -= 100;
      } else if(rta == 'a'){
        $("#uno").removeClass("button-positive");
        $("#uno").addClass("resp-incorrecta");
        $scope.usuario.respuestas.tres = $scope.respuestas.uno;
        $scope.usuario.puntaje -= 100;
      } else if(rta == 'd'){
        $("#cuatro").removeClass("button-positive");
        $("#cuatro").addClass("resp-incorrecta");
        $scope.usuario.respuestas.tres = $scope.respuestas.cuatro;
        $scope.usuario.puntaje -= 100;
      }

      $scope.usuario.preguntas.tres.ques = $scope.preguntas;
      $scope.usuario.preguntas.tres.opcion.a = $scope.respuestas.uno;
      $scope.usuario.preguntas.tres.opcion.b = $scope.respuestas.dos;
      $scope.usuario.preguntas.tres.opcion.c = $scope.respuestas.tres;
      $scope.usuario.preguntas.tres.opcion.d = $scope.respuestas.cuatro;
      console.log($scope.usuario.respuestas.tres);

        if ($scope.usuario.respuestas.tres == $scope.usuario.correctas.tres){

          try{
            $cordovaVibration.vibrate(500);
          } catch(ex){
            console.log(ex.message);
          }

            try{
                $cordovaNativeAudio.play('correcto');
            } catch(ex){

              console.log(ex.message);
            }

        } else{

          try{
            $cordovaVibration.vibrate([500, 200, 500]);
          } catch(ex){
            console.log(ex.message);
          }

            try{
                $cordovaNativeAudio.play('incorrecto');
            } catch(ex){

              console.log(ex.message);
            }

        }
    }
      

    $timeout(function(){
      $scope.eligio = false;
      if($scope.instancia == 1){
      $("#uno").removeClass("resp-correcta");
      $("#uno").addClass("button-positive");
      $("#dos").removeClass("resp-incorrecta");
      $("#dos").addClass("button-positive");
      $("#tres").removeClass("resp-incorrecta");
      $("#tres").addClass("button-positive");
      $("#cuatro").removeClass("resp-incorrecta");
      $("#cuatro").addClass("button-positive");

      $scope.preguntas = " Quien descubrio America?";
      $scope.respuestas.uno = "A - San Martin";
      $scope.respuestas.dos = "B - Monguito";
      $scope.respuestas.tres = "C - Colon";
      $scope.respuestas.cuatro = "D - Susana Gimenez";
      $scope.instancia = 2;
      } else if($scope.instancia == 2){
      $("#tres").removeClass("resp-correcta");
      $("#tres").addClass("button-positive");
      $("#dos").removeClass("resp-incorrecta");
      $("#dos").addClass("button-positive");
      $("#uno").removeClass("resp-incorrecta");
      $("#uno").addClass("button-positive");
      $("#cuatro").removeClass("resp-incorrecta");
      $("#cuatro").addClass("button-positive");

      $scope.preguntas = " Quien fue Benito Muros?";
      $scope.respuestas.uno = "A - Un conquistador";
      $scope.respuestas.dos = "B - Un hombre";
      $scope.respuestas.tres = "C - Un mago";
      $scope.respuestas.cuatro = "D - Un artista";
      $scope.instancia = 3;
      } else if($scope.instancia == 3){
      $("#dos").removeClass("resp-correcta");
      $("#dos").addClass("button-positive");
      $("#uno").removeClass("resp-incorrecta");
      $("#uno").addClass("button-positive");
      $("#tres").removeClass("resp-incorrecta");
      $("#tres").addClass("button-positive");
      $("#cuatro").removeClass("resp-incorrecta");
      $("#cuatro").addClass("button-positive");

      var objFirebase = new Firebase('https://tp1-trivia.firebaseio.com/usuarios/');

      objFirebase.push({usuario:$scope.usuario})

      $scope.finPartida = true;

      $scope.correctasJuego = $scope.usuario.correctas.uno + "  -  " + $scope.usuario.correctas.dos + "  -  " + $scope.usuario.correctas.tres;

      $scope.respUsuario = $scope.usuario.respuestas.uno + "  -  " + $scope.usuario.respuestas.dos + "  -  " + $scope.usuario.respuestas.tres;

      $ionicPlatform.ready(function(){

        try{

          var arrayRta = $scope.respUsuario.split("  -  ");
          var archivoJson = {
            rtas: arrayRta
          };

          $cordovaFile.createFile(cordova.file.externalDataDirectory, "rtasUsuario.txt", true)
              .then(function (success) {

              }, function (error) {

              });


            $cordovaFile.writeFile(cordova.file.externalDataDirectory, "rtasUsuario.txt", archivoJson, true)
              .then(function (success) {

              }, function (error) {

              });

        } catch(ex){
          console.log(ex.message);
        }

      });


      }
    }, 3000)
    
    /*$scope.preguntas = " Quien descubrio America?";
      $scope.respuestas.uno = "A - San Martin";
      $scope.respuestas.dos = "B - Monguito";
      $scope.respuestas.tres = "C - Colon";
      $scope.respuestas.cuatro = "D - Susana Gimenez";*/
    
  }

  $scope.NuevaPartida=function(){
    $scope.finPartida = false;

    $scope.Ver = false;
      $("#ion-cont").addClass("fondo-inicio");
      $("#ion-cont").removeClass("fondo-preg");


      $scope.preguntas = " Cual fue el primer campeon invicto del futbol argentino?";
      $scope.respuestas.uno = "A - San Lorenzo";
      $scope.respuestas.dos = "B - River";
      $scope.respuestas.tres = "C - Boca";
      $scope.respuestas.cuatro = "D - Racing";
      

      $scope.instancia = 1;

      
      $scope.usuario.puntaje = 0;
  }

  $scope.Empezar=function(){
    $scope.Ver = true;
    $("#ion-cont").removeClass("fondo-inicio");
    $("#ion-cont").addClass("fondo-preg");
  }

})

.controller('AutorCtrl', function($scope, $ionicPlatform, $cordovaInAppBrowser) {

  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

  $scope.VerGitHub=function(){
    $ionicPlatform.ready(function(){

      $cordovaInAppBrowser.open('https://github.com/jmgiusti91', '_system', options);

    });
    
  }
  
})

.controller('LecturaCtrl', function($scope, $ionicPlatform, $cordovaFile){

  $ionicPlatform.ready(function(){

     $scope.$on('$ionicView.enter', function(e) {
      $scope.contenido = "";

      try{
      $cordovaFile.checkFile(cordova.file.externalDataDirectory, "rtasUsuario.txt")
      .then(function (success) {
        
        $cordovaFile.readAsText(cordova.file.externalDataDirectory, "rtasUsuario.txt")
          .then(function (exito) {
            /*var cadenaExito = JSON.stringify(exito);
            alert(cadenaExito);*/
            var objJson = JSON.parse(exito);
            for(var i = 0; i < objJson.rtas.length; i++){
              $scope.contenido += objJson.rtas[i] + "  ";
            };
            //$scope.contenido = JSON.stringify(objJson.rtas);

          }, function (error) {
            $scope.contenido = "El archivo solocitado no se pudo leer";
            var cadenaError = JSON.stringify(error);
            console.log(cadenaError);
          });

      }, function (error) {
        $scope.contenido = "El archivo solocitado no existe";
        var cadenaError = JSON.stringify(error);
        console.log(cadenaError);
      });

    } catch(ex){
      console.log(ex);
    }

    });    

  });

})


