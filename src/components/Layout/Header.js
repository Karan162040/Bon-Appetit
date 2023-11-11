import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImg from "../../Assets/Meals_image.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Bon Appetit</h2>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Food on a Table" />
      </div>
    </Fragment>
  );
};

export default Header;
