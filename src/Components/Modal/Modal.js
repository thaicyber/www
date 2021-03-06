/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Modal as MUIModal } from "@material-ui/core";
import { Button, Icon } from "components";
import styles from "./Modal.module.scss";

// eslint-disable-next-line react/prop-types
const Modal = ({ children, height, open, onClose, width }) => {
  return (
    <MUIModal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={onClose}
    >
      <div className={styles.modal_content}>
        <Button className={styles.button_clear} onClick={onClose}>
          <Icon className={styles.close_icon} name="close" onClick={onClose} />
        </Button>
        {children}
      </div>
    </MUIModal>
  );
};

export default Modal;

Modal.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  open: PropTypes.bool,
  width: PropTypes.string
};
Modal.defaultProps = {
  className: "",
  height: "600px",
  open: false,
  width: "800px"
};
