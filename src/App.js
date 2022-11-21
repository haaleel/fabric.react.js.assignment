import "./App.css";
import { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import pen from "./pen.svg";
import eraser from "./eraser.png";
import "./components/Eraser";

function App() {
  // var canvas = new fabric.Canvas("canvas");
  const [brush, setbrush] = useState(true);
  const [brushColor, setbrushColor] = useState("#000");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas("c");

    // animate();
    canvasRef.current = canvas;
  }, []);

  useEffect(() => {
    initCanvas();
    // draw()
    // erasers();
  }, []);

  useEffect(() => {
    const fc = canvasRef.current;
    fc.freeDrawingBrush = brush
      ? new fabric.PencilBrush(fc)
      : new fabric.EraserBrush(fc);
    // fc.freeDrawingBrush.width = 10;
  }, [brush]);

  const initCanvas = () => {
    // const canvas = new fabric.Canvas("canvas");
  
    const fc = canvasRef.current;
    fc.setHeight(window.innerHeight);
    fc.setWidth(window.innerWidth);

    fc.isDrawingMode = true;

    fc.freeDrawingBrush.width = 5;

    // canvas.freeDrawingBrush.color = "blue";
  };


  const erasers = () => {
    console.log(canvasRef, "ref");
    //  const fc = canvasRef.current;
    setbrush(false);
  };

  const handleBrushColor = (clr) => {
    console.log(clr);
    const fc = canvasRef.current;
    fc.freeDrawingBrush.color = clr;
  };

  const handleBrushWidth = (width) => {
    const fc = canvasRef.current;
    fc.freeDrawingBrush.width = width;
  };

  const handleShapes = (shape) => {
    if (shape === "circle") {
      const fc = canvasRef.current;
      fc.add(
        new fabric.Circle({
          top: 100,
          left: 100,
          radius: 50,
          fill: "red",
        })
      );
    }
    if (shape === "triangle") {
      const fc = canvasRef.current;
      fc.add(
        new fabric.Triangle({
          top: 300,
          left: 210,
          width: 100,
          height: 100,
          fill: "blue",
        })
      );
    }
    if (shape === "rectangle") {
      const fc = canvasRef.current;
      fc.add(
        new fabric.Rect({
          top: 100,
          left: 500,
          width: 50,
          height: 50,
          fill: "green",
        })
      );
    }
  };
// page clear
  const clear = () => {
    const fc = canvasRef.current;
    fc.clear()
  };

  return (
    <div>
      <div className="headerContainer">
        <div className="box1">
          <div className="img1" onClick={() => setbrush(true)}>
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
              min="5"
              max="50"
              defaultValue={5}
              onChange={(e) => {
                handleBrushWidth(e.target.value);
                // setLineWidth(e.target.value);
              }}
            />
          </div>
          <div
            className="colorDiv"
            onClick={() => handleBrushColor("#000")}
            style={{ backgroundColor: "#000" }}
          ></div>
          <div
            className="colorDiv"
            onClick={() => handleBrushColor("#219653")}
            style={{ backgroundColor: "#219653" }}
          ></div>
          <div
            className="colorDiv"
            onClick={() => handleBrushColor("#f2c94c")}
            style={{ backgroundColor: "#f2c94c" }}
          ></div>
          <div
            className="colorDiv"
            onClick={() => handleBrushColor("#2f80ed")}
            style={{ backgroundColor: "#2f80ed" }}
          ></div>
          <div
            className="colorDiv"
            onClick={() => handleBrushColor("#eb5757")}
            style={{ backgroundColor: "#eb5757" }}
          ></div>

          <div className="button" onClick={() => handleShapes("circle")}>
            Circle
          </div>
          <div className="button" onClick={() => handleShapes("triangle")}>
            Triangle
          </div>
          <div className="button" onClick={() => handleShapes("rectangle")}>
            Rectangle
          </div>
          <div className="box1">
            <div onClick={() => erasers()} className="img2">
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
                min="5"
                max="50"
                defaultValue={5}
                onChange={(e) => {
                  // SetEraser(e.target.value);
                  handleBrushWidth(e.target.value);
                }}
              />
            </div>
            <div className="button" style={{backgroundColor:"#b12429"}} onClick={() => clear()}>
              Clear
            </div>
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} id="c" />
    </div>
  );
}

export default App;
