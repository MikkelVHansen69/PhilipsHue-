import React from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { setBrightness, setColor, triggerHueAlert } from "./api"; // Importing API functions
import emptylight from "./components/images/emptylight.png";
import letlight from "./components/images/letlight.png";

function App() {
  const handleBrightnessChange = async (event) => {
    await setBrightness(event.target.value);
  };

  const handleColorChange = async (hexColor) => {
    const xyColor = hexToXY(hexColor);
    await setColor(xyColor);
  };

  // const alertChange = async (onclick) => {
  //   await alert(onclick);
  // };

  const handleAlertChange = async (lselect) => {
    await triggerHueAlert(lselect);
  };

  function hexToXY(hex) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (hex.length === 6) {
      r = parseInt(hex.substring(0, 2), 16);
      g = parseInt(hex.substring(2, 4), 16);
      b = parseInt(hex.substring(4, 6), 16);
    }
  
    // Then convert RGB to XYZ
    r = r / 255;
    g = g / 255;
    b = b / 255;
  
    // Gamma correction
    r = r > 0.04045 ? Math.pow((r + 0.055) / (1.0 + 0.055), 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / (1.0 + 0.055), 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / (1.0 + 0.055), 2.4) : b / 12.92;
  
    let x = r * 0.664511 + g * 0.154324 + b * 0.162028;
    let y = r * 0.283881 + g * 0.668433 + b * 0.047685;
    let z = r * 0.000088 + g * 0.072310 + b * 0.986039;
  
    // Convert XYZ to XY
    let xy = [x / (x + y + z), y / (x + y + z)];
    return xy;
  }
  

  return (
    <div>
      <Header />

      <div className="bg-[#F6F8FB] rounded-tl-3xl rounded-tr-3xl h-auto pb-14">
        <p className="text-2xl font-bold mb-6 ml-4 mt-6 pt-6">Intensity</p>
        <div className="flex justify-between">
          <img src={emptylight} alt="Low intensity light icon" />
          <input
            type="range"
            min="1"
            max="100"
            defaultValue="50"
            className="h-2 w-72 mt-4 bg-yellow-400 rounded-lg cursor-pointer appearance-none"
            onChange={handleBrightnessChange}
          />
          <img src={letlight} alt="High intensity light icon" />
        </div>

        <p className="text-2xl font-bold mb-6 ml-4 mt-6">Colors</p>
        <div className="flex ml-4 mt-8 gap-3">
          {/* Example color buttons with onClick event handling */}
          <button className="w-7 h-7 rounded-3xl bg-[#FF9B9B]" onClick={() => handleColorChange("FF9B9B")}></button>
          <button className="w-7 h-7 rounded-3xl bg-[#94EB9E]" onClick={() => handleColorChange("94EB9E")}></button>
          <button className="w-7 h-7 rounded-3xl bg-[#94CAEB]" onClick={() => handleColorChange("94CAEB")}></button>
          <button className="w-7 h-7 rounded-3xl bg-[#A594EB]" onClick={() => handleColorChange("A594EB")}></button>
          <button className="w-7 h-7 rounded-3xl bg-[#DE94EB]" onClick={() => handleColorChange("DE94EB")}></button>
          <button className="w-7 h-7 rounded-3xl  bg-[#EBD094]" onClick={() => handleColorChange("EBD094")}></button>
          <button className="w-7 h-7 rounded-3xl bg-[#FFBC91]" onClick={() => handleColorChange("FFBC91")}>+</button>
        </div>

        <p className="text-2xl font-bold mb-6 ml-4 mt-6">Scenes</p>
        <div className="flex flex-wrap justify-around mt-3 gap-4">
          <button className="w-40 h-14 rounded-xl text-white bg-[#FFBC91]">Birthday</button>
          <button className="w-40 h-14 rounded-xl text-white bg-[#DA93EB]" onClick={() => handleAlertChange("lselect")}>Party</button>
          <button className="w-40 h-14 rounded-xl text-white bg-[#93DDEB]">Relax</button>
          <button className="w-40 h-14 rounded-xl text-white bg-[#BFEC92]">Fun</button>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
