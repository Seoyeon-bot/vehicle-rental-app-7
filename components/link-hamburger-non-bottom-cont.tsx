import type { NextPage } from "next";
import styles from "./link-hamburger-non-bottom-cont.module.css";

type LinkHamburgerNonBottomContType = {
  linkText?: string;
};

const LinkHamburgerNonBottomCont: NextPage<LinkHamburgerNonBottomContType> = ({
  linkText = "Link / Hamburger / Non-Bottom",
}) => {
  return (
    <div className={styles.linkHamburgerNonBottomCont}>
      <a className={styles.linkhamburgernonBottom}>{linkText}</a>
    </div>
  );
};

export default LinkHamburgerNonBottomCont;
