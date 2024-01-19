// src/components/Buttons/ColorButton.js
const ColorButton = ({ color }) => {
    return (
      <button className={`h-10 w-10 rounded-full shadow-md m-1`} style={{ backgroundColor: color }} />
    );
  };
  
  export default ColorButton;
  