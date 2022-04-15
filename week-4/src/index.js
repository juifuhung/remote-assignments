import React, { useState } from "react";
import "./style.css";
import ReactDom from "react-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <section className="title">
        <h1>Website Title / Logo</h1>
      </section>
      <Container />
      <Nav />
    </div>
  );
};

const Container = () => {
  const [showMenu, setShowMenu] = useState(false);
  let menu;

  if (showMenu) {
    menu = "menu";
  }

  return (
    <div className="container" onClick={() => setShowMenu(!showMenu)}>
      <i class="fa-solid fa-xl fa-bars" aria-hidden="true"></i>
    </div>
  );
};

// const Container = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   let menu;

//   if (showMenu) {
//   }

//   return (
//     <div className="container" onClick={() => setShowMenu(!showMenu)}>
//       <i class="fa-solid fa-xl fa-bars" aria-hidden="true"></i>
//     </div>
//   );
// };

const Nav = () => {
  return (
    <section className="navbar">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </section>
  );
};

const Main = () => {
  return (
    <div className="main">
      <Top />
      <Center />
      <Bottom />
    </div>
  );
};

const Top = () => {
  let [message, changeContent] = useState("Welcome Message");
  const changeMessage = () => {
    if (message === "Welcome Message") {
      changeContent("Have a Good Time!");
    } else {
      changeContent("Welcome Message");
    }
  };

  return (
    <section className="top" onClick={changeMessage}>
      <h2>{message}</h2>
    </section>
  );
};

const Center = () => {
  return (
    <section className="center">
      <h3>Section Title</h3>
    </section>
  );
};

const Bottom = () => {
  return (
    <section className="bottom">
      <section className="upper">
        <div className="top-left">
          <h4>Content Box 1</h4>
        </div>
        <div className="top-right">
          <h4>Content Box 2</h4>
        </div>
      </section>
      <section className="lower">
        <div className="bottom-left">
          <h4>Content Box 3</h4>
        </div>
        <div className="bottom-right">
          <h4>Content Box 4</h4>
        </div>
      </section>
      <section className="button">
        <button>
          {" "}
          <h4>Call to Action</h4>
        </button>
      </section>
    </section>
  );
};

ReactDom.render(App(), document.querySelector("#root"));
