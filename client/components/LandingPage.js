import React from "react";
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div>
      <h1>Trello-clone</h1>
      <Link to="login">
        <button>Sign in</button>
      </Link>

      <Link to="signup">
        <button>Sign up</button>
      </Link>
    </div>
  );
}
