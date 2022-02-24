var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSpan1 = document.querySelector(".site-body__span-m")
var elSpan2 = document.querySelector(".site-body__span-b")
var elSpan3 = document.querySelector(".site-body__span-c")
var elSpan4 = document.querySelector(".site-body__span-a")


elForm.addEventListener("submit", function(event){
  event.preventDefault();

  var elInputVal = elInput.value;
    var Span1 = 3.6;
    var Span2 = 20.1;
    var Span3 = 70;
    var Span4 = 800;
  

  elSpan1.textContent = Math.round(elInputVal / Span1);
  elSpan2.textContent = Math.round(elInputVal / Span2);
  elSpan3.textContent = Math.round(elInputVal / Span3);
  elSpan4.textContent = Math.round(elInputVal / Span4);

});