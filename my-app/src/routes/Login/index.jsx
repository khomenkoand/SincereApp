import React from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Input from "./atoms/Input";
import { setLogin, setPassword, setError } from "../../actions";
import { getLogin, getPassword, getError } from "../../selectors";
import styles from "./Login.module.css";

const Login = ({ login, password, error, setError, setLogin, setPassword }) => {
  const history = useHistory();

  const successCallback = () => {
    sessionStorage.setItem("logged_in", true);
    setError("");
    history.push("/profile");
  };

  const handleClick = () => {
    login === "Admin" && password === "12345"
      ? successCallback()
      : setError("Invalid login and/or password");
  };

  return (
    <div className={styles.login}>
      <Input
        label="Login"
        value={login}
        type="email"
        autoFocus
        handleChange={(event) => setLogin(event.target.value)}
      />
      <Input
        label="Password"
        value={password}
        type="password"
        handleChange={(event) => setPassword(event.target.value)}
      />
      {error ? <p className={styles.login__error}>{error}</p> : null}
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

const mapStateToProps = (state) => ({
  login: getLogin(state),
  password: getPassword(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  setLogin: (value) => dispatch(setLogin(value)),
  setPassword: (value) => dispatch(setPassword(value)),
  setError: (value) => dispatch(setError(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
