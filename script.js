
function toHomePage(){
  let btnClick = document.getElementById("homeBTN");
  btnClick.addEventListener("click", () => {window.location.href = "index.html"});
}

function toAboutPage(){
  let btnClick= document.getElementById("aboutBTN");
  btnClick.addEventListener("click", () => {window.location.href = "about.html"});
}

function toAchievementsPage(){
  let btnClick = document.getElementById("achievementsBTN");
  btnClick.addEventListener("click", () => {window.location.href = "achievements.html"});
}

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
                  toAchievementsPage();
              }

          })
          .catch(error => console.error('Failed to fetch header:', error));
  }
  
  toHomePage();
  toAboutPage();
  toAchievementsPage();
}


loadPageWithHeader(); 