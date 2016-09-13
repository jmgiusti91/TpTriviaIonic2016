angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $timeout, $state) {
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

      $scope.correctasJuego = $scope.usuario.correctas.uno + " - " + $scope.usuario.correctas.dos + " - " + $scope.usuario.correctas.tres;

      $scope.respUsuario = $scope.usuario.respuestas.uno + " - " + $scope.usuario.respuestas.dos + " - " + $scope.usuario.respuestas.tres;

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

.controller('AutorCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})


