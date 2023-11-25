import type { NextPage } from "next";
import styles from "./link-footer-container.module.css";

type LinkFooterContainerType = {
  linkText?: string;
};

const LinkFooterContainer: NextPage<LinkFooterContainerType> = ({
  linkText = "Link / Footer",
}) => {
  return (
    <div className={styles.linkFooterContainer}>
      <a className={styles.linkfooter}>{linkText}</a>
    </div>
  );
};

export default LinkFooterContainer;
