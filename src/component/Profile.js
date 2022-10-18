import React from "react";

function Profile({ user }) {
  return (
    <div className="Main">
      <div className="HeroMes">Hello {user}!</div>
    </div>
  );
}

export default Profile;
