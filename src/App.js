import React from 'react';
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';

import cv from './cv.pdf';
import './App.css';


class ImageFrame extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       time: Date.now(),
       imgList: [img1, img2, img3, img4],
       currentImgOnDisplay: img1,
       counter:0
      };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
       time: Date.now(),
       counter: (this.state.counter+1)%4,
       currentImgOnDisplay: this.state.imgList[this.state.counter]
     }), 3200);
     console.log(this.state.counter);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div className="img-frame">
        <img src={this.state.currentImgOnDisplay} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
          <div className="header-section">
            <div className="header-frame">
              <div className="title">
                <h1>Tal Pogorelis</h1>
                <h2>Software Engineer in Israel</h2>
              </div>
            </div>
            <ImageFrame/>
          </div>
      );
  }
}

class Menu extends React.Component {
  render() {
    return (
        <div className="links">
          <a href="https://www.facebook.com/tal.pogorelis" style={{color: "#eb4888"}} >facebook</a>
          <a href="https://github.com/VirgoA" style={{color: "#10a2f5"}}>github</a>
          <a href="https://www.linkedin.com/in/virgoa/" style={{color: "#e9bc3f"}}>linkedin</a>
          <a href="mailto:talpogorelis@gmail.com" style={{color:"#24d05a"}}>email</a>
          <a href="#" style={{color: "#eb4888"}} >Youtube</a>
          <a href="#" style={{color: "#10a2f5"}}>Blog</a>
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
          <p>Hi there! My name is Tal and I'm a Computer Science student studying
           at Bar-ilan University & a Software developer developing mainly scripts & web applications for fun.
           in my free time I also enjoy reading, working out and playing music :)
          </p>

        </div>
      );
    } else {
      return (
        <div key={this.props.length} className="bioText">
        <p>My name is Tal & I'm a Final year student currently living in Rishon-Lezion.
        <br/> Interacting with computers has been my passion ever since I was
        a young kid. I will not lie - I was initially drawn
        to them because I fancied computer games. However, the more I operated
         with computers, the more I began to appreciate understanding
         how they work, discovering just how much they can do and the near
         limitless potential they hold. </p>
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
            <div className="download-button">
              <button>
              <a href={cv} download>Resume</a>
              </button>
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
