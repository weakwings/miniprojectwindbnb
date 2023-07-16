import "./Navbar.css";
import logo from "../img/logo.png";

/*=====Logo Refresh Page=====*/
const Navbar = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div>
        {/*=====Logo=====*/}
        <img className="logo" src={logo} alt="Logo" onClick={refreshPage} />
      </div>
      <div className="menu">
        <div>
          {/*=====Button trigger modal=====*/}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div className="location">Add location</div>
            <div className="guest">Add guest</div>
            <div className="search1">
              <span className="material-symbols-outlined">search</span>
            </div>
          </button>
          {/*=====Modal=====*/}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Welcome to my mini-project
                    <br />
                    Created by{" "}
                    <strong>
                      <u>Felipe Messias</u>
                    </strong>{" "}
                    <span className="material-symbols-outlined">
                      add_reaction
                    </span>
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body"></div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
