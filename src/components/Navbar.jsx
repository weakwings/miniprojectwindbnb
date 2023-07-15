import "./Navbar.css";
import logo from "../img/logo.png";

const Navbar = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div>
        <img className="logo" src={logo} alt="Logo" onClick={refreshPage} />
      </div>
      <div className="menu">
        <div className="location">Add location</div>
        <div className="guest">Add guest</div>
        <div className="search1">
          <span className="material-symbols-outlined">search</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
