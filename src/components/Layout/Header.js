import React, { Fragment } from "react";
import classes from "./Header.module.css";
import reactfood from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Bulkesh's Kitchen</h1>
               <HeaderCartButton onClickHandler={props.showCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={reactfood} alt="A table full of food!!" />
            </div>
        </Fragment>
    )
}

export default Header;
