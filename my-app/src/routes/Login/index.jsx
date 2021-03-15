import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import Input from "./atoms/Input";
import "./styles.css";

const Login = () => {
  const history = useHistory();
  const [state, setState] = useState({
    login: "",
    password: "",
    error_message: "",
  });

  const { login, password, error_message } = state;

  const successCallback = () => {
    sessionStorage.setItem("logged_in", true);
    history.push("/profile");
  };

  const handleClick = () => {
    login === "Admin" && password === "12345"
      ? successCallback()
      : setState((prevState) => ({
          ...prevState,
          error_message: "Invalid login and/or password",
        }));
  };

  return (
    <div className="login">
      <Input
        label="Login"
        value={login}
        type="email"
        autoFocus
        handleChange={(event) =>
          setState((prevState) => ({
            ...prevState,
            error_message: "",
            login: event.target.value,
          }))
        }
      />
      <Input
        label="Password"
        value={password}
        type="password"
        handleChange={(event) =>
          setState((prevState) => ({
            ...prevState,
            error_message: "",
            password: event.target.value,
          }))
        }
      />
      {error_message ? <p className="login__error">{error_message}</p> : null}
      <Button
        onClick={handleClick}
        color="default"
        variant="outlined"
        size="medium"
        fullWidth
      >
        Login
      </Button>
    </div>
  );
};

export default Login;
