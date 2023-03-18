function calculate() {
    // var num1 = parseFloat(document.getElementById("num1").value);
        var num1 = (document.getElementById("num1").value);
  var num1=parseFloat(num1);
  var num2 = parseFloat(document.getElementById("num2").value);
    
    var operator = document.getElementById("ddlOperators").value;

    var result = null;
  
    if (operator == "+") {
      result = num1 + num2;
    } else if (operator == "-") {
      result = num1 - num2;
    } else if (operator == "*") {
      result = num1 * num2;
    } else if (operator == "/") {
      result = num1 / num2;
    }
  
    if (isNaN(num1) || isNaN(num2) || result == null) {
      document.getElementById("result").innerHTML = "Invalid input";
    } else {
      document.getElementById("result").innerHTML = result;
    }
  }
  function changeevent() {
    console.log(document.getElementById("num1").value);
  }

