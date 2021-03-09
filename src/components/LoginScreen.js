import React from "react";
import { useHistory } from "react-router-dom";
import image from "../img/background-login.jpg";
const user = {
  mail: "testdeveloper@barracks.gg",
  password: "testdeveloper",
};

const requestConfig = {
  method: "POST",
  mode: "cors",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer API_TOKEN",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
};

export const LoginScreen = () => {
  document.body.style.backgroundImage = `url(${image})`;
  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const resp = await fetch(
      "https://beta-api.barracks.gg/v2/Auth/Authenticate",
      requestConfig
    );
    const { token } = await resp.json();
    localStorage.setItem("token", token);

    history.push('/account/data');
  };

  return (
    <div>
      <div className="login-background">
        <form onSubmit={handleSubmit} method="GET">
          <h1 className="text-name">LOGIN</h1>
          <input
            className="form-user"
            type="text"
            placeholder="    Usuario"
            required
          />
          <input
            className="form-password"
            type="password"
            placeholder="    Contraseña"
            required
          />
          <button className="form-button" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};
