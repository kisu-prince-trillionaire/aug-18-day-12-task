$(document).ready(function(){
    $("button").click(function(){
        var x3 = fact(5);
        document.getElementById("btn4").innerText = x3;
        document.getElementById("demo").innerHTML = myFunction(4, 3);
        document.getElementById("demo2").innerHTML = toCelsius(77);
    })
})
function fact(n){
    return n*fact(n-1);
}
function myFunction(p1, p2) {
    return p1 * p2;
  }
  

  function toCelsius(f) {
    return (5/9) * (f-32);
  }
  