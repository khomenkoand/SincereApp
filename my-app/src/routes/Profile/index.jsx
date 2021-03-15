import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Button } from "@material-ui/core";
import styles from "./Profile.module.css";

const Profile = () => {
  const history = useHistory();
  useEffect(() => {
    const logged_in = sessionStorage.getItem("logged_in");
    !logged_in && history.push("/login");
  });

  const handleClick = () => {
    sessionStorage.removeItem("logged_in");
    history.push("/login");
  };

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}></div>
      <div>
        <p>Mike</p>
        <p>Tier: Legendary</p>
        <Button
          onClick={handleClick}
          color="default"
          variant="outlined"
          size="small"
          fullWidth
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
