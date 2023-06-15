const XMLHttpRequest = require('xhr2');


function loadDoc() {
  const request = new XMLHttpRequest();  // Step 1
  // Sending request to the server
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1"); // STEP 2
  request.send(); //STEP 3


  request.addEventListener("load", function () {
    console.log(this.responseText);
  })


  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  }


}


loadDoc()