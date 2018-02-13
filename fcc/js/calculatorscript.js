$(document).ready(function() {
  
  var result = 0;
  var current = '';
  var decimal = false;
  var arithmetic = false;
  var nextValue = '';
  var valueArr = [];
  var arithmeticArr = [];
  
  
  $(".btn").click(function(){
    //FIRST VALUE
    if (current == '' && valueArr.length == 0) {
      switch(this.value){
        case "ac":
          $("#text").text("0");
          $("#history").text("0");
          decimal = false;
          arithmetic = false;
          current = '';
          result = 0;
          arithmeticArr = [];
          valueArr = [];
          nextValue = '';          
          break;
        case "ce":
          $("#text").text("0");
          $("#history").text("0");
          decimal = false;
          arithmetic = false;
          current = '';
          result = 0;
          arithmeticArr = [];
          valueArr = [];
          nextValue = '';  
          break;
        case "7":
          $('#text').text("7");
          $('#history').text("7");
          current = '7';
          break;
        case "8":
          $('#text').text("8");
          $('#history').text("8");
          current = '8';
          break;
        case "9":
          $('#text').text("9");
          $('#history').text("9");
          current = '9';
          break;
        case "4":
          $('#text').text("4");
          $('#history').text("4");
          current = '4';
          break;
        case "5":
          $('#text').text("5");
          $('#history').text("5");
          current = '5';
          break;   
        case "6":
          $('#text').text("6");
          $('#history').text("6");
          current = '6';
          break;    
        case "1":
          $('#text').text("1");
          $('#history').text("1");
          current = '1';
          break;   
        case "2":
          $('#text').text("2");
          $('#history').text("2");
          current = '2';
          break; 
        case "3":
          $('#text').text("3");
          $('#history').text("3");
          current = '3';
          break;
        case "0":
          $('#text').text("0");
          $('#history').text("0");
          current = '0';
          break;
        case ".":
          $('#text').text("0.");
          $('#history').text("0.");
          current = '0.';
          decimal = true;
          break; 
        case "/":
          if (result !== 0){
            valueArr.push(result);
            arithmeticArr.push(this.value);
            $("#text").text("/");
            $("#history").text(result + "/");
            arithmetic = true;
          }
          break;
        case "x":
          if (result !== 0){  
            valueArr.push(result);
            arithmeticArr.push(this.value);
            $("#text").text("x");
            $("#history").text(result + "x");  
            arithmetic = true;
          }
          break;
        case "+":
          if (result !== 0){  
            valueArr.push(result);
            arithmeticArr.push(this.value);
            $("#text").text("+");
            $("#history").text(result + "+");  
            arithmetic = true;
          }
          break;
        case "-":
          if (result !== 0){  
            valueArr.push(result);
            arithmeticArr.push(this.value);
            $("#text").text("-");
            $("#history").text(result + "-");     
            arithmetic = true;
          }
          break;          
      }
      
    //ARITHMETIC IS USED
    }else if (arithmetic == true){
      arithmetic = false;
      decimal = false;
      switch(this.value){
        case "ac":     
          $('#text').text("0");
          $('#history').text("0");
          decimal = false;
          arithmetic = false;
          current = '';
          result = 0;
          arithmeticArr = [];
          valueArr = [];
          nextValue = '';
          break;
        case "ce":
          if (current == ''){
            if (valueArr.length == 1){
              $('#text').text("0");
              $('#history').text("0");
              decimal = false;
              arithmetic = false;
              current = '';
              result = 0;
              arithmeticArr = [];
              valueArr = [];
              nextValue = '';             
            }else{
              var erase = valueArr.pop();
              arithmeticArr.pop();
              var historyText = $('#history').text();
              $('#history').text(historyText.substring(0, historyText.length-erase.length-1));
            }
          }else{
            $('#text').text(current);
            var historyText = $('#history').text();
            $('#history').text(historyText.substring(0, historyText.length-1));
            arithmeticArr.pop();
            break;
          }
        case "/":
          arithmetic = true;
          break;
        case "x":
          arithmetic = true;
          break;
        case "7":
          $('#text').text("7");
          $('#history').append("7");
          current = '7';
          break;
        case "8":
          $('#text').text("8");
          $('#history').append("8");
          current = '8';
          break;
        case "9":
          $('#text').text("9");
          $('#history').append("9");
          current = '9';
          break;
         case "-":
          arithmetic = true;
          break;         
        case "4":
          $('#text').text("4");
          $('#history').append("4");
          current = '4';
          break;
        case "5":
          $('#text').text("5");
          $('#history').append("5");
          current = '5';
          break;   
        case "6":
          $('#text').text("6");
          $('#history').append("6");
          current = '6';
          break;    
        case "+":
          arithmetic = true;
          break;
        case "1":
          $('#text').text("1");
          $('#history').append("1");
          current = '1';
          break;   
        case "2":
          $('#text').text("2");
          $('#history').append("2");
          current = '2';
          break; 
        case "3":
          $('#text').text("3");
          $('#history').append("3");
          current = '3';
          break;
        case "0":
          $('#text').text("0");
          $('#history').append("0");
          current = '0';
          break;
        case ".":
          $('#text').text("0.");
          $('#history').append("0.");
          current = '0.';
          decimal = true;
          break;
        case "=":
          arithmetic = true;
          break; 
      }
      
    //CURRENT VALUE
    }else{
      switch(this.value){
        case "ac":     
          $('#text').text("0");
          $('#history').text("0");
          decimal = false;
          arithmetic = false;
          current = '';
          result = 0;
          arithmeticArr = [];
          valueArr = [];
          nextValue = '';
          break;
        case "ce":
          $('#text').text("0");
          if (valueArr.length == 0){
            $('#history').text('0');
            decimal = false;
            arithmetic = false;
            current = '';
            result = 0;
            arithmeticArr = [];
            valueArr = [];
            nextValue = '';           
          }else{
            var lastValue = valueArr[valueArr.length-1];
            $('#text').text('0');
            var historyText = $("#history").text();
            $("#history").text(historyText.substring(0,(historyText.length - current.length)));
            current = '';
            arithmetic = true;
          }
          break;
        case "/":
          $('#text').text("/");
          $('#history').append("/");
          arithmeticArr.push(this.value);
          valueArr.push(current);
          arithmetic = true;
          break;
        case "x":
          $('#text').text("x");
          $('#history').append("x");
          arithmeticArr.push(this.value);
          valueArr.push(current);
          arithmetic = true;
          break;
        case "7":
          $('#text').append("7");
          $('#history').append("7");
          current += '7';
          break;
        case "8":
          $('#text').append("8");
          $('#history').append("8");
          current += '8';
          break;
        case "9":
          $('#text').append("9");
          $('#history').append("9");
          current += '9';
          break;
         case "-":
          $('#text').text("-");
          $('#history').append("-");
          arithmeticArr.push(this.value);
          valueArr.push(current);
          arithmetic = true;
          break;         
        case "4":
          $('#text').append("4");
          $('#history').append("4");
          current += '4';
          break;
        case "5":
          $('#text').append("5");
          $('#history').append("5");
          current += '5';
          break;   
        case "6":
          $('#text').append("6");
          $('#history').append("6");
          current += '6';
          break;    
        case "+":
          $('#text').text("+");
          $('#history').append("+");
          arithmeticArr.push(this.value);
          valueArr.push(current);
          arithmetic = true;
          break;
        case "1":
          $('#text').append("1");
          $('#history').append("1");
          current += '1';
          break;   
        case "2":
          $('#text').append("2");
          $('#history').append("2");
          current += '2';
          break; 
        case "3":
          $('#text').append("3");
          $('#history').append("3");
          current += '3';
          break;
        case "0":
          $('#text').append("0");
          $('#history').append("0");
          current += '0';
          break;
        case ".":
          if (decimal == false){
            $('#text').append(".");
            $('#history').append(".");
            current += ".";
            decimal = true;
          }
          break;
        case "=":
          valueArr.push(current);
          result = calculate(valueArr,arithmeticArr);
          if (result == "Cannot Divide by Zero."){
            $('#history').text(result);
            $('#text').text('0');
            decimal = false;
            arithmetic = false;
            current = '';
            result = 0;
            arithmeticArr = [];
            valueArr = [];
          }else{
            $('#text').text(result);
            $('#history').append("=" + result);
            decimal = false;
            arithmetic = false;
            current = '';
            arithmeticArr = [];
            valueArr = [];
          }
          break; 
      } 
    }
    
    // TEXT LIMIT REACHED //
    if ($('#text').text().length > 8 || $('#history').text().length > 22){
      decimal = false;
      current = '';
      arithmetic = false;
      result = 0;
      valueArr = [];
      arithmeticArr = [];
      $('#text').text("0");
      $('#history').text("Digit Limit Reached");
    }
    
  }); 
  
  function calculate(valueArr, arithmeticArr){
    var b, c;
    c = parseFloat(valueArr[0]);
    for (var i = 0; i < arithmeticArr.length; i++){
      b = parseFloat(valueArr[i+1]);
      switch(arithmeticArr[i]){
        case '+':
          c += b; 
          break;
        case '/':
          if (b == 0){
           return "Cannot Divide by Zero.";
          }else{
            c /= b;
          }
          break;
        case 'x':
          c *= b;
          break;
        case '-':
          c -= b;
          break;
      }
    }
    if (c == 0){
      return '0';
    }
    return Math.round(c*100)/100;
  }
});