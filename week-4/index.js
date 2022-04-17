import React, { useState } from "react";
import "./style.css";
import ReactDom from "react-dom";

const App = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Main showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

const Header = ({ showMenu, setShowMenu }) => {
  return (
    <div className="header">
      <section className="title">
        <h1>Website Title / Logo</h1>
      </section>
      <Container showMenu={showMenu} setShowMenu={setShowMenu} />
      <Nav />
    </div>
  );
};

const Container = ({ showMenu, setShowMenu }) => {
  const showSideMenu = () => setShowMenu(!showMenu);

  const showBar = showMenu ? (
    <i class="fa-solid fa-xl fa-bars" aria-hidden="true"></i>
  ) : (
    <i class="fa-solid fa-xl fa-xmark"></i>
  );

  return (
    <span className="container" onClick={() => showSideMenu(!showMenu)}>
      {showBar}
    </span>
  );
};

const Menu = () => {
  return (
    <ul className="burger-menu">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  );
};

class Nav extends React.Component {
  render() {
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
  }
}

const Main = ({ showMenu, setShowMenu }) => {
  const showSideBar = () => setShowMenu(!showMenu);

  const showSide = showMenu ? null : <Menu />;

  return (
    <div className="main">
      {showSide}
      <Top className="top" />
      <Center className="Center" />
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
  let [more, load] = useState([<Boxes />]);
  const loadMore = () => {
    load([...more, <Boxes />]);
  };

  return (
    <section className="bottom">
      {more}
      <section className="button" onClick={loadMore}>
        <button>
          {" "}
          <h4>Call to Action</h4>
        </button>
      </section>
    </section>
  );
};

const Boxes = () => {
  return (
    <section className="boxes">
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
    </section>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
