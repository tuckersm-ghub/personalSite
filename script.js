loadPageWithHeader(); 

function loadPageWithHeader() {
  if(!document.querySelector('header')) {
    fetch('index.html')
          .then(response => response.text())
          .then(htmlString => {
              const parser = new DOMParser();
              const indexDoc = parser.parseFromString(htmlString, 'text/html');
              const headerElement = indexDoc.querySelector('header');
              if (headerElement) {
                  document.body.insertAdjacentElement('afterbegin', headerElement);
                  toHomePage();
                  toAboutPage();
                  toResumePage();
                  questionMark();
              }

          })
          .catch(error => console.error('Failed to fetch header:', error));
  }
  else{
    toHomePage();
    toAboutPage();
    toResumePage();
    questionMark();
  }
}

function exclamationMark(){
  let btnClick = document.getElementById("!BTN");
  btnClick.addEventListener("click", () => {})
}

function toHomePage(){
  let btnClick = document.getElementById("homeBTN");
  btnClick.addEventListener("click", () => {window.location.href = "index.html"});
}

function toAboutPage(){
  let btnClick= document.getElementById("aboutBTN");
  btnClick.addEventListener("click", () => {window.location.href = "about.html"});
}

function toResumePage(){
  let btnClick = document.getElementById("resumeBTN");
  btnClick.addEventListener("click", () => {window.location.href = "resume.html"});
}

function questionMark(){
  let btnClick = document.getElementById("?BTN");
  btnClick.addEventListener("click", () => {
    if(window.location.href.includes("index.html")){
      randomShape(document.getElementById("design1"), document.getElementById("design2a"), document.getElementById("design2b"));
    }
    else if(window.location.href.includes("about.html")){
      
    }
    else if(window.location.href.includes("resume.html")){
      
    }
  })
}



function randomShape(leftElement, rightElement1, rightElement2){
  leftElement.style.width = (Math.random() * 50 + 200) + "px";
  leftElement.style.height = (Math.random() * 50 + 200) + "px";
  leftElement.style.borderRadius = (Math.random() * 30 + 25) + "%";

  rightElement1.style.width = (Math.random() * 50 + 10) + "px";
  rightElement1.style.height = (Math.random() * 50 + 200) + "px";
  rightElement1.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  rightElement2.style.width = (Math.random() * 50 + 10) + "px";
  rightElement2.style.height = (Math.random() * 50 + 200) + "px";
  rightElement2.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

