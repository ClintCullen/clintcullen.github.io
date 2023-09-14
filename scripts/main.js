function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

//myManifesto.innerHTML = `function multiply 100 * 30 = ${multiply(100, 30)}`;

// document.querySelector("html").addEventListener("click", () => {
//   alert("Ouch! Stop poking me!");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Double-Striped-Bluet-200x300.jpg") {
      myImage.setAttribute("src", "images/double-striped-bluet-2.jpg")
    } else {
      myImage.setAttribute("src", "images/Double-Striped-Bluet-200x300.jpg");
    }
};