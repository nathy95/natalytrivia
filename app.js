var welcome = alert("Bienevenido a Sumate");
// \
var userName = prompt("Ingrese su nombre");
var game = prompt("¿Vamos a jugar?: \n 1: Si \n 2: No  ");
// Creamos la condicional para ver si desea o no jugar
if(game === "1" || game ==="Si") {
  document.getElementById("userName").innerHTML = userName;
}else{
  alert("Gracias " + userName + " sera en otra oportunidad" );
}
//TRIVIA CANTANTES
var getSingers = document.getElementById("singers");
//Creo el evento en la opcion cantantes
getSingers.addEventListener("click",  function(){
var puntuation = 0
    //Preguntas
    var firstQuestionsSingers = prompt("A: ¿Quiénes cantan la bicicleta?: \n 1: Shakira y Juanes \n 2: Thalia y Carlos Vives  \n 3: Shakira y Carlos Vives");
    var secondQuestionsSingers = prompt("B: ¿Quiénes cantan Bonamana?: \n 1: Super Junior \n 2: TVXQ \n 3: EXO ");
    var thirdQuestionsSingers = prompt("C: ¿Quién canta la gasolina?: \n 1: Don Omar \n 2: Daddy Yanquee \n 3: Tito Nieves");

    //Respuestas
    var showFirstAnswer = document.getElementById("firstAnswer");
    var showSecondAnswer = document.getElementById("secondAnswer");
    var showThirdAnswer = document.getElementById("thirdAnswer")

    //Condiciones
    if(firstQuestionsSingers === "3"){
      showFirstAnswer.innerHTML = "A: genial, es correcto";
      puntuation= puntuation + 1;
    }else{
      showFirstAnswer.innerHTML = "A: error";
    }
    if(secondQuestionsSingers === "1"){
      showSecondAnswer.innerHTML = "B: correcto";
      puntuation= puntuation + 1;
    }else{
      showSecondAnswer.innerHTML = "B: error";
    }
    if(thirdQuestionsSingers === "2"){
      showThirdAnswer.innerHTML = "C: correcto";
      puntuation= puntuation + 1;
    }else{
      showThirdAnswer.innerHTML = "C: error error ";
    }
    alert("Has respondido " +  puntuation + " preguntas correctamente")
});


//TRIVIA BAILES
var getDances = document.getElementById("dances");
//Creo el evento en la opcion cantantes
getDances.addEventListener("click",  function(){
var puntuation = 0
    //Preguntas
    var firstQuestionsDances = prompt("A: ¿Cuál es la danza representativa de Argentina?: \n 1: Tango \n 2: Bachata  \n 3: Paso Doble");
    var secondQuestionsDances = prompt("B: ¿Cuál es el baile repesentativo de Lima?: \n 1: Huayno \n 2: Marinera \n 3: Toada ");
    var thirdQuestionsDances = prompt("C: ¿Cuál es una danza ?: \n 1: Quebradita \n 2: Macarena \n 3: Tito Nieves");

    //Respuestas
    var showFirstAnswer = document.getElementById("firstAnswer");
    var showSecondAnswer = document.getElementById("secondAnswer");
    var showThirdAnswer = document.getElementById("thirdAnswer")

    //Condiciones
    if(firstQuestionsDancess === "1"){
      showFirstAnswer.innerHTML = "A: genial, es correcto";
      puntuation= puntuation + 1;
    }else{
      showFirstAnswer.innerHTML = "A: error";
    }
    if(secondQuestionsDances === "2"){
      showSecondAnswer.innerHTML = "B: correcto";
      puntuation= puntuation ++;
    }else{
      showSecondAnswer.innerHTML = "B: error";
    }
    if(thirdQuestionsDances === "1"){
      showThirdAnswer.innerHTML = "C: correcto";
      puntuation= puntuation + 1;
    }else{
      showThirdAnswer.innerHTML = "C: error error ";
    }
});
