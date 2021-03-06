/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import SvgPhoneProfile from "assets/icons/SvgPhoneProfile";
import SvgUser from "assets/icons/SvgUser";
import SvgSearch from "assets/icons/SvgSearch";
import SvgClose from "assets/icons/SvgClose";
import SvgPhone from "assets/icons/SvgPhone";
import SvgEmail from "assets/icons/SvgEmail";
import SvgArrow from "assets/icons/SvgArrow";
import SvgClock from "assets/icons/SvgClock";
import SvgSave from "assets/icons/SvgSave";
import SvgEdit from "assets/icons/SvgEdit";
import SvgDelete from "assets/icons/SvgDelete";
import SvgPublish from "assets/icons/SvgPublish";
import SvgLocation from "assets/icons/SvgLocation";
import SvgWebsite from "assets/icons/SvgWebsite";
import SvgEmailProfile from "assets/icons/SvgEmailProfile";
import styles from "./Icon.module.scss";

// TODO: This setup is disgusting... + add fill props for icons
const Icon = ({ className, name, ...props }) => {
  // console.log(className);
  return (
    <div className={`${className} ${styles.icon}`}>
      {name === "user" && <SvgUser {...props} />}
      {name === "search" && <SvgSearch {...props} />}
      {name === "close" && <SvgClose {...props} />}
      {name === "phone" && <SvgPhone {...props} />}
      {name === "email" && <SvgEmail {...props} />}
      {name === "arrow" && <SvgArrow {...props} />}
      {name === "clock" && <SvgClock {...props} />}
      {name === "delete" && <SvgDelete {...props} />}
      {name === "edit" && <SvgEdit {...props} />}
      {name === "save" && <SvgSave {...props} />}
      {name === "phone-profile" && <SvgPhoneProfile {...props} />}
      {name === "email-profile" && <SvgEmailProfile {...props} />}
      {name === "publish" && <SvgPublish {...props} />}
      {name === "location" && <SvgLocation {...props} />}
      {name === "website" && <SvgWebsite {...props} />}
    </div>
  );
};

export default Icon;

Icon.propTypes = {
  className: PropTypes.string
};
Icon.defaultProps = {
  className: ""
};
