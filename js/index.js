let currentYear = document.getElementById("current-year");

let date = new Date();
currentYear.innerHTML = date.getFullYear() + "";

let uploadImage = document.getElementById("upload-image");
let title = document.getElementById("title");
let content = document.getElementById("content");
let source = document.getElementById("source");

let uploadImageCheck = uploadImage.getAttribute("data-choose") == "true";
let titleCheck = title.getAttribute("data-choose") == "true";
let contentCheck = content.getAttribute("data-choose") == "true";
let sourceCheck = source.getAttribute("data-choose") == "true";

let canvasBox = document.getElementById("canvas-box");
let download = document.getElementById("download");

let canvas = document.getElementById("viewport");
let context = canvas.getContext("2d");

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

context.fillStyle = "#6f6f6f";
context.fillRect(0, 0, canvasWidth, canvasHeight / 2);

if (uploadImageCheck) {
} else {
  // headerImage();
  demoImage();
}

context.moveTo(0, canvasHeight / 2);
context.lineTo(canvasWidth, canvasHeight / 2);
context.stroke();

context.fillStyle = "#ffffff";
context.fillRect(0, canvasHeight / 2, canvasWidth, canvasHeight / 2);

if (titleCheck) {
} else {
  let titleContent = document.createTextNode("Title");
  title.appendChild(titleContent);
  showTitle("Title");
}

if (contentCheck) {
} else {
  let contentContent = document.createTextNode("Content");
  content.appendChild(contentContent);
  showContent("Content");
}

if (sourceCheck) {
} else {
  let sourceContent = document.createTextNode("Source");
  source.appendChild(sourceContent);
  showSource("Source");
}

//-----------------------------------------------

function headerImage() {
  let img = new Image();
  img.src = "../img/picture.svg";
  img.onload = function () {
    context.drawImage(img, canvasWidth / 2 - 25, canvasHeight / 4 - 10, 50, 50);
  };
}

function demoImage() {
  let img = new Image();
  img.src = "../img/demo.jpg";
  img.onload = function () {
    let ratio = img.naturalWidth / img.naturalHeight;
    let imageHeight = canvasHeight / 2;
    let imageWidth = imageHeight * ratio;
    let imageLeft = (canvasWidth - imageWidth) / 2;
    context.drawImage(img, imageLeft, 0, imageWidth, imageHeight);
    canvasBox.style.background = `url(${img.src}) no-repeat center center`;
  };
}

function showTitle(title) {
  context.fillStyle = "#000000";
  context.font = "bold 20px Verdana";
  context.fillText(title, 20, canvasHeight / 2 + 40);
}

function showContent(content) {
  context.fillStyle = "#000000";
  context.font = "15px Verdana";
  context.fillText("Content", 20, canvasHeight / 2 + 70);
}

function showSource(source) {
  context.fillStyle = "#7b7a79";
  context.font = "italic 13px Verdana";
  context.fillText("Source", canvasWidth / 2, canvasHeight - 40);
}

function downloadCanvas(link, filename) {
  link.href = canvas.toDataURL();
  link.download = filename;
}

//----------------------------------------------

download.addEventListener(
  "click",
  function () {
    downloadCanvas(this, "demo.png");
  },
  false
);
