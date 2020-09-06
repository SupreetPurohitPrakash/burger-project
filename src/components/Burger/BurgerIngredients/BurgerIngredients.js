import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredients.css";
import burgerTop from "../../../assets/burger-svg/burger-top.svg";
import burgerBottom from "../../../assets/burger-svg/burger-bottom.svg";
import bacon from "../../../assets/burger-svg/bacon.svg";
import meat from "../../../assets/burger-svg/meat.svg";
import salad from "../../../assets/burger-svg/salad.svg";
import cheese from "../../../assets/burger-svg/cheese.svg";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <img src={burgerBottom} className={classes.BurgerSvg} />;
        break;
      case "bread-top":
        ingredient = <img src={burgerTop} className={classes.BurgerSvg} />;
        break;
      case "meat":
        ingredient = <img src={meat} className={classes.BurgerSvg} />;
        break;
      case "cheese":
        ingredient = <img src={cheese} className={classes.BurgerSvg} />;
        break;
      case "bacon":
        ingredient = <img src={bacon} className={classes.BurgerSvg} />;
        break;
      case "salad":
        ingredient = <img src={salad} className={classes.BurgerSvg} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
