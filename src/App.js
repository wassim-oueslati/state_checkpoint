import React, {Component} from "react";
import './App.css';

class App extends Component {
  constructor() {
    super();
  this.state = {
    
    Person: {
      fullName : "Mohamed Wassim Oueslati",
      bio : "curently studing full stack js in gomycode",
      imgSrc : "/money heist.jpg",
      profession : "student"
    },
    show : true,
    digit:0,
    
  };
}

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    this.setState({
        digit: 0
    });
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      digit: this.state.digit+1
    });
  }

  handleShowPerson = () => {
    this.setState({
      show: !this.state.show,
      digit:0
    });
  }

  render() {
    
    return (
      <div className="App">
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="money heist"></img>
            <h1>{this.state.Person.profession}</h1>
            counter: {this.state.digit}
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      
        </div>
    );
  }
}


export default App;
