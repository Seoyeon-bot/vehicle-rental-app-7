import type { NextPage } from "next";
import styles from "./hamburger-icon.module.css";

const HamburgerIcon: NextPage = () => {
  return (
    <div className={styles.hamburgerIcon}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default HamburgerIcon;
