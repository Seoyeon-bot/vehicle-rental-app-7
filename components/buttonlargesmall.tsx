import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./buttonlargesmall.module.css";

type ButtonlargesmallType = {
  buttonText?: string;

  /** Style props */
  buttonlargesmallCursor?: CSSProperties["cursor"];
  buttonlargesmallBorder?: CSSProperties["border"];
  buttonlargesmallPadding?: CSSProperties["padding"];
  buttonlargesmallBackgroundColor?: CSSProperties["backgroundColor"];
};

const Buttonlargesmall: NextPage<ButtonlargesmallType> = ({
  buttonText = "Text",
  buttonlargesmallCursor,
  buttonlargesmallBorder,
  buttonlargesmallPadding,
  buttonlargesmallBackgroundColor,
}) => {
  const buttonlargesmallStyle: CSSProperties = useMemo(() => {
    return {
      cursor: buttonlargesmallCursor,
      border: buttonlargesmallBorder,
      padding: buttonlargesmallPadding,
      backgroundColor: buttonlargesmallBackgroundColor,
    };
  }, [
    buttonlargesmallCursor,
    buttonlargesmallBorder,
    buttonlargesmallPadding,
    buttonlargesmallBackgroundColor,
  ]);

  return (
    <div className={styles.buttonlargesmall} style={buttonlargesmallStyle}>
      <div className={styles.buttonShape}>
        <div className={styles.buttonText}>{buttonText}</div>
      </div>
    </div>
  );
};

export default Buttonlargesmall;
