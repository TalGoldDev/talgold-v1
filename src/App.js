import React from 'react';
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
          <a href="https://www.facebook.com/tal.pogorelis">facebook</a>
          <a href="https://github.com/VirgoA">github</a>
          <a href="https://www.linkedin.com/in/virgoa/">linkedin</a>
          <a href="mailto:talpogorelis@gmail.com">email</a>
        </div>
      );
  }
}

class BioInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 0 - short | 1 - long
      length: 0,
    };
  }

  onClick = (e) => {
    // show long bio text
    if(e === 1){
      this.setState({length:1})
    // show short bio text
    }else{
      this.setState({length:0})

    }
  }

  render() {
    //if length is short
    if(this.state.length === 0) {
      return (
        <div key={this.props.length} className="bioText">
          <p>Hi there! My name is Tal and I'm a Final year student and a developer.
          <br/> with some experience working in a team and developing mainly in
          Javascript,<br/> I also enjoy reading, working out and playing music in my free time :)
          </p>

        </div>
      );
    } else {
      return (
        <div key={this.props.length} className="bioText">
        <p>My name is Tal Pogorelis & I'm a Final year student currently living in Rishon-Lezion.
        <br/> Interacting with computers has been my passion ever since I was
        a young kid. I will not lie - I was initially drawn<br/>
        to them because I fancied computer games. However, the more I operated
         with computers, the more I began to <br/> appreciate understanding
         how they work, discovering just how much they can do and the near
         limitless potential <br/> they hold. </p>
        </div>
      );
    }
  }
}

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 0 - short | 1 - long
      length: 0,
    };
    this.bioInformationElement = React.createRef();

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    // here you know which component is that, so you can call parent method
    this.bioInformationElement.current.onClick(e);
  }

  render() {
    return (
        <div className="bio">
          <div className="toggler">
            <div className="toggler-buttons">
              <button onClick={() => this.onClick(0)}>short</button>
              <button onClick={() => this.onClick(1)}>long</button>
            </div>
            <div>
              <button>Download Resume</button>
            </div>
          </div>
          <BioInformation ref={this.bioInformationElement}/>
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
