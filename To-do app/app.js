const txt = document.getElementById("task");
const btn = document.getElementById("submit");
const out = document.getElementById("output1");

function fun1(){
    out.innerHTML = txt.value;
}
submit.addEventListener('click', fun1);