function toHomePage(){
    let btnClick = document.getElementById("homeBTN");
    btnClick.addEventListener("click", () => {window.location.href = "index.html"});
}
function toAboutPage(){
    let btnClick= document.getElementById("aboutBTN");
    btnClick.addEventListener("click", () => {window.location.href = "about.html"});

    fetch('index.html').then(res => res.text()) //edit below function after learning fetch API
    .then(htmlString => {
        const parser = new DOMParser();
        const indexdoc = parser.parseFromString(htmlString, 'text/html');

        const indexHeader = indexdoc.querySelectorAll('button');
        const aboutHeader = document.querySelector('header');

        if (indexHeader && aboutHeader) {
            aboutHeader.appendChild(indexHeader);
        }
    })
  .catch(error => console.error('Failed to fetch html, error:', error));

}

toHomePage();
toAboutPage();

