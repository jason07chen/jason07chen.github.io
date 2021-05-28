var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/Google.jpg') {
      myImage.setAttribute ('src','images/Firefox.png');
    } else {
      myImage.setAttribute ('src','images/Google.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

/*
function setUserName() {
  let myName = prompt('Please enter your name.'); //對話視窗函式
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}