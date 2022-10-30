// button count
(function(){
    let buttonCount = 0
    const clickBtn = document.getElementById("count")

    clickBtn.addEventListener('click', function(){
        buttonCount++

        document.querySelector("#countresult").innerHTML = buttonCount
    })
}());

// currency conversion
(function(){
    let rand;
    let convertedAmt = document.querySelector("#convertedAmt")

    const convert = function(){
        rand = parseInt(document.querySelector("#amount").value)

        if(this.id == "euro"){
            convertedAmt.innerHTML = (rand * 0.062)
        } 
        else if (this.id == "dollar"){
                convertedAmt.innerHTML = (rand * 0.069)
        }

        else if (this.id == "pound"){
                convertedAmt.innerHTML = (rand * 0.052)
        }
    }

    const buttons = document.querySelectorAll("#convertor button");

    buttons.forEach(
        function(button){
            button.addEventListener('click', convert);
        }
    )
})

// dropdown list
(function(){
    for(i=1; i<=25; i++){
        document.getElementById('numbers').innerHTML += (`<option value=${i}>${i}</option>`)
    }
}());

// calculator

(function(){
    let el = function(element){
        if (element.charAt(0) === "#"){
            return document.querySelector(element)
        }

        return document.querySelectorAll(element)
    };
    
    let display = el("#display")
    let equals = el("#equals")
    let numbers = el(".number")
    let ops = el(".ops")
    let currentNumber = ""
    let firstNumber = ""
    let answer 
    let operator
    
    const setNumber = function(){
        if(answer){
            currentNumber = this.getAttribute("data-number")
            answer = ""
        } else{
            currentNumber += this.getAttribute("data-number")
        }
        display.innerHTML = currentNumber
    }
    
    const moveNumber = function(){
        firstNumber = currentNumber
        currentNumber = ""
        operator = this.getAttribute("data-ops")
    
        equals.setAttribute("data-result", "")
    }
    
    const displayNumber = function(){
        firstNumber = parseFloat(firstNumber)
        currentNumber = parseFloat(currentNumber)
    
        switch(operator){
            case "plus":
                answer = firstNumber + currentNumber
                break;
    
            case "minus":
                answer = firstNumber - currentNumber
                break;
    
            case "multiply":
                answer = firstNumber * currentNumber
                break;
    
            case "divide":
                answer = firstNumber / currentNumber
                break;
    
            default:
                answer = currentNumber
    
        }
        display.innerHTML = answer
        equals.setAttribute("data-result", answer)
        
        firstNumber = 0
        currentNumber = answer
    }
    
    const clearAll = function(){
        firstNumber = ""
        currentNumber = ""
        display.innerHTML = "0" 
        equals.setAttribute("data-result", answer);
    }

    for (let i = 0, l = numbers.length; i < l; i++) {
        numbers[i].onclick = setNumber;
      }

    for (let i = 0, l = ops.length; i < l; i++) {
        ops[i].onclick = moveNumber;
    }

    el("#clear").onclick = clearAll;
    equals.onclick = displayNumber;

}());