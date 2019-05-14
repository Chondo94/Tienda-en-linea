$(".name").focus(function(){
  $(".name-help").slideDown(500);
}).blur(function(){
  $(".name-help").slideUp(500);
});

function validateDecimal(valor) {
    var price = /^\d*\.?\d*$/;

    if (RE.price(valor)) {
        return true;
    } else {
        return false;
    }
}

<script>
function myFunction() {
  var txt = "";
  if (document.getElementById("precio").validity.rangeOverflow) {
    txt = "Value too large";
  } else {
    txt = "Escriba un precio razonable";
  } 
  document.getElementById("demo").innerHTML = txt;
}
</script>
