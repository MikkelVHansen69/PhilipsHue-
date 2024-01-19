import React from 'react';

const DeskLightButton = ({ onClick }) => {
  return (
    <button
      className="flex-1 bg-white hover:bg-blue-700 font-bold py-2 px-4 rounded-2xl"
      onClick={onClick}
    >
      Desk Light
    </button>
  );
};

export default DeskLightButton;