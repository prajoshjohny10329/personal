
function myFunction() {
  let x = document.getElementById("yourname").value;
  let text;

  if (x == "") {
    text = "Input not valid";
  }
  else {
    text = " ";
  }  
  document.getElementById("demo").innerHTML = text;
}
function myFunctionsubject() {
    let x = document.getElementById("subject").value;
    let subjectext;
    if (x == "") {
        subjectext = "Input not valid";
    }
    else {
        subjectext = " ";
    }  
    document.getElementById("subjp").innerHTML = subjectext;
  }
function myFunctionemail() {
    let x = document.getElementById("email").value;
    let emailtext;
    if (x == "") {
        emailtext = "Input not valid";
    }
    else {
        emailtext = " ";
    }  
    document.getElementById("emailp").innerHTML = emailtext;
  }
  function myFunctionmessage() {
    let x = document.getElementById("message").value;
    let messagetext;
    if (x == "") {
        messagetext = "Input not valid";
    }
    else {
        messagetext = " ";
    }  
    document.getElementById("mesp").innerHTML = messagetext;
  }
