import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.socialMedia}>
        <FontAwesomeIcon icon={faFacebook} size="lg" />
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </div>
    </div>
  );
};

const styles = {
  footer: {
    display: "block",
    bottom: 0,
    width: "100%",
    height: "10%",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center"
  },
  socialMedia: {
    left: 0,
    width: "30%",
    justifyContent: 'space-between'
  },
  icon: {
    height: "80%",
    marginLeft: 5,
    marginRight: 5
  }
};

export default Footer;
