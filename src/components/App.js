import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, // Whether the ball is rendered
      posi: 0, // Position of the ball
      ballPosition: { left: "0px" }, // Inline style for ball's position
    };
    this.renderBallOrButton = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    // Start button click: render the ball and hide the button
    this.setState({ renderBall: true });
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  handleKeyDown(event) {
    // Listen for the Right Arrow key
    if (event.key === "ArrowRight" || event.keyCode === 39) {
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: `${newPos}px` }, // Update ball's position
        };
      });
    }
  }

  componentDidMount() {
    // Add an event listener for keydown events
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // Remove the event listener to prevent memory leaks
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
