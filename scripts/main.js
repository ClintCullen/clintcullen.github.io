// Clint Cullen 11/3/2023 14:45
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Double-Striped-Bluet-200x300.jpg") {
    myImage.setAttribute("src", "images/double-striped-bluet-2.jpg")
  } else {
    myImage.setAttribute("src", "images/Double-Striped-Bluet-200x300.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let titleText = 'Double Striped Bluet';

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${titleText} ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${titleText} ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}