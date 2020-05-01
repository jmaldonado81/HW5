function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("validate").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("validate").innerHTML = "Input OK";
    } 
  } 