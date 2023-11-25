import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./state-default-textarea-false.module.css";

type StateDefaultTextareaFalseType = {
  iconJamIconsOutlineLogos?: string;
  text1?: string;
  iconJamIconsOutlineLogos1?: string;
  iconRight?: boolean;
  text?: boolean;
  iconLeft?: boolean;

  /** Style props */
  stateDefaultTextareaFalseWidth?: CSSProperties["width"];
  stateDefaultTextareaFalseBorderBottom?: CSSProperties["borderBottom"];
  stateDefaultTextareaFalseAlignSelf?: CSSProperties["alignSelf"];
  stateDefaultTextareaFalseBorder?: CSSProperties["border"];
  stateDefaultTextareaFalseBackgroundColor?: CSSProperties["backgroundColor"];
  stateDefaultTextareaFalseJustifyContent?: CSSProperties["justifyContent"];
  stateDefaultTextareaFalseMargin?: CSSProperties["margin"];
  stateDefaultTextareaFalsePosition?: CSSProperties["position"];
  stateDefaultTextareaFalseTop?: CSSProperties["top"];
  stateDefaultTextareaFalseLeft?: CSSProperties["left"];
  stateDefaultTextareaFalseZIndex?: CSSProperties["zIndex"];
  textColor?: CSSProperties["color"];
  textTextAlign?: CSSProperties["textAlign"];
  stateDefaultTextareaFalseOverflow?: CSSProperties["overflow"];
  stateDefaultTextareaFalseFlexShrink?: CSSProperties["flexShrink"];
};

const StateDefaultTextareaFalse: NextPage<StateDefaultTextareaFalseType> = ({
  iconJamIconsOutlineLogos,
  text1 = "Placeholder",
  iconJamIconsOutlineLogos1,
  iconRight = true,
  text = true,
  iconLeft = true,
  stateDefaultTextareaFalseWidth,
  stateDefaultTextareaFalseBorderBottom,
  stateDefaultTextareaFalseAlignSelf,
  stateDefaultTextareaFalseBorder,
  stateDefaultTextareaFalseBackgroundColor,
  stateDefaultTextareaFalseJustifyContent,
  stateDefaultTextareaFalseMargin,
  stateDefaultTextareaFalsePosition,
  stateDefaultTextareaFalseTop,
  stateDefaultTextareaFalseLeft,
  stateDefaultTextareaFalseZIndex,
  textColor,
  textTextAlign,
  stateDefaultTextareaFalseOverflow,
  stateDefaultTextareaFalseFlexShrink,
}) => {
  const stateDefaultTextareaFalseStyle: CSSProperties = useMemo(() => {
    return {
      width: stateDefaultTextareaFalseWidth,
      borderBottom: stateDefaultTextareaFalseBorderBottom,
      alignSelf: stateDefaultTextareaFalseAlignSelf,
      border: stateDefaultTextareaFalseBorder,
      backgroundColor: stateDefaultTextareaFalseBackgroundColor,
      justifyContent: stateDefaultTextareaFalseJustifyContent,
      margin: stateDefaultTextareaFalseMargin,
      position: stateDefaultTextareaFalsePosition,
      top: stateDefaultTextareaFalseTop,
      left: stateDefaultTextareaFalseLeft,
      zIndex: stateDefaultTextareaFalseZIndex,
      overflow: stateDefaultTextareaFalseOverflow,
      flexShrink: stateDefaultTextareaFalseFlexShrink,
    };
  }, [
    stateDefaultTextareaFalseWidth,
    stateDefaultTextareaFalseBorderBottom,
    stateDefaultTextareaFalseAlignSelf,
    stateDefaultTextareaFalseBorder,
    stateDefaultTextareaFalseBackgroundColor,
    stateDefaultTextareaFalseJustifyContent,
    stateDefaultTextareaFalseMargin,
    stateDefaultTextareaFalsePosition,
    stateDefaultTextareaFalseTop,
    stateDefaultTextareaFalseLeft,
    stateDefaultTextareaFalseZIndex,
    stateDefaultTextareaFalseOverflow,
    stateDefaultTextareaFalseFlexShrink,
  ]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: textColor,
      textAlign: textTextAlign,
    };
  }, [textColor, textTextAlign]);

  return (
    <div
      className={styles.statedefaultTextareafalse}
      style={stateDefaultTextareaFalseStyle}
    >
      {iconLeft && (
        <img
          className={styles.iconJamIconsOutlineL}
          alt=""
          src={iconJamIconsOutlineLogos}
        />
      )}
      {text && (
        <div className={styles.text} style={textStyle}>
          {text1}
        </div>
      )}
      {iconRight && (
        <img
          className={styles.iconJamIconsOutlineL}
          alt=""
          src={iconJamIconsOutlineLogos1}
        />
      )}
    </div>
  );
};

export default StateDefaultTextareaFalse;
