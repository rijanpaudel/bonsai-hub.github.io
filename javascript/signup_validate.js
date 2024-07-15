/*This validate function appears to be used for form validation when a user submits a form on a webpage. 
 The function first retrieves the values of the form fields with the names "fullname", "email", 
"phonenumber", "gender", "password", and "confirmpassword".Then, it checks if any of these values are empty
.If any of them are empty, it displays an alert message saying "OPPS ! You Have Forgetten Something To Fill."
Next, the function checks if the value of the "password" field is the same as the value of the "confirmpassword" field. If they are not the same,
 it displays an alert message saying "Password and Confirm Passoword Must be Same".
If none of the above conditions are met, the function displays an alert message saying 
"You Have Sucessfully Signed UP!".*/

function validate() {
  // get the values of the form fields
  var fullname = document.forms["form2"]["fullname"].value;
  var email = document.forms["form2"]["email"].value;
  var number = document.forms["form2"]["phonenumber"].value;
  var gender = document.forms["form2"]["gender"].value;
  var pass = document.forms["form2"]["password"].value;
  var cpass = document.forms["form2"]["confirmpassword"].value;

  // check if any of the fields are empty
  if (
    fullname == "" ||
    email == "" ||
    number == "" ||
    gender == "" ||
    pass == "" ||
    cpass == ""
  ) {
    // if any of the fields are empty, display an alert message
    alert("OPPS ! You Have Forgetten Something To Fill.");
  } else if (pass != cpass) {
    // if the password and confirm password fields do not match, display an alert message
    alert("Password and Confirm Passoword Must be Same");
  } else {
    // if none of the above conditions are met, display a success message
    alert("You Have Sucessfully Signed UP !");
  }
}
