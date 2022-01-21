import React from "react";
import classes from "./Header.module.css";
// import { Img } from "./Uma.jpeg";

const Header = () => {
  const id = new Date().getTime().toString();
  console.log(id);
  return (
    <div>
      <div className={classes.heading}>
        <h1>User Profile</h1>
      </div>
      <div className={classes.container}>
        <div className={classes.img}>
          <img
            src={"profile_pic.jpg"}
            alt="User Picture"
            className={classes.picture}
          />
        </div>
        <div className={classes.username}>
          <h2>Umarani</h2>
          <h3>Patient ID :{id}</h3>
          <h3>Primary Care Center :</h3>
        </div>
        <div className={classes.username}>
          <h2>Age</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
