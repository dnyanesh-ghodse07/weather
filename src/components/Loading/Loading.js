import React from "react";
import classes from "./Loading.module.css";
import Spinner from "../../assets/Spinner.svg";

function Loading() {
  return (
    <div className={classes.loading}>
      <img src={Spinner} alt="loading" />
    </div>
  );
}

export default Loading;
