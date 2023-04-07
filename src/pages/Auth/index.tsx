import Logo from "../../assets/Logo.png";
import Login from "./Login";
import "./index.sass";
import Register from "./Register";
import { useState } from "react";

const Auth = () => {
  const [auth, setAuth] = useState<boolean>(true);

  const toggleAuth = () => {
    setAuth(!auth);
  };

  return (
    <section className="form-section">
      <div className="form">
        <div className="form-container">
          {auth ? (
            <Login toggleAuth={toggleAuth} />
          ) : (
            <Register toggleAuth={toggleAuth} />
          )}
        </div>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="Logo Game Fusion" />
      </div>
    </section>
  );
};

export default Auth;
