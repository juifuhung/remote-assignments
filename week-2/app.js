//Request1: Click to Change Text
let welcome = document.querySelector("main section.top h2");
welcome.addEventListener("click", () => {
    if(welcome.innerText === "Welcome Message"){
        welcome.innerText = "Have a Good Time!";
    } else {
        welcome.innerText = "Welcome Message";
    }
})

//Request 2: Click to Show/Close Menu
let container = document.querySelector("div.container");
let newNav = document.querySelector("div.navRWD");
container.addEventListener("click", () => {
  console.log(container.innerHTML);
  if (container.innerHTML.includes('<i class="fa-solid fa-xl fa-bars"></i>')) {
    container.innerHTML = '<i class="fa-solid fa-xl fa-xmark"></i>';
    let newUL = document.createElement("ul");
    let newItem1 = document.createElement("li");
    newItem1.innerText = "Item 1";
    let newItem2 = document.createElement("li");
    newItem2.innerText = "Item 2";
    let newItem3 = document.createElement("li");
    newItem3.innerText = "Item 3";
    let newItem4 = document.createElement("li");
    newItem4.innerText = "Item 4";
    newUL.appendChild(newItem1);
    newUL.appendChild(newItem2);
    newUL.appendChild(newItem3);
    newUL.appendChild(newItem4);
    newNav.appendChild(newUL);

    newNav.style.right = "0";
    newNav.style.height = "100%";

  } else {
    container.innerHTML = '<i class="fa-solid fa-xl fa-bars"></i>';
    let newUL = document.querySelector("div.navRWD ul");
    if(newUL){
        newUL.remove();
        newNav.style.height = "0";
    }
  }
});
 
//Request 3: Click to Show More Content Boxes
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

    newContentBox.style.animation = "scaleUp 0.3s forwards";
})
