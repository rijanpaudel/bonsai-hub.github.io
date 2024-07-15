// function to open the popup window
function popup() {
  var cv = document.getElementById("cvwrap");
  cv.style.display = "flex";

  var feed = document.getElementById("fback1");
  feed.style.display = "none";

  var fter = document.getElementById("foot");
  fter.style.display = "none";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "none";
}

function exit() {
  var cv = document.getElementById("cvwrap");
  cv.style.display = "none";

  var feed = document.getElementById("fback1");
  feed.style.display = "block";

  var fter = document.getElementById("foot");
  fter.style.display = "block";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "block";
}

function popup1() {
  var cv = document.getElementById("cvwrap1");
  cv.style.display = "flex";

  var feed = document.getElementById("fback1");
  feed.style.display = "none";

  var fter = document.getElementById("foot");
  fter.style.display = "none";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "none";
}

function exit1() {
  var cv = document.getElementById("cvwrap1");
  cv.style.display = "none";

  var feed = document.getElementById("fback1");
  feed.style.display = "block";

  var fter = document.getElementById("foot");
  fter.style.display = "block";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "block";
}

// function call for jenish cv
function popup2() {
  var cv = document.getElementById("cvwrap2");
  cv.style.display = "flex";

  var feed = document.getElementById("fback1");
  feed.style.display = "none";

  var fter = document.getElementById("foot");
  fter.style.display = "none";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "none";
}

function exit2() {
  var cv = document.getElementById("cvwrap2");
  cv.style.display = "none";

  var feed = document.getElementById("fback1");
  feed.style.display = "block";

  var fter = document.getElementById("foot");
  fter.style.display = "block";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "block";
}
// function call for umang cv
function popup3() {
  var cv = document.getElementById("cvwrap3");
  cv.style.display = "flex";

  var feed = document.getElementById("fback1");
  feed.style.display = "none";

  var fter = document.getElementById("foot");
  fter.style.display = "none";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "none";
}

function exit3() {
  var cv = document.getElementById("cvwrap3");
  cv.style.display = "none";

  var feed = document.getElementById("fback1");
  feed.style.display = "block";

  var fter = document.getElementById("foot");
  fter.style.display = "block";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "block";
}

// function call for umang cv
function popup4() {
  var cv = document.getElementById("cvwrap4");
  cv.style.display = "flex";

  var feed = document.getElementById("fback1");
  feed.style.display = "none";

  var fter = document.getElementById("foot");
  fter.style.display = "none";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "none";
}

function exit4() {
  var cv = document.getElementById("cvwrap4");
  cv.style.display = "none";

  var feed = document.getElementById("fback1");
  feed.style.display = "block";

  var fter = document.getElementById("foot");
  fter.style.display = "block";

  var profilebox = document.getElementById("wraper");
  profilebox.style.display = "block";
}

function feedpopup() {
  // get the element with their id
  var feedback = document.getElementById("fb");
  var footer = document.getElementById("foot");
  var wper = document.getElementById("wraper");
  // changing css propery to none and block to different elements
  footer.style.display = "none";
  wper.style.display = "none";
  feedback.style.display = "flex";
}
function exitf() {
  // get the element with their id
  var cv = document.getElementById("cvwrap4");
  var feedback = document.getElementById("fb");
  var footer = document.getElementById("foot");
  var wper = document.getElementById("wraper");

  // changing css propery to none and block to different elements
  footer.style.display = "block";
  wper.style.display = "block";
  feedback.style.display = "none";
}

/*This validate function appears to be used for form validation when a user submits a form on a webpage. 
 The function first retrieves the values of the form fields with the names "firstname","lastname" "email", 
"gender", "message".Then, it checks if any of these values are empty
.If any of them are empty, it displays an alert message */

function feedvalidate() {
  // get the values of the form fields
  var firstname = document.forms["feedback_form"]["fstname"].value;
  var lastname = document.forms["feedback_form"]["lstname"].value;
  var email = document.forms["feedback_form"]["email"].value;
  var message = document.forms["feedback_form"]["msg"].value;

  // check if any of the fields are empty
  if (firstname == "" || lastname == "" || email == "" || message == "") {
    // if any of the fields are empty, display an alert message
    alert("OPPS ! You Have Forgetten Something To Fill.");
  } else {
    // if  above conditions is met, display a success message
    alert("Thank You For Your Feedback !");
  }
}
