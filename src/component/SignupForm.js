import React, { useContext, useState } from "react";
import ".././App.css";
import { SignupContext } from "../store/SignupContext";

function Error(v) {
  switch (v) {
    case 1:
      return "Please fill the Name";

    case 2:
      return "Please fill the Email";

    case 3:
      return "Please fill the Password";

    case 4:
      return "Please fill the Confirm Password";

    case 5:
      return "Email is not valid";

    case 6:
      return `Password must be "your Password" > 6 and at least one alphabate character!`;

    case 7:
      return "password not match";

    case 8:
      return "Please fill the form";

    default:
      return "";
  }
}

function SignupForm() {
  const [showP, setShowP] = useState(true);
  const [showCP, setShowCP] = useState(true);
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Pass, setPass] = useState();
  const [ConPass, setConPass] = useState();
  const { setUserName, setSignup } = useContext(SignupContext);

  const CheckValid = () => {
    var re = /\S+@\S+\.\S+/;
    if (!Name && !Email && !Pass && !ConPass) {
      alert(Error(8));
    } else if (!Name) {
      alert(Error(1));
    } else if (!Email) {
      alert(Error(2));
    } else if (!re.test(Email)) {
      alert(Error(5));
    } else if (!Pass) {
      alert(Error(3));
    } else if (!ConPass) {
      alert(Error(4));
    } else if (Pass > 6) {
      alert(Error(6));
    } else if (Pass !== ConPass) {
      alert(Error(7));
    } else {
      setUserName(Name);
      setSignup(true);
    }
  };

  return (
    <div className="Main">
        
      <div className="Form">
        <input
          placeholder="Name"
          type={"text"}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="email"
          type={"email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <span>
          <input
            placeholder="Password"
            type={showP ? "password" : "text"}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setShowP(!showP);
            }}
          >
            {showP ? "o" : "-"}
          </button>
        </span>
        <span>
          <input
            placeholder="Confirm Password"
            type={showCP ? "password" : "text"}
            onChange={(e) => {
              setConPass(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setShowCP(!showCP);
            }}
          >
            {showCP ? "o" : "-"}
          </button>
        </span>

        <button onClick={CheckValid}>Sign up</button>
      </div>
    </div>
  );
}

export default SignupForm;
