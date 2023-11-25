import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import StateDefaultTextareaFalse from "./state-default-textarea-false";
import styles from "./textarea-false-error-false.module.css";

type TextareaFalseErrorFalseType = {
  label1?: string;
  labelIconUrl?: string;
  labelIconImageUrl?: string;
  description1?: string;
  description?: boolean;
  label?: boolean;
  text1?: string;
  iconRight?: boolean;
  text?: boolean;
  iconLeft?: boolean;

  /** Style props */
  textareaFalseErrorFalseWidth?: CSSProperties["width"];
  textareaFalseErrorFalseMargin?: CSSProperties["margin"];
  textareaFalseErrorFalsePosition?: CSSProperties["position"];
  textareaFalseErrorFalseTop?: CSSProperties["top"];
  textareaFalseErrorFalseLeft?: CSSProperties["left"];
  textareaFalseErrorFalseHeight?: CSSProperties["height"];
  textareaFalseErrorFalseZIndex?: CSSProperties["zIndex"];
};

const TextareaFalseErrorFalse: NextPage<TextareaFalseErrorFalseType> = ({
  label1 = "Label Name",
  labelIconUrl,
  labelIconImageUrl,
  description1 = "Helper text goes here",
  description = true,
  label = true,
  textareaFalseErrorFalseWidth,
  textareaFalseErrorFalseMargin,
  textareaFalseErrorFalsePosition,
  textareaFalseErrorFalseTop,
  textareaFalseErrorFalseLeft,
  textareaFalseErrorFalseHeight,
  textareaFalseErrorFalseZIndex,
  text1,
  iconRight,
  text,
  iconLeft,
}) => {
  const textareaFalseErrorFalseStyle: CSSProperties = useMemo(() => {
    return {
      width: textareaFalseErrorFalseWidth,
      margin: textareaFalseErrorFalseMargin,
      position: textareaFalseErrorFalsePosition,
      top: textareaFalseErrorFalseTop,
      left: textareaFalseErrorFalseLeft,
      height: textareaFalseErrorFalseHeight,
      zIndex: textareaFalseErrorFalseZIndex,
    };
  }, [
    textareaFalseErrorFalseWidth,
    textareaFalseErrorFalseMargin,
    textareaFalseErrorFalsePosition,
    textareaFalseErrorFalseTop,
    textareaFalseErrorFalseLeft,
    textareaFalseErrorFalseHeight,
    textareaFalseErrorFalseZIndex,
  ]);

  return (
    <div
      className={styles.textareafalseErrorfalse}
      style={textareaFalseErrorFalseStyle}
    >
      <div className={styles.labelAndField}>
        {label && <div className={styles.label}>{label1}</div>}
        <StateDefaultTextareaFalse
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--search.svg"
          text1="Placeholder"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--search.svg"
          iconRight={false}
          text
          iconLeft={false}
          stateDefaultTextareaFalseWidth="unset"
          stateDefaultTextareaFalseBorderBottom="1px solid var(--coolgray-30)"
          stateDefaultTextareaFalseAlignSelf="stretch"
          stateDefaultTextareaFalseBorder="unset"
          stateDefaultTextareaFalseBackgroundColor="#f2f4f8"
          stateDefaultTextareaFalseJustifyContent="flex-start"
          stateDefaultTextareaFalseMargin="unset"
          stateDefaultTextareaFalsePosition="unset"
          stateDefaultTextareaFalseTop="unset"
          stateDefaultTextareaFalseLeft="unset"
          stateDefaultTextareaFalseZIndex="unset"
          textColor="#697077"
          textTextAlign="left"
          stateDefaultTextareaFalseOverflow="unset"
          stateDefaultTextareaFalseFlexShrink="unset"
        />
      </div>
      {description && <div className={styles.description}>{description1}</div>}
    </div>
  );
};

export default TextareaFalseErrorFalse;
