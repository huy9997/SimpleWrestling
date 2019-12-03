import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.socialMedia}>
        <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
        <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
      </div>
    </div>
  );
};

const styles = {
  footer: {
    display: "block",
    bottom: 0,
    width: "100%",
    height: 100,
    backgroundColor: "#3f51b5",
    opacity: 0.5,
    flexDirection: "row",
    justifyContent: "center"
  },
  socialMedia: {
    left: 0
  },
  icon: {
    height: "80%"
  }
};

export default Footer;
