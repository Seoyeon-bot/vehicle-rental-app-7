import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./buttonsmallsmall1.module.css";

type Buttonsmallsmall1Type = {
  buttonText?: string;

  /** Style props */
  buttonsmallsmallCursor?: CSSProperties["cursor"];
  buttonsmallsmallBorder?: CSSProperties["border"];
  buttonsmallsmallPadding?: CSSProperties["padding"];
  buttonsmallsmallBackgroundColor?: CSSProperties["backgroundColor"];
  buttonsmallsmallBorderRadius?: CSSProperties["borderRadius"];
  buttonShapeBorderRadius?: CSSProperties["borderRadius"];
};

const Buttonsmallsmall1: NextPage<Buttonsmallsmall1Type> = ({
  buttonText = "Text",
  buttonsmallsmallCursor,
  buttonsmallsmallBorder,
  buttonsmallsmallPadding,
  buttonsmallsmallBackgroundColor,
  buttonsmallsmallBorderRadius,
  buttonShapeBorderRadius,
}) => {
  const buttonsmallsmall2Style: CSSProperties = useMemo(() => {
    return {
      cursor: buttonsmallsmallCursor,
      border: buttonsmallsmallBorder,
      padding: buttonsmallsmallPadding,
      backgroundColor: buttonsmallsmallBackgroundColor,
      borderRadius: buttonsmallsmallBorderRadius,
    };
  }, [
    buttonsmallsmallCursor,
    buttonsmallsmallBorder,
    buttonsmallsmallPadding,
    buttonsmallsmallBackgroundColor,
    buttonsmallsmallBorderRadius,
  ]);

  const buttonShape1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: buttonShapeBorderRadius,
    };
  }, [buttonShapeBorderRadius]);

  return (
    <div className={styles.buttonsmallsmall} style={buttonsmallsmall2Style}>
      <div className={styles.buttonShape} style={buttonShape1Style}>
        <div className={styles.buttonText}>{buttonText}</div>
      </div>
    </div>
  );
};

export default Buttonsmallsmall1;
