import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./buttonsmallsmall.module.css";

type ButtonsmallsmallType = {
  displayText?: string;

  /** Style props */
  buttonsmallsmallCursor?: CSSProperties["cursor"];
  buttonsmallsmallBorder?: CSSProperties["border"];
  buttonsmallsmallPadding?: CSSProperties["padding"];
  buttonsmallsmallBackgroundColor?: CSSProperties["backgroundColor"];
};

const Buttonsmallsmall: NextPage<ButtonsmallsmallType> = ({
  displayText,
  buttonsmallsmallCursor,
  buttonsmallsmallBorder,
  buttonsmallsmallPadding,
  buttonsmallsmallBackgroundColor,
}) => {
  const buttonsmallsmall1Style: CSSProperties = useMemo(() => {
    return {
      cursor: buttonsmallsmallCursor,
      border: buttonsmallsmallBorder,
      padding: buttonsmallsmallPadding,
      backgroundColor: buttonsmallsmallBackgroundColor,
    };
  }, [
    buttonsmallsmallCursor,
    buttonsmallsmallBorder,
    buttonsmallsmallPadding,
    buttonsmallsmallBackgroundColor,
  ]);

  return (
    <div className={styles.buttonsmallsmall} style={buttonsmallsmall1Style}>
      <div className={styles.buttonShape}>
        <div className={styles.buttonText}>{displayText}</div>
      </div>
    </div>
  );
};

export default Buttonsmallsmall;
