window.addEventListener("load", function() {

document.querySelector('#btn1').addEventListener('click', function (event){

launchBrowser();      //Working Here

});

 

document.addEventListener('keydown', (event) => {

  const keyName = event.key;
  console.log(event.key);

  if(keyName=="2"){
console.log(event.key);
    launchBrowser();     //Not Working Here

    document.getElementById("p1").innerHTML = "2 Pressed";

  }

 

}, false);

 

function launchBrowser()

{

    var win=window.open("https://www.w3schools.com/");


 }

});

