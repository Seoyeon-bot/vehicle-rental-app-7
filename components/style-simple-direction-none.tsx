import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./style-simple-direction-none.module.css";

type StyleSimpleDirectionNoneType = {
  text?: string;
  showLabel?: boolean;

  /** Style props */
  styleSimpleDirectionNoneMargin?: CSSProperties["margin"];
  styleSimpleDirectionNonePosition?: CSSProperties["position"];
  styleSimpleDirectionNoneTop?: CSSProperties["top"];
  styleSimpleDirectionNoneLeft?: CSSProperties["left"];
  styleSimpleDirectionNoneBorderRadius?: CSSProperties["borderRadius"];
  styleSimpleDirectionNoneBackgroundColor?: CSSProperties["backgroundColor"];
  styleSimpleDirectionNoneBorder?: CSSProperties["border"];
  styleSimpleDirectionNoneBoxSizing?: CSSProperties["boxSizing"];
  styleSimpleDirectionNoneWidth?: CSSProperties["width"];
  styleSimpleDirectionNoneHeight?: CSSProperties["height"];
  styleSimpleDirectionNoneMixBlendMode?: CSSProperties["mixBlendMode"];
  styleSimpleDirectionNoneZIndex?: CSSProperties["zIndex"];
  styleSimpleDirectionNoneJustifyContent?: CSSProperties["justifyContent"];
  styleSimpleDirectionNoneBoxShadow?: CSSProperties["boxShadow"];
  styleSimpleDirectionNoneOverflow?: CSSProperties["overflow"];
  styleSimpleDirectionNoneFlexShrink?: CSSProperties["flexShrink"];
  labelColor?: CSSProperties["color"];
  labelAlignSelf?: CSSProperties["alignSelf"];
  labelWhiteSpace?: CSSProperties["whiteSpace"];
  labelWidth?: CSSProperties["width"];
  labelFlexShrink?: CSSProperties["flexShrink"];
};

const StyleSimpleDirectionNone: NextPage<StyleSimpleDirectionNoneType> = ({
  text = "XXX",
  showLabel,
  styleSimpleDirectionNoneMargin,
  styleSimpleDirectionNonePosition,
  styleSimpleDirectionNoneTop,
  styleSimpleDirectionNoneLeft,
  styleSimpleDirectionNoneBorderRadius,
  styleSimpleDirectionNoneBackgroundColor,
  styleSimpleDirectionNoneBorder,
  styleSimpleDirectionNoneBoxSizing,
  styleSimpleDirectionNoneWidth,
  styleSimpleDirectionNoneHeight,
  styleSimpleDirectionNoneMixBlendMode,
  styleSimpleDirectionNoneZIndex,
  styleSimpleDirectionNoneJustifyContent,
  styleSimpleDirectionNoneBoxShadow,
  styleSimpleDirectionNoneOverflow,
  styleSimpleDirectionNoneFlexShrink,
  labelColor,
  labelAlignSelf,
  labelWhiteSpace,
  labelWidth,
  labelFlexShrink,
}) => {
  const styleSimpleDirectionNoneStyle: CSSProperties = useMemo(() => {
    return {
      margin: styleSimpleDirectionNoneMargin,
      position: styleSimpleDirectionNonePosition,
      top: styleSimpleDirectionNoneTop,
      left: styleSimpleDirectionNoneLeft,
      borderRadius: styleSimpleDirectionNoneBorderRadius,
      backgroundColor: styleSimpleDirectionNoneBackgroundColor,
      border: styleSimpleDirectionNoneBorder,
      boxSizing: styleSimpleDirectionNoneBoxSizing,
      width: styleSimpleDirectionNoneWidth,
      height: styleSimpleDirectionNoneHeight,
      mixBlendMode: styleSimpleDirectionNoneMixBlendMode,
      zIndex: styleSimpleDirectionNoneZIndex,
      justifyContent: styleSimpleDirectionNoneJustifyContent,
      boxShadow: styleSimpleDirectionNoneBoxShadow,
      overflow: styleSimpleDirectionNoneOverflow,
      flexShrink: styleSimpleDirectionNoneFlexShrink,
    };
  }, [
    styleSimpleDirectionNoneMargin,
    styleSimpleDirectionNonePosition,
    styleSimpleDirectionNoneTop,
    styleSimpleDirectionNoneLeft,
    styleSimpleDirectionNoneBorderRadius,
    styleSimpleDirectionNoneBackgroundColor,
    styleSimpleDirectionNoneBorder,
    styleSimpleDirectionNoneBoxSizing,
    styleSimpleDirectionNoneWidth,
    styleSimpleDirectionNoneHeight,
    styleSimpleDirectionNoneMixBlendMode,
    styleSimpleDirectionNoneZIndex,
    styleSimpleDirectionNoneJustifyContent,
    styleSimpleDirectionNoneBoxShadow,
    styleSimpleDirectionNoneOverflow,
    styleSimpleDirectionNoneFlexShrink,
  ]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
      alignSelf: labelAlignSelf,
      whiteSpace: labelWhiteSpace,
      width: labelWidth,
      flexShrink: labelFlexShrink,
    };
  }, [
    labelColor,
    labelAlignSelf,
    labelWhiteSpace,
    labelWidth,
    labelFlexShrink,
  ]);

  return (
    <div
      className={styles.stylesimpleDirectionnone}
      style={styleSimpleDirectionNoneStyle}
    >
      {showLabel && (
        <div className={styles.label} style={labelStyle}>
          {text}
        </div>
      )}
    </div>
  );
};

export default StyleSimpleDirectionNone;
