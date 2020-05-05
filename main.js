function
  primeNumber() {
    var n, i, flag = true;
    n = document.myform.n.value; 
    n = parseInt(n) 
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        } 
    if (flag == true) 
      alert(n + "there are % numbers"); 
    else
      alert(n + " invalid input please try again"); 
  };
  primeNumber() {
    var x, text;
  
   
    x = document.getElementById("numb").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 2 || x > 100) {
      text = "";
    } else {
      text = "invalid input please try again";
    }
    document.getElementById("demo").innerHTML = text;
  }
