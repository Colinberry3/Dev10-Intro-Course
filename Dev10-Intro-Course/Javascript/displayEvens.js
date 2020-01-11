var startingNumber;
var endingNumber;
var step;

function clearErrors() {
  for (var loopCounter = 0; loopCounter < document.forms["displayEvens"].elements.length; loopCounter++) {
    if(document.forms["displayEvens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
      document.forms["displayEvens"].elements[loopCounter].parentElement.className = "form-group";
    }
  }
}
function resetForm() {
  clearErrors();
  document.forms["displayEvens"]["startingNumber"].value = "";
  document.forms["displayEvens"]["endingNumber"].value = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("submitButton").innerText = "Submit";
  document.forms["displayEvens"]["startingNumber"].focus();
}
function validateItems() {
    clearErrors();
    var startingNumber = document.forms["displayEvens"]["startingNumber"].value;
    var startingNumber = document.forms["displayEvens"]["endingNumber"].value;
    var step = document.forms["displayEvens"]["step"].value;
    if (startingNumber == "" || isNaN(startingNumber)) {
        alert("Starting number must be filled in with a number.");
        document.forms["displayEvens"]["startingNumber"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["startingNumber"].focus();
        return false;
    }
    if (endingNumber == "" || isNaN(endingNumber)) {
        alert("Ending number must be filled in with a number.");
        document.forms["displayEvens"]["endingNumber"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["endingNumber"].focus();
        return false;
    }
    if (step < 0) {
        alert("Step must be greater than zero.");
        document.forms["displayEvens"]["step"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["step"].focus();
        return false;
    }
   if (endingNumber < startingNumber) {
       alert("Ending number must be greater than starting number.");
       document.forms["displayEvens"]["endingNumber"]
          .parentElement.className = "form-group has-error"
       document.forms["displayEvens"]["endingNumber"].focus();
       return false;
   }
 }
