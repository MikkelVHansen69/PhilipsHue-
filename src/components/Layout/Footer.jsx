import Bulb from "../images/bulb.png";
import HomeIcon from "../images/icon-home.png";
import IconSettings from "../images/icon-settings.png";

const Footer = () => {
    return (
      <footer className="absolute bottom-0 w-full bg-white h-20">
        <div className="flex justify-around items-center mt-6 mr-12 ml-12">
          <img src={Bulb} alt="light icon" />
          <img src={HomeIcon} alt="Home icon" />
          <img src={IconSettings} alt="settings icon" />
        </div>
      </footer>
    );
  };
  
  export default Footer;
  