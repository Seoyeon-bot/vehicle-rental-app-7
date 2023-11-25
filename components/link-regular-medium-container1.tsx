import type { NextPage } from "next";
import styles from "./link-regular-medium-container1.module.css";

type LinkRegularMediumContainer1Type = {
  linkText?: string;
};

const LinkRegularMediumContainer1: NextPage<
  LinkRegularMediumContainer1Type
> = ({ linkText = "Link / Regular/Medium" }) => {
  return (
    <div className={styles.linkRegularMediumContainer}>
      <a className={styles.linkregularmedium}>{linkText}</a>
    </div>
  );
};

export default LinkRegularMediumContainer1;
