// ID currentNumber procurado do HTML - getElementById faz o Javascript procurar a ID - ("currentNumber") armazenando o valor//
var currentNumberValor = document.getElementById("currentNumber") 
var currentNumber = 0;

// Duas funções "increment e decrement" ambos são "onclick" do HTML (Button)
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberValor.innerHTML = currentNumber;
    
    if (currentNumber >= 0) {
        document.getElementById("currentNumber").style.color="black";
    }
}

function decrement() {
    currentNumber = currentNumber - 1; 
    currentNumberValor.innerHTML = currentNumber;
    
    if (currentNumber < 0) {
        document.getElementById("currentNumber").style.color="yellow";
    }else   {
        document.getElementById("currentNumber").style.color="black";
    }
}



