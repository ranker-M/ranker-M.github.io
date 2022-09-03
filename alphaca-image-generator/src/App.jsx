import "./App.css";
import React, { Component } from "react";
import Button from "@mui/material/Button";

class App extends Component {
  state = {
    canvas :{
        ...Object.keys(this.props.features).reduce((acc, current) => {
        let value = this.props.features[current][0];
        acc[current] = value;
        return acc;
      }, {}),
    },
    canvasSize: 240
  };

  drawImageToCanvas = () => {
    let drawOrder = [
      "backgrounds",
      "neck",
      "leg",
      "ears",
      "hair",
      "accessories",
      "nose",
      "eyes",
      "mouth",
    ];

    Promise.all(drawOrder.map(this.loadImage)).then(images => {
      var canvas = document.getElementById("alpaca-img");
      var ctx = canvas.getContext("2d");
      canvas.width = this.state.canvasSize;
      canvas.height = this.state.canvasSize;
      images.forEach((image) =>
        ctx.drawImage(image, 0, 0, this.state.canvasSize, this.state.canvasSize)
      );
    });
  }

  loadImage = (feature) =>
  new Promise((resolve, reject) => {
    const img = new Image(this.state.canvasSize, this.state.canvasSize);
    img.onload = () => { resolve(img) };
    img.onerror = reject;
    img.src = require("./assets/" + feature + "/" + this.state.canvas[feature])
  }
  )  

  resizeCanvas = () =>  {
    if(window.innerWidth < 400) this.setState({canvasSize: 240})
    else if(window.innerWidth < 550) this.setState({canvasSize: 360})
    else if(window.innerWidth < 880) this.setState({canvasSize: 400})
    else if(window.innerWidth < 1200) this.setState({canvasSize: 540})
    else if(window.innerWidth < 1680) this.setState({canvasSize: 600})
    else this.setState({canvasSize: 720})
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeCanvas);
    this.resizeCanvas();
    this.drawImageToCanvas();
  }

  componentDidUpdate(prevProps, prevState) {
    this.drawImageToCanvas();
  }

  reloadCanvas = (e, feature, featureStyle) => {
    let newState = this.state.canvas;
    newState[feature] = featureStyle;
    this.setState({ canvas: newState });
  };
  
  handleRandom = () => {
    let randomState = this.state.canvas;
    Object.keys(randomState).forEach(key=>{
      let featureList = this.props.features[key]
      randomState[key]=featureList[Math.round(Math.random()*(featureList.length-1))]
    });
    this.setState({ canvas:randomState });
  }

  handleDownload = () => {
    var link = document.createElement('a');
    link.download = 'alpaca-img.png';
    link.href = document.getElementById('alpaca-img').toDataURL()
    link.click();
  }

  render() {
    
    return (
      <div className="flex justify-center items-start flex-col p-[3%] box-border">
        <h1 className="text-5xl mb-6">ALPACA IMAGE GENERATOR</h1>

        <div className="flex flex-col border-2 md:flex-row">
          <div className="img-side m-auto" id="canvas-div">
            <canvas
              id="alpaca-img"
            ></canvas>
            <div className="flex justify-around p-4">
              <Button variant="contained" onClick={this.handleRandom}>
                Random
              </Button>
              <Button variant="contained" onClick={this.handleDownload}>
                Download
              </Button>
            </div>
          </div>

          <div className="max-w-full md:max-w-[50%] max-h-[70vh] overflow-y-scroll md:overflow-scroll p-3">
            {Object.keys(this.props.features).map((feature) => {
              return (
                <div className="feture-section">
                  <h3 className="text-xl my-3">{feature.toUpperCase()}</h3>
                  {this.props.features[feature].map((featureStyle, index) => {
                    let featureName = featureStyle.substring(
                      0,
                      featureStyle.indexOf(".")
                    );
                    return (
                      <Button
                        style={{ margin: "5px" }}
                        key={featureName}
                        variant={
                          this.state.canvas[feature] == featureStyle
                            ? "contained"
                            : "outlined"
                        }
                        onClick={(e) =>
                          this.reloadCanvas(e, feature, featureStyle)
                        }
                      >
                        {featureName}
                      </Button>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
