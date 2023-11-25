import type { NextPage } from "next";
import styles from "./link-hamburger-bottom-containe.module.css";

type LinkHamburgerBottomContaineType = {
  linkText?: string;
};

const LinkHamburgerBottomContaine: NextPage<
  LinkHamburgerBottomContaineType
> = ({ linkText = "Link / Hamburger / Bottom" }) => {
  return (
    <div className={styles.linkHamburgerBottomContaine}>
      <a className={styles.linkhamburgerbottom}>{linkText}</a>
    </div>
  );
};

export default LinkHamburgerBottomContaine;
