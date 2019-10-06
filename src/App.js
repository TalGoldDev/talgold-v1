import React from 'react';
import logo from './logo.svg';
import img from './myImage.jpg';
import './App.css';


class Header extends React.Component {
  render() {
    return (
          <div className="header-section">
            <div className="header-frame">
              <h1>Tal Pogorelis</h1>
              <h2>Software Engineer in Israel</h2>
            </div>
            <div className="img-frame">
              <img src={img} style={{height:300+"px", width:400+"px"}} />
            </div>
          </div>
      );
  }
}

class Menu extends React.Component {
  render() {
    return (
        <div className="links">
          <a href="#">facebook</a>
          <a href="#">github</a>
          <a href="#">linkedin</a>
          <a href="#">email</a>
        </div>
      );
  }
}

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      bioInformation: "",
      short: "hi tal",
      long: "hi hi tal"
    };
  }
  render() {
    return (
        <div className="bio">
          <div className="toggler">
            <button>short</button>
            <button>long</button>
          </div>
          <div className="bioText">
            <p>{this.state.bioInformation}</p>
          </div>
        </div>
      );
  }
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Bio/>
    </div>
  );
}

export default App;
