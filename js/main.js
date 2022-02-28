

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSpan = document.querySelector(".site-body__span");
var elSpan1 = document.querySelector(".site-body__span-m");
var elSpan2 = document.querySelector(".site-body__span-b");
var elSpan3 = document.querySelector(".site-body__span-c");
var elSpan4 = document.querySelector(".site-body__span-a");



elForm.addEventListener("submit", function(event){
  event.preventDefault();

  var elInputVal = elInput.value;
    var speed1 = 3.6;
    var speed2 = 20.1;
    var speed3 = 70;
    var speed4 = 800;
    
    if (elInputVal <= 0 || isNaN(elInputVal)){

      elSpan.textContent = ("Iltimos 0 dan katta son kiriting ! , yokida son kiriting !");
    
      elSpan.classList.add("result-error");
      elSpan.classList.remove("result-success");
    
      return;
    }else{
      
      elSpan.classList.add("result-success");
      elSpan.classList.remove("result-error");
    }
  
    
  /*
  function result1(){
    var hour = Math.floor(elInputVal / speed1);
    var minute = Math.floor((elInputVal / speed2))
    return(elInputVal / speed1);
  }
    
  function result2(){
    return(elInputVal / speed2);
  }
    
  function result3(){
    return(elInputVal / speed3);
  }

  function result4(){
    return(elInputVal / speed4);
  }
*/

  
  function result1(distance, speed) {
    var hour = Math.floor(elInputVal / speed1);
    var minute = Math.floor((elInputVal / speed1 - hour) * 60);
    return hour + ' soat ' + minute + ' minut ';
    }
  function result2(distance, speed) {
    var hour = Math.floor(elInputVal / speed2);
    var minute = Math.floor((elInputVal / speed2 - hour) * 60);
    return hour + ' soat ' + minute + ' minut ';
  }
  function result3(distance, speed) {
    var hour = Math.floor(elInputVal / speed3);
    var minute = Math.floor((elInputVal / speed3 - hour) * 60);
    return hour + ' soat ' + minute + ' minut ';
  }
  function result4(distance, speed) {
    var hour = Math.floor(elInputVal / speed4);
    var minute = Math.floor((elInputVal / speed4 - hour) * 60);
    return hour + ' soat ' + minute + ' minut ';
  }
      
  

  elSpan1.textContent = (result1());
  elSpan2.textContent = (result2());
  elSpan3.textContent = (result3());
  elSpan4.textContent = (result4());

});