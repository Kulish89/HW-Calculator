// alert("Hello, i am ready!!!!")
const btnsCalcEl = document.getElementById("calc-buttons");
let inputCalc = document.getElementById("input");
let activeScreen = document.getElementById("screenFirst");
let hiddenScreen = document.getElementById('screenSecond');
let signScreen = document.getElementById('screenSign');

btnsCalcEl.addEventListener("click", function (ev){
    if( ev.target.nodeName === "BUTTON" && !ev.target.dataset.sign){
        const attrVal =  ev.target.getAttribute('data-num');
        activeScreen.innerText += attrVal
    }
    if (ev.target.nodeName === "BUTTON" && ev.target.dataset.sign === "+" || ev.target.dataset.sign === "-" || ev.target.dataset.sign === "*" || ev.target.dataset.sign === "/"){
        signScreen.innerText = ev.target.getAttribute('data-sign')
        hiddenScreen.innerText = activeScreen.innerText
        activeScreen.innerText = ""    
    }
    if (ev.target.nodeName === "BUTTON" && ev.target.dataset.sign === "="){
        let result = eval((+hiddenScreen.innerText) + (signScreen.innerText)+ (+activeScreen.innerText));
        activeScreen.innerText = "";
        activeScreen.innerText = result
    }
    if(ev.target.nodeName === "BUTTON" && ev.target.dataset.sign === "C"){
        activeScreen.innerText = ""
        hiddenScreen.innerText = ""
        signScreen.innerText = ""
    }
    
 
})  