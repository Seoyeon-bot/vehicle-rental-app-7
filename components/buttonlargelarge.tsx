import type { NextPage } from "next";
import styles from "./buttonlargelarge.module.css";

type ButtonlargelargeType = {
  buttonText?: string;
};

const Buttonlargelarge: NextPage<ButtonlargelargeType> = ({
  buttonText = "Text",
}) => {
  return (
    <div className={styles.buttonlargelarge}>
      <div className={styles.buttonShape}>
        <div className={styles.buttonText}>{buttonText}</div>
      </div>
    </div>
  );
};

export default Buttonlargelarge;
