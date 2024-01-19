import React from "react";

const ControlPanel = ({ onRoomSelect }) => {
  // Define your rooms and their details here
  const rooms = [
    { id: 'bed room', name: 'Bed room', lights: 4, icon: BedIcon },
    { id: 'livingroom', name: 'Living Room', lights: 2, icon: LivingRoomIcon },
    { id: 'Kitchen', name: 'Kitchen', lights: 4, icon: KitchenIcon },
    { id: 'Bathroom', name: 'Bathroom', lights: 4, icon: BathroomIcon },
    { id: 'Outdoor', name: 'Outdoor', lights: 4, icon: OutdoorIcon },
    { id: 'Balcony', name: 'Balcony', lights: 4, icon: BalconyIcon },
  ];

  return (
    <div className="bg-blue-500 p-4 text-white">
      <h2 className="text-2xl font-bold">Control Panel</h2>
      <h3 className="text-xl my-4">All Rooms</h3>
      <div className="grid grid-cols-2 gap-4">
        {rooms.map(room => (
          <button
            key={room.id}
            className="bg-white text-black p-4 rounded-lg shadow-md"
            onClick={() => onRoomSelect(room.id)}
          >
            <img src={room.icon} alt={`${room.name} icon`} className="w-12 h-12 mx-auto"/>
            <p className="text-lg">{room.name}</p>
            <p>{room.lights} Lights</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ControlPanel;
