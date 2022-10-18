import React, { useState } from "react";
import Profile from "./component/Profile";
import SignupForm from "./component/SignupForm";
import { SignupContext } from "./store/SignupContext";

function App() {
  const [Signup, setSignup] = useState(false);
  const [userName, setUserName] = useState(false);

  return (
    <SignupContext.Provider value={{ setSignup, setUserName }}>
      {Signup ? <Profile user={userName} /> : <SignupForm />}
    </SignupContext.Provider>
  );
}

export default App;
