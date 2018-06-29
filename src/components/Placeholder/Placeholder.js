import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Placeholder.module.scss";
import { glass } from "global/assets";
import { returnRandomArrayElement } from "global/utilities";

export default class Placeholder extends Component {
  render() {
    let { says, ...rest } = this.props;
    return (
      <div className={styles.div} {...rest}>
        <img src={glass} alt="Deer Sketch" />
        <span>{returnRandomArrayElement(says)}</span>
      </div>
    );
  }
}
Placeholder.defaultProps = {
  says: [
    "nothing to see here",
    "nothing here, explorer",
    "lonely",
    "keep looking",
    "you found a reason to look deeper",
    "beautiful empty"
  ]
};
Placeholder.propTypes = {
  says: PropTypes.arrayOf(PropTypes.string)
};
