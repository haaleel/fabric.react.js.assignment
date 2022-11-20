import "./App.css";
import { useEffect} from "react";
import { fabric } from "fabric";
import pen from "./pen.svg";
import eraser from "./eraser.png";

function App() {


  useEffect(() => {
  const canvas = new fabric.Canvas("canvas");
  canvas.setHeight(window.innerHeight);
  canvas.setWidth(window.innerWidth);
  canvas.isDrawingMode = true;

  canvas.freeDrawingBrush.width = 5;

  canvas.freeDrawingBrush.color = "blue";
  }, []);

  const erasers = () => {
    
    // const canvas = new fabric.Canvas("canvas");
    // freeDrawingBrush.color = "yellow";
    // isDrawingMode = true;
  };

  return (
    <div>
      <div className="headerContainer">
        <div className="box1">
          <div className="img1">
            <img
              style={{ width: "36px", height: "34px", margin: "2px" }}
              src={pen}
              alt=""
            />
          </div>

          <div className="slidecontainer ">
            <input
              className="slider"
              type="range"
              min="3"
              max="20"
              // onChange={(e) => {
              //   setLineWidth(e.target.value);
              // }}
            />
          </div>

          <div className="colorDiv"></div>
          <div className="colorDiv"></div>
          <div className="colorDiv"></div>
          <div className="colorDiv"></div>
          <div className="colorDiv"></div>
          <div className="box1">
            <div onClick={erasers} className="img2">
              <img
                style={{ width: "36px", height: "34px", margin: "2px" }}
                src={eraser}
                alt=""
              />
            </div>

            <div className="slidecontainer ">
              <input
                className="slider "
                type="range"
                min="3"
                max="20"
                onChange={(e) => {
                  // SetEraser(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <canvas id="canvas" />
    </div>
  );
}

export default App;
