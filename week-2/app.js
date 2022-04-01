let welcome = document.querySelector("main section.top h2");
welcome.addEventListener("click", () => {
    if(welcome.innerText === "Welcome Message"){
        welcome.innerText = "Have a Good Time!";
    } else {
        welcome.innerText = "Welcome Message";
    }
})

let CallToAction = document.querySelector("section.button button");
let moreContents = document.querySelector("section.more");
CallToAction.addEventListener("click", () => {

    let newContentBox = document.createElement("section");
    newContentBox.classList.add("new-content-box");
    
    let newUpper = document.createElement("section");
    newUpper.classList.add("upper");

    let newTopLeft = document.createElement("div");
    newTopLeft.classList.add("top-left");

    let newTopLeftContent = document.createElement("h4");
    newTopLeftContent.innerText="Content Box 1";
    newTopLeft.appendChild(newTopLeftContent);

    let newTopRight = document.createElement("div");
    newTopRight.classList.add("top-right");

    let newTopRightContent = document.createElement("h4");
    newTopRightContent.innerText="Content Box 2";
    newTopRight.appendChild(newTopRightContent);

    newUpper.appendChild(newTopLeft);
    newUpper.appendChild(newTopRight);

    let newLower = document.createElement("section");
    newLower.classList.add("lower");

    let newLowerLeft = document.createElement("div");
    newLowerLeft.classList.add("bottom-left");

    let newLowerLeftContent = document.createElement("h4");
    newLowerLeftContent.innerText="Content Box 3";
    newLowerLeft.appendChild(newLowerLeftContent);

    let newLowerRight = document.createElement("div");
    newLowerRight.classList.add("bottom-right");

    let newLowerRightContent = document.createElement("h4");
    newLowerRightContent.innerText="Content Box 4";
    newLowerRight.appendChild(newLowerRightContent);

    newLower.appendChild(newLowerLeft);
    newLower.appendChild(newLowerRight);

    newContentBox.appendChild(newUpper);
    newContentBox.appendChild(newLower);

    moreContents.appendChild(newContentBox);
})
