

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSpan1 = document.querySelector(".site-body__span-m")
var elSpan2 = document.querySelector(".site-body__span-b")
var elSpan3 = document.querySelector(".site-body__span-c")
var elSpan4 = document.querySelector(".site-body__span-a")


elForm.addEventListener("submit", function(event){
  event.preventDefault();

  var elInputVal = elInput.value;
    var speed1 = 3.6;
    var speed2 = 20.1;
    var speed3 = 70;
    var speed4 = 800;
  

  function result1(){
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


  elSpan1.textContent = Math.round(result1());
  elSpan2.textContent = Math.round(result2());
  elSpan3.textContent = Math.round(result3());
  elSpan4.textContent = Math.round(result4());

  
});



