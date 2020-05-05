function
  primeNumber(){
    var n, i, flag = true;
    n = document.myform.n.value; 
    n = parseInt(n) 
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        } 
    if (flag == true) 
      alert(n + ""); 
    else
      alert(n + " invalid input please try again"); 
  } 
