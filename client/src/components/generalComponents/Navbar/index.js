import React from "react";
import Logo from "../Logo";
import Button from "../Button";


const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Logo
        text="Simple Wrestling"
        side="left"
        fontFamily="Great Vibes"
        fontColor="#fff"
        size="medium"
      />
      <Button
        text="Tournaments"
        color={styles.navbar.backgroundColor}
        fontColor="#fff"
        href="/tournament"
        size="medium"
      />
      <div style={{ justifyContent: "space-around", height: "auto", float: "right", display: 'inline-block', verticalAlign: 'middle' }}>
        <Button
          text="Sign Up"
          color={styles.navbar.backgroundColor}
          fontColor="#fff"
          fontFamily='Old Standard TT'
          url="/signup"
            size="medium"
        />
        <Button
          text="Login"
          color={styles.navbar.backgroundColor}
          fontColor="#fff"
          fontFamily='Old Standard TT'
          url="/login"
          size="medium"
        />
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    flexDirection: "row",
    top: 0,
    width: "100%",
    height: 50,
    level: 3,
    backgroundColor: "#3f51b5",
      borderBottomStyle: "groove"
  }
};

export default Navbar;
