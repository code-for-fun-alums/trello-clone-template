import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { logoutAfterSignedIn } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Trello-clone</Link>
          <Link>Boards</Link>
          <Link>Create</Link>
          <Link to="/" onClick={handleClick}>
            Logout
          </Link>
          {/* <a href="#" onClick={handleClick}>
            Logout
          </a> */}
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      // dispatch(logout());
      dispatch(logoutAfterSignedIn());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
