function clearErrors() {
  for (var loopCounter = 0; loopCounter < document.forms["restaurant"].elements.length; loopCounter++) {
    if(document.forms["restaurant"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
      document.forms["restaurant"].elements[loopCounter].parentElement.className = "form-group";
    }
  }
}
function resetForm() {
  clearErrors();
  document.forms["restaurant"]["name"].value = "";
  document.forms["restaurant"]["email"].value = "";
  document.forms["restaurant"]["phoneNumber"].value = "";
  document.getElementById("submit").innerText = "Sent Request";
  document.forms["restaurant"]["name"].focus();
}
function validateForm() {
  clearErrors();
  var name = document.forms["restaurant"]["name"].value;
  var email = document.forms["restaurant"]["email"].value;
  var phone = document.forms["restaurant"]["phoneNumber"].value;
  if (name == "") {
    alert("Name must be filled out.");
    document.forms["restaurant"]["name"].focus();
    return false;
  }
  if (email == "") {
    alert("Email must be filled out.");
    document.forms["restaurant"]["email"].focus();
    return false;
  }
  if (phone == "" || isNaN(phone)) {
    alert("Phone number must be filled out.");
    document.forms["restaurant"]["phoneNumber"].focus();
    return false;
  }
  if (true) {
  alert("The information submitted is valid. Thank you!");
  return true;
}
}
