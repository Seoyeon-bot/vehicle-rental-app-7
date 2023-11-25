import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./containerfooter.module.css";

type ContainerfooterType = {
  thumbsupDesign?: string;
  imageourLogo?: string;
  linkfooter?: string;

  /** Style props */
  containerfooterHeight?: CSSProperties["height"];
  containerfooterFlexShrink?: CSSProperties["flexShrink"];
  textFooterContainerTextDecoration?: CSSProperties["textDecoration"];
  textFooterContainerWidth?: CSSProperties["width"];
  textFooterContainerOpacity?: CSSProperties["opacity"];
  textfooterDisplay?: CSSProperties["display"];
  textfooterAlignItems?: CSSProperties["alignItems"];
  textfooterWidth?: CSSProperties["width"];
  textfooterFlexShrink?: CSSProperties["flexShrink"];
  textfooterFlex?: CSSProperties["flex"];
  borrowOurCarsMargin?: CSSProperties["margin"];
  thumbsupDesignMargin?: CSSProperties["margin"];
  thumbsupDesignDisplay?: CSSProperties["display"];
  thumbsupDesignFlexDirection?: CSSProperties["flexDirection"];
  thumbsupDesignAlignItems?: CSSProperties["alignItems"];
  thumbsupDesignJustifyContent?: CSSProperties["justifyContent"];
  ourLogoContainerDisplay?: CSSProperties["display"];
  ourLogoContainerFlexDirection?: CSSProperties["flexDirection"];
  ourLogoContainerAlignItems?: CSSProperties["alignItems"];
  ourLogoContainerJustifyContent?: CSSProperties["justifyContent"];
  ourLogoContainerPosition?: CSSProperties["position"];
  ourLogoContainerWidth?: CSSProperties["width"];
  ourLogoContainerHeight?: CSSProperties["height"];
  ourLogoContainerObjectFit?: CSSProperties["objectFit"];
  imageourLogoIconPosition?: CSSProperties["position"];
  imageourLogoIconWidth?: CSSProperties["width"];
  imageourLogoIconHeight?: CSSProperties["height"];
  imageourLogoIconObjectFit?: CSSProperties["objectFit"];
  imageourLogoIconDisplay?: CSSProperties["display"];
  imageourLogoIconFlexDirection?: CSSProperties["flexDirection"];
  imageourLogoIconAlignItems?: CSSProperties["alignItems"];
  imageourLogoIconJustifyContent?: CSSProperties["justifyContent"];
  imageourLogoIconPadding?: CSSProperties["padding"];
  imageourLogoIconBoxSizing?: CSSProperties["boxSizing"];
  linkFooterContainerFlexDirection?: CSSProperties["flexDirection"];
  linkFooterContainerPadding?: CSSProperties["padding"];
  linkFooterContainerBoxSizing?: CSSProperties["boxSizing"];
  linkFooterContainerTextDecoration?: CSSProperties["textDecoration"];
  linkFooterContainerPosition?: CSSProperties["position"];
  linkFooterContainerFontSize?: CSSProperties["fontSize"];
  linkFooterContainerLetterSpacing?: CSSProperties["letterSpacing"];
  linkFooterContainerLineHeight?: CSSProperties["lineHeight"];
  linkFooterContainerFontWeight?: CSSProperties["fontWeight"];
  linkFooterContainerFontFamily?: CSSProperties["fontFamily"];
  linkFooterContainerColor?: CSSProperties["color"];
  linkFooterContainerTextAlign?: CSSProperties["textAlign"];
  linkFooterContainerWidth?: CSSProperties["width"];
  linkFooterContainerFlexShrink?: CSSProperties["flexShrink"];
  linkfooterTextDecoration?: CSSProperties["textDecoration"];
  linkfooterPosition?: CSSProperties["position"];
  linkfooterFontSize?: CSSProperties["fontSize"];
  linkfooterLetterSpacing?: CSSProperties["letterSpacing"];
  linkfooterLineHeight?: CSSProperties["lineHeight"];
  linkfooterFontWeight?: CSSProperties["fontWeight"];
  linkfooterFontFamily?: CSSProperties["fontFamily"];
  linkfooterColor?: CSSProperties["color"];
  linkfooterTextAlign?: CSSProperties["textAlign"];
  linkfooterWidth?: CSSProperties["width"];
  linkfooterFlexShrink?: CSSProperties["flexShrink"];
  linkfooterCursor?: CSSProperties["cursor"];
  linkfooterBorder?: CSSProperties["border"];
  linkfooterPadding?: CSSProperties["padding"];
  linkfooterBackgroundColor?: CSSProperties["backgroundColor"];
  linkfooterFlexDirection?: CSSProperties["flexDirection"];
  buttonsmallsmallCursor?: CSSProperties["cursor"];
  buttonsmallsmallBorder?: CSSProperties["border"];
  buttonsmallsmallPadding?: CSSProperties["padding"];
  buttonsmallsmallBackgroundColor?: CSSProperties["backgroundColor"];
  buttonsmallsmallFlexDirection?: CSSProperties["flexDirection"];
  buttonsmallsmallAlignItems?: CSSProperties["alignItems"];
  buttonsmallsmallJustifyContent?: CSSProperties["justifyContent"];
  buttonsmallsmallBoxSizing?: CSSProperties["boxSizing"];
  buttonsmallsmallWidth?: CSSProperties["width"];
  buttonsmallsmallHeight?: CSSProperties["height"];
  buttonShapeBorder?: CSSProperties["border"];
  buttonShapeBoxSizing?: CSSProperties["boxSizing"];
  buttonShapeWidth?: CSSProperties["width"];
  buttonShapeHeight?: CSSProperties["height"];
  buttonShapeFlexDirection?: CSSProperties["flexDirection"];
  buttonShapeAlignItems?: CSSProperties["alignItems"];
  buttonShapeJustifyContent?: CSSProperties["justifyContent"];
  buttonShapeAlignSelf?: CSSProperties["alignSelf"];
  buttonShapeFlex?: CSSProperties["flex"];
  buttonShapePosition?: CSSProperties["position"];
  buttonShapeFontSize?: CSSProperties["fontSize"];
  buttonShapeLetterSpacing?: CSSProperties["letterSpacing"];
  buttonShapeLineHeight?: CSSProperties["lineHeight"];
  buttonShapeFontWeight?: CSSProperties["fontWeight"];
  buttonShapeFontFamily?: CSSProperties["fontFamily"];
  buttonShapeColor?: CSSProperties["color"];
  buttonShapeTextAlign?: CSSProperties["textAlign"];
};

const Containerfooter: NextPage<ContainerfooterType> = ({
  thumbsupDesign,
  imageourLogo,
  linkfooter,
  containerfooterHeight,
  containerfooterFlexShrink,
  textFooterContainerTextDecoration,
  textFooterContainerWidth,
  textFooterContainerOpacity,
  textfooterDisplay,
  textfooterAlignItems,
  textfooterWidth,
  textfooterFlexShrink,
  textfooterFlex,
  borrowOurCarsMargin,
  thumbsupDesignMargin,
  thumbsupDesignDisplay,
  thumbsupDesignFlexDirection,
  thumbsupDesignAlignItems,
  thumbsupDesignJustifyContent,
  ourLogoContainerDisplay,
  ourLogoContainerFlexDirection,
  ourLogoContainerAlignItems,
  ourLogoContainerJustifyContent,
  ourLogoContainerPosition,
  ourLogoContainerWidth,
  ourLogoContainerHeight,
  ourLogoContainerObjectFit,
  imageourLogoIconPosition,
  imageourLogoIconWidth,
  imageourLogoIconHeight,
  imageourLogoIconObjectFit,
  imageourLogoIconDisplay,
  imageourLogoIconFlexDirection,
  imageourLogoIconAlignItems,
  imageourLogoIconJustifyContent,
  imageourLogoIconPadding,
  imageourLogoIconBoxSizing,
  linkFooterContainerFlexDirection,
  linkFooterContainerPadding,
  linkFooterContainerBoxSizing,
  linkFooterContainerTextDecoration,
  linkFooterContainerPosition,
  linkFooterContainerFontSize,
  linkFooterContainerLetterSpacing,
  linkFooterContainerLineHeight,
  linkFooterContainerFontWeight,
  linkFooterContainerFontFamily,
  linkFooterContainerColor,
  linkFooterContainerTextAlign,
  linkFooterContainerWidth,
  linkFooterContainerFlexShrink,
  linkfooterTextDecoration,
  linkfooterPosition,
  linkfooterFontSize,
  linkfooterLetterSpacing,
  linkfooterLineHeight,
  linkfooterFontWeight,
  linkfooterFontFamily,
  linkfooterColor,
  linkfooterTextAlign,
  linkfooterWidth,
  linkfooterFlexShrink,
  linkfooterCursor,
  linkfooterBorder,
  linkfooterPadding,
  linkfooterBackgroundColor,
  linkfooterFlexDirection,
  buttonsmallsmallCursor,
  buttonsmallsmallBorder,
  buttonsmallsmallPadding,
  buttonsmallsmallBackgroundColor,
  buttonsmallsmallFlexDirection,
  buttonsmallsmallAlignItems,
  buttonsmallsmallJustifyContent,
  buttonsmallsmallBoxSizing,
  buttonsmallsmallWidth,
  buttonsmallsmallHeight,
  buttonShapeBorder,
  buttonShapeBoxSizing,
  buttonShapeWidth,
  buttonShapeHeight,
  buttonShapeFlexDirection,
  buttonShapeAlignItems,
  buttonShapeJustifyContent,
  buttonShapeAlignSelf,
  buttonShapeFlex,
  buttonShapePosition,
  buttonShapeFontSize,
  buttonShapeLetterSpacing,
  buttonShapeLineHeight,
  buttonShapeFontWeight,
  buttonShapeFontFamily,
  buttonShapeColor,
  buttonShapeTextAlign,
}) => {
  const containerfooterStyle: CSSProperties = useMemo(() => {
    return {
      height: containerfooterHeight,
      flexShrink: containerfooterFlexShrink,
    };
  }, [containerfooterHeight, containerfooterFlexShrink]);

  const textFooterContainerStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: textFooterContainerTextDecoration,
      width: textFooterContainerWidth,
      opacity: textFooterContainerOpacity,
    };
  }, [
    textFooterContainerTextDecoration,
    textFooterContainerWidth,
    textFooterContainerOpacity,
  ]);

  const textfooterStyle: CSSProperties = useMemo(() => {
    return {
      display: textfooterDisplay,
      alignItems: textfooterAlignItems,
      width: textfooterWidth,
      flexShrink: textfooterFlexShrink,
      flex: textfooterFlex,
    };
  }, [
    textfooterDisplay,
    textfooterAlignItems,
    textfooterWidth,
    textfooterFlexShrink,
    textfooterFlex,
  ]);

  const thumbsupDesignStyle: CSSProperties = useMemo(() => {
    return {
      margin: thumbsupDesignMargin,
      display: thumbsupDesignDisplay,
      flexDirection: thumbsupDesignFlexDirection,
      alignItems: thumbsupDesignAlignItems,
      justifyContent: thumbsupDesignJustifyContent,
    };
  }, [
    thumbsupDesignMargin,
    thumbsupDesignDisplay,
    thumbsupDesignFlexDirection,
    thumbsupDesignAlignItems,
    thumbsupDesignJustifyContent,
  ]);

  const ourLogoContainerStyle: CSSProperties = useMemo(() => {
    return {
      display: ourLogoContainerDisplay,
      flexDirection: ourLogoContainerFlexDirection,
      alignItems: ourLogoContainerAlignItems,
      justifyContent: ourLogoContainerJustifyContent,
      position: ourLogoContainerPosition,
      width: ourLogoContainerWidth,
      height: ourLogoContainerHeight,
      objectFit: ourLogoContainerObjectFit,
    };
  }, [
    ourLogoContainerDisplay,
    ourLogoContainerFlexDirection,
    ourLogoContainerAlignItems,
    ourLogoContainerJustifyContent,
    ourLogoContainerPosition,
    ourLogoContainerWidth,
    ourLogoContainerHeight,
    ourLogoContainerObjectFit,
  ]);

  const imageourLogoIconStyle: CSSProperties = useMemo(() => {
    return {
      position: imageourLogoIconPosition,
      width: imageourLogoIconWidth,
      height: imageourLogoIconHeight,
      objectFit: imageourLogoIconObjectFit,
      display: imageourLogoIconDisplay,
      flexDirection: imageourLogoIconFlexDirection,
      alignItems: imageourLogoIconAlignItems,
      justifyContent: imageourLogoIconJustifyContent,
      padding: imageourLogoIconPadding,
      boxSizing: imageourLogoIconBoxSizing,
    };
  }, [
    imageourLogoIconPosition,
    imageourLogoIconWidth,
    imageourLogoIconHeight,
    imageourLogoIconObjectFit,
    imageourLogoIconDisplay,
    imageourLogoIconFlexDirection,
    imageourLogoIconAlignItems,
    imageourLogoIconJustifyContent,
    imageourLogoIconPadding,
    imageourLogoIconBoxSizing,
  ]);

  const linkFooterContainerStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: linkFooterContainerFlexDirection,
      padding: linkFooterContainerPadding,
      boxSizing: linkFooterContainerBoxSizing,
      textDecoration: linkFooterContainerTextDecoration,
      position: linkFooterContainerPosition,
      fontSize: linkFooterContainerFontSize,
      letterSpacing: linkFooterContainerLetterSpacing,
      lineHeight: linkFooterContainerLineHeight,
      fontWeight: linkFooterContainerFontWeight,
      fontFamily: linkFooterContainerFontFamily,
      color: linkFooterContainerColor,
      textAlign: linkFooterContainerTextAlign,
      width: linkFooterContainerWidth,
      flexShrink: linkFooterContainerFlexShrink,
    };
  }, [
    linkFooterContainerFlexDirection,
    linkFooterContainerPadding,
    linkFooterContainerBoxSizing,
    linkFooterContainerTextDecoration,
    linkFooterContainerPosition,
    linkFooterContainerFontSize,
    linkFooterContainerLetterSpacing,
    linkFooterContainerLineHeight,
    linkFooterContainerFontWeight,
    linkFooterContainerFontFamily,
    linkFooterContainerColor,
    linkFooterContainerTextAlign,
    linkFooterContainerWidth,
    linkFooterContainerFlexShrink,
  ]);

  const linkfooterStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: linkfooterTextDecoration,
      position: linkfooterPosition,
      fontSize: linkfooterFontSize,
      letterSpacing: linkfooterLetterSpacing,
      lineHeight: linkfooterLineHeight,
      fontWeight: linkfooterFontWeight,
      fontFamily: linkfooterFontFamily,
      color: linkfooterColor,
      textAlign: linkfooterTextAlign,
      width: linkfooterWidth,
      flexShrink: linkfooterFlexShrink,
      cursor: linkfooterCursor,
      border: linkfooterBorder,
      padding: linkfooterPadding,
      backgroundColor: linkfooterBackgroundColor,
      flexDirection: linkfooterFlexDirection,
    };
  }, [
    linkfooterTextDecoration,
    linkfooterPosition,
    linkfooterFontSize,
    linkfooterLetterSpacing,
    linkfooterLineHeight,
    linkfooterFontWeight,
    linkfooterFontFamily,
    linkfooterColor,
    linkfooterTextAlign,
    linkfooterWidth,
    linkfooterFlexShrink,
    linkfooterCursor,
    linkfooterBorder,
    linkfooterPadding,
    linkfooterBackgroundColor,
    linkfooterFlexDirection,
  ]);

  const buttonsmallsmallStyle: CSSProperties = useMemo(() => {
    return {
      cursor: buttonsmallsmallCursor,
      border: buttonsmallsmallBorder,
      padding: buttonsmallsmallPadding,
      backgroundColor: buttonsmallsmallBackgroundColor,
      flexDirection: buttonsmallsmallFlexDirection,
      alignItems: buttonsmallsmallAlignItems,
      justifyContent: buttonsmallsmallJustifyContent,
      boxSizing: buttonsmallsmallBoxSizing,
      width: buttonsmallsmallWidth,
      height: buttonsmallsmallHeight,
    };
  }, [
    buttonsmallsmallCursor,
    buttonsmallsmallBorder,
    buttonsmallsmallPadding,
    buttonsmallsmallBackgroundColor,
    buttonsmallsmallFlexDirection,
    buttonsmallsmallAlignItems,
    buttonsmallsmallJustifyContent,
    buttonsmallsmallBoxSizing,
    buttonsmallsmallWidth,
    buttonsmallsmallHeight,
  ]);

  const buttonShapeStyle: CSSProperties = useMemo(() => {
    return {
      border: buttonShapeBorder,
      boxSizing: buttonShapeBoxSizing,
      width: buttonShapeWidth,
      height: buttonShapeHeight,
      flexDirection: buttonShapeFlexDirection,
      alignItems: buttonShapeAlignItems,
      justifyContent: buttonShapeJustifyContent,
      alignSelf: buttonShapeAlignSelf,
      flex: buttonShapeFlex,
      position: buttonShapePosition,
      fontSize: buttonShapeFontSize,
      letterSpacing: buttonShapeLetterSpacing,
      lineHeight: buttonShapeLineHeight,
      fontWeight: buttonShapeFontWeight,
      fontFamily: buttonShapeFontFamily,
      color: buttonShapeColor,
      textAlign: buttonShapeTextAlign,
    };
  }, [
    buttonShapeBorder,
    buttonShapeBoxSizing,
    buttonShapeWidth,
    buttonShapeHeight,
    buttonShapeFlexDirection,
    buttonShapeAlignItems,
    buttonShapeJustifyContent,
    buttonShapeAlignSelf,
    buttonShapeFlex,
    buttonShapePosition,
    buttonShapeFontSize,
    buttonShapeLetterSpacing,
    buttonShapeLineHeight,
    buttonShapeFontWeight,
    buttonShapeFontFamily,
    buttonShapeColor,
    buttonShapeTextAlign,
  ]);

  return (
    <footer className={styles.containerfooter} style={containerfooterStyle}>
      <div
        className={styles.textFooterContainer}
        style={textFooterContainerStyle}
      >
        <div className={styles.textfooter} style={textfooterStyle}>
          <span className={styles.textfooterTxt}>
            <p
              className={styles.borrowOurCars}
            >{`© 2023 “Borrow Our Cars” &`}</p>
            <p className={styles.borrowOurCars}>“:thumbsup: design”</p>
          </span>
        </div>
      </div>
      <div className={styles.ourLogoContainer} style={ourLogoContainerStyle}>
        <img
          className={styles.imageourLogoIcon}
          alt=""
          src={imageourLogo}
          style={imageourLogoIconStyle}
        />
      </div>
      <div
        className={styles.textFooterContainer}
        style={linkFooterContainerStyle}
      >
        <a className={styles.linkfooter} style={linkfooterStyle}>
          {linkfooter}
        </a>
      </div>
      <button className={styles.buttonsmallsmall} style={buttonsmallsmallStyle}>
        <div className={styles.buttonShape} style={buttonShapeStyle}>
          <div className={styles.buttonText}>Support</div>
        </div>
      </button>
    </footer>
  );
};

export default Containerfooter;
