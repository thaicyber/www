import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import styles from "./Navigation.module.scss";

const Navigation = ({ isOpen = false }) => {
  return (
    <div className={styles.navigation_bar} id="navi">
      <Button.Navigation compact={!isOpen} />
      <Button.Navigation compact={!isOpen} />
      <Button.Navigation compact={!isOpen} />
      <Button.Navigation compact={!isOpen} />
    </div>
  );
};

export default Navigation;

Navigation.propTypes = {
  className: PropTypes.string
};
Navigation.defaultProps = {
  className: ""
};