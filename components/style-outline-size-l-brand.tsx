import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./style-outline-size-l-brand.module.css";

type StyleOutlineSizeLBrandType = {
  iconJamIconsOutlineLogos?: string;
  text1?: string;
  iconJamIconsOutlineLogos1?: string;
  text?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;

  /** Style props */
  styleOutlineSizeLBrandMargin?: CSSProperties["margin"];
  styleOutlineSizeLBrandPosition?: CSSProperties["position"];
  styleOutlineSizeLBrandTop?: CSSProperties["top"];
  styleOutlineSizeLBrandLeft?: CSSProperties["left"];
  styleOutlineSizeLBrandBorderRadius?: CSSProperties["borderRadius"];
  styleOutlineSizeLBrandWidth?: CSSProperties["width"];
  styleOutlineSizeLBrandOverflow?: CSSProperties["overflow"];
  styleOutlineSizeLBrandFlexShrink?: CSSProperties["flexShrink"];
  styleOutlineSizeLBrandZIndex?: CSSProperties["zIndex"];
  styleOutlineSizeLBrandHeight?: CSSProperties["height"];
  styleOutlineSizeLBrandJustifyContent?: CSSProperties["justifyContent"];
  styleOutlineSizeLBrandAlignSelf?: CSSProperties["alignSelf"];
  textContainerJustifyContent?: CSSProperties["justifyContent"];
  textContainerOpacity?: CSSProperties["opacity"];
};

const StyleOutlineSizeLBrand: NextPage<StyleOutlineSizeLBrandType> = ({
  iconJamIconsOutlineLogos,
  text1 = "Button Text",
  iconJamIconsOutlineLogos1,
  text = true,
  iconLeft = true,
  iconRight = false,
  styleOutlineSizeLBrandMargin,
  styleOutlineSizeLBrandPosition,
  styleOutlineSizeLBrandTop,
  styleOutlineSizeLBrandLeft,
  styleOutlineSizeLBrandBorderRadius,
  styleOutlineSizeLBrandWidth,
  styleOutlineSizeLBrandOverflow,
  styleOutlineSizeLBrandFlexShrink,
  styleOutlineSizeLBrandZIndex,
  styleOutlineSizeLBrandHeight,
  styleOutlineSizeLBrandJustifyContent,
  styleOutlineSizeLBrandAlignSelf,
  textContainerJustifyContent,
  textContainerOpacity,
}) => {
  const styleOutlineSizeLBrandStyle: CSSProperties = useMemo(() => {
    return {
      margin: styleOutlineSizeLBrandMargin,
      position: styleOutlineSizeLBrandPosition,
      top: styleOutlineSizeLBrandTop,
      left: styleOutlineSizeLBrandLeft,
      borderRadius: styleOutlineSizeLBrandBorderRadius,
      width: styleOutlineSizeLBrandWidth,
      overflow: styleOutlineSizeLBrandOverflow,
      flexShrink: styleOutlineSizeLBrandFlexShrink,
      zIndex: styleOutlineSizeLBrandZIndex,
      height: styleOutlineSizeLBrandHeight,
      justifyContent: styleOutlineSizeLBrandJustifyContent,
      alignSelf: styleOutlineSizeLBrandAlignSelf,
    };
  }, [
    styleOutlineSizeLBrandMargin,
    styleOutlineSizeLBrandPosition,
    styleOutlineSizeLBrandTop,
    styleOutlineSizeLBrandLeft,
    styleOutlineSizeLBrandBorderRadius,
    styleOutlineSizeLBrandWidth,
    styleOutlineSizeLBrandOverflow,
    styleOutlineSizeLBrandFlexShrink,
    styleOutlineSizeLBrandZIndex,
    styleOutlineSizeLBrandHeight,
    styleOutlineSizeLBrandJustifyContent,
    styleOutlineSizeLBrandAlignSelf,
  ]);

  const textContainerStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: textContainerJustifyContent,
      opacity: textContainerOpacity,
    };
  }, [textContainerJustifyContent, textContainerOpacity]);

  return (
    <div
      className={styles.styleoutlineSizelBrand}
      style={styleOutlineSizeLBrandStyle}
    >
      {iconLeft && (
        <img
          className={styles.iconJamIconsOutlineL}
          alt=""
          src={iconJamIconsOutlineLogos}
        />
      )}
      {text && (
        <div className={styles.textContainer} style={textContainerStyle}>
          <div className={styles.buttonText}>{text1}</div>
        </div>
      )}
      {iconRight && (
        <img
          className={styles.iconJamIconsOutlineL1}
          alt=""
          src={iconJamIconsOutlineLogos1}
        />
      )}
    </div>
  );
};

export default StyleOutlineSizeLBrand;
