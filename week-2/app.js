let welcome = document.querySelector("main section.top h2");
welcome.addEventListener("click", () => {
    if(welcome.innerText === "Welcome Message"){
        welcome.innerText = "Have a Good Time!";
    } else {
        welcome.innerText = "Welcome Message";
    }
})

let loadMore = document.querySelector("main section.button button");
let moreContents = document.querySelector("main section.more")
loadMore.addEventListener("click", () => {
    moreContents.style.display = "flex";
})
