import React from 'react';

const MainLightButton = ({ onClick }) => {
  return (
    <button
      className="flex-1 bg-white hover:bg-blue-700 font-bold py-2 px-4 rounded-2xl"
      onClick={onClick}
    >
      Main light
    </button>
  );
};

export default MainLightButton;