console.log("Hello");





var nav = document.querySelectorAll("nav a")
console.log(nav)

nav.forEach(element => {
    element.addEventListener("click", event => {
        event.preventDefault()
        console.log("link clicked")
        alert(element.getAttribute("href"));
    });
});





var movies = document.querySelector("#movies article:first-child")
console.log(movies)
movies.classList.add("featured");





var data = document.querySelectorAll("article p")
console.log(data)

data.forEach(thiselement => {
    if (thiselement.dataset.display != "yes"){
        thiselement.style.display = "none"
    }
});