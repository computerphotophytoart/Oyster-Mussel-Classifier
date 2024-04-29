var form = document.forms.namedItem("fileinfo"); 
var lastImage; /*store last image as variable*/

form.addEventListener('submit', function (ev) { /* event listener for form submission*/
  ev.preventDefault() /* prevent default submission */

  document.getElementById("loader").style.visibility = "visible";
  let formdata = new FormData(form); /* form data object create*/

  var requestOptions = { 
    method: 'POST', /* fetch requirements*/
    body: formdata,
  };

  var loc = window.location;

  fetch(`${loc.protocol}//${loc.hostname}:${loc.port}/predict`, requestOptions)
    .then(response => response.text().then((result => {
      console.log(result); /*send request to server for prediction*/
      DisplayResult(result)
      document.getElementById("loader").style.visibility = "hidden";
    })));
});

/* listen for image uploaded*/
form.addEventListener('change', function (ev) {
  lastImage = URL.createObjectURL(ev.target.files[0]);
  document.getElementById("uploadedImg").src = lastImage
})

function DisplayResult(result) {
  /* creating a container for the result*/
  resultDiv = document.getElementById("results")

  divContainer = document.createElement("div")
  divContainer.className = "result"

  divImage = document.createElement("div")
  divImage.className = "image"
  divImage.style.backgroundImage = "url('" + lastImage + "')";

  divText = document.createElement("div")
  divText.appendChild(document.createTextNode(result))
  divText.className = "text"

  divContainer.appendChild(divImage)
  divContainer.appendChild(divText)
  resultDiv.prepend(divContainer)
}