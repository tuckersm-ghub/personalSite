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
                  toExclamationMarkPage();
                  toHomePage();
                  toAboutPage();
                  toResumePage();
                  questionMark();
              }

          })
          .catch(error => console.error('Failed to fetch header:', error));
  }
  else{
    toExclamationMarkPage();
    toHomePage();
    toAboutPage();
    toResumePage();
    questionMark();
  }
}

function toExclamationMarkPage(){
  let btnClick = document.getElementById("!BTN");
  btnClick.addEventListener("click", () => {window.location.href = "!.html"})
  if(window.location.href.includes("!.html")){
    loadFunFact();
  }
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
    if(window.location.href.includes("!.html")){
      WOWEffect();
    }
    else if(window.location.href.includes("about.html")){
      randomImage(document.getElementById("aboutimg"));
    }
    else if(window.location.href.includes("resume.html")){
      loadConfetti().then(() => {
        confetti({
          particleCount: 200,
          spread: 130,
          origin: { y: 0.6 },
          ticks: 400
          });
        });
    }
    else{
      randomShape(document.getElementById("design1"), document.getElementById("design2a"), document.getElementById("design2b"));
    }
  })
}

function loadFunFact(){
  const currDate = new Date().toLocaleDateString("en-NY");
  const dateFactRetrieved = localStorage.getItem("factDate");

  const fact = document.createElement("p");
  fact.id="excParagraph";

  if(currDate===dateFactRetrieved && localStorage.getItem("factText")!==null){
    fact.textContent = localStorage.getItem("factText");
    document.body.appendChild(fact);
  }
  else{
    fetch("https://uselessfacts.jsph.pl/random.json")
      .then(response => response.json())
        .then(funFact =>{
          fact.textContent = funFact.text;
          localStorage.setItem("factDate",currDate);
          localStorage.setItem("factText",funFact.text);
          document.body.appendChild(fact);
        })
    .catch(error => {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "No fun fact today";
      errorMessage.id = "excError";
      document.body.appendChild(errorMessage);
    });
  }
}

function randomShape(leftElement, rightElement1, rightElement2){
  leftElement.style.borderRadius = (Math.random() * 30 + 25) + "%";
  rightElement1.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  rightElement2.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function randomImage(image){
  let imgarr = ["Aimg1.jpeg", "Aimg2.jpeg", "Aimg3.jpeg", "Aimg4.jpeg"];
  let currimg = image.getAttribute("src");
  let newimg = "images/abtimages/" + imgarr[Math.floor(Math.random()*imgarr.length)];
  while(currimg===newimg){
    newimg = "images/abtimages/" + imgarr[Math.floor(Math.random()*imgarr.length)];
  }
  image.setAttribute("src",newimg);
}

function loadConfetti() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

let imgTick = false;
function WOWEffect(){
  if(!imgTick){
    const image =  document.createElement("img");
    image.src = "images/WOW2.jpeg";
    image.id="excimg";
    document.body.appendChild(image);
    imgTick=true;
  }
  const audioFeature = document.createElement("audio");
  audioFeature.src = "audio/GG.mp3";
  audioFeature.autoplay = true;
  document.body.appendChild(audioFeature);
}
//git command test