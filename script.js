function myFunction() {
  var x = document.getElementById("mynav");
  console.log(x);
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
