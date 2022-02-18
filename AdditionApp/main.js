function myfunction(){
    var num1 = parseInt(document.getElementById("first").value);
    var num2 = parseInt(document.getElementById("second").value);
    var total = document.getElementById("answer");
    total.value = num1 + num2; 
}