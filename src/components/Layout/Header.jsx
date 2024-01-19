import whitelightbulb from "../images/whitelightbulb.png";
import BedLightButton from "../Buttons/BedLightButton";
import DeskLightButton from "../Buttons/DeskLightButton";
import MainLightButton from "../Buttons/MainLightButton";

const Header = () => {
  return (
    <>
      <header className="bg-blue-800 h-64 flex flex-col">
        <div className="flex justify-around text-white w-full">
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold">Bed</h1>
            <h2 className="text-3xl font-semibold">Room</h2>
            <p className="mt-2 text-yellow-400 text-2xl font-bold">4 Lights</p>
          </div>
          <img
            className="custom-size"
            src={whitelightbulb}
            alt="White Light Bulb"
          />
        </div>
        <div className="space-x-8 inline-flex text-black">
          <MainLightButton label="Main Light" />
          <DeskLightButton label="Desk Lights" />
          <BedLightButton label="Bed Light" />
        </div>
      </header>
    </>
  );
};

export default Header;


