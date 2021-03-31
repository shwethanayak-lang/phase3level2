var num = 1;
var table = document.getElementById("myTable");
var tr = table.getElementsByTagName("tr");
var len = tr.length;

var addRow = () => {
  document.getElementById("addnew").innerHTML = document.getElementById(
    "addnew"
  ).innerHTML = num++;

  document
    .getElementById("myTable")
    .insertRow(-1).innerHTML = document.getElementById("addrow").innerHTML;

  validate();
};

var removeRow = () => {
  $("#myTable tr:last").remove();
};
// var clearRow = () => {
//   document.getElementById("mobile").innerHTML = "";
//   document.getElementById("DOB").innerHTML = "";
//   document.getElementById("email").innerHTML = "";
//   document.getElementById("fname").innerHTML = "";
//   document.getElementById("lname").innerHTML = "";
//   document.getElementById("degree").innerHTML = "";
// };

function validate() {
  var Mobile = document.getElementById("mobile").innerHTML;
  var DOB = document.getElementById("DOB").value;
  var Email = document.getElementById("email").innerHTML;
  var fname = document.getElementById("fname").innerHTML;
  var lname = document.getElementById("lname").innerHTML;
  var degree = document.getElementById("degree").innerHTML;
  var valmobile = /^\d{10}$/;
  var valDOB = /^[0-9]+\-[0-9]+\-[0-9]+$/;
  var valEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/;
  var firstN = /^[A-Z]{1}[A-Za-z0-9]{2,50}$/;
  var lastN = /^[A-Za-z0-9\.]+$/;
  if (!valmobile.test(Mobile)) {
    alert("Enter a 10 digit mobile number");
  }

  if (!valDOB.test(DOB)) {
    alert("Please fill the date of birth");
  }

  if (!valEmail.test(Email)) {
    alert("Enter a valid email id");
  }
  if (!firstN.test(fname)) {
    alert(" First letter of fname should be capital");
  }
  if (!lastN.test(lname)) {
    alert("Enter a valid last name");
  }
  if (!degree) {
    alert("Fill the degree column");
  }

  // var td = tr[1].getElementsByTagName("td")[0].innerHTML;
  // td.innerHTML = 1;
}
