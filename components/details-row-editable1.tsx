import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import DetailsRowImage from "./details-row-image";
import DetailCell from "./detail-cell";
import Buttonsmallsmall1 from "./buttonsmallsmall1";
import styles from "./details-row-editable1.module.css";

type DetailsRowEditable1Type = {
  text?: string;
  labelText2?: string;
  valueText?: string;
  labelText?: string;
  thomasSt?: string;
  newYorkNY10007?: string;
  labelText1?: string;
  valueText1?: string;
  showThirdDetail?: boolean;
  showThomasSt?: boolean;

  /** Style props */
  iconImageMargin?: CSSProperties["margin"];
  iconImageFlexDirection?: CSSProperties["flexDirection"];
  iconImageAlignItems?: CSSProperties["alignItems"];
  iconImageJustifyContent?: CSSProperties["justifyContent"];
  iconImagePadding?: CSSProperties["padding"];
  iconImageBoxSizing?: CSSProperties["boxSizing"];
  iconImageGap?: CSSProperties["gap"];
  detailCellMargin?: CSSProperties["margin"];
  detailCellPosition?: CSSProperties["position"];
  detailCellFontSize?: CSSProperties["fontSize"];
  detailCellLetterSpacing?: CSSProperties["letterSpacing"];
  detailCellLineHeight?: CSSProperties["lineHeight"];
  detailCellFontWeight?: CSSProperties["fontWeight"];
  detailCellFontFamily?: CSSProperties["fontFamily"];
  detailCellColor?: CSSProperties["color"];
  detailCellTextAlign?: CSSProperties["textAlign"];
  detailCellDisplay?: CSSProperties["display"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propBorderBottom?: CSSProperties["borderBottom"];
  propBoxSizing?: CSSProperties["boxSizing"];
  propDisplay?: CSSProperties["display"];
  propFlexDirection1?: CSSProperties["flexDirection"];
  propAlignItems?: CSSProperties["alignItems"];
  propJustifyContent?: CSSProperties["justifyContent"];
  propPadding1?: CSSProperties["padding"];
  propPosition?: CSSProperties["position"];
  propFontSize?: CSSProperties["fontSize"];
  propLetterSpacing?: CSSProperties["letterSpacing"];
  propLineHeight?: CSSProperties["lineHeight"];
  propFontWeight?: CSSProperties["fontWeight"];
  propFontFamily?: CSSProperties["fontFamily"];
  propColor?: CSSProperties["color"];
  propTextAlign?: CSSProperties["textAlign"];
  propPosition1?: CSSProperties["position"];
  propFontSize1?: CSSProperties["fontSize"];
  propLetterSpacing1?: CSSProperties["letterSpacing"];
  propLineHeight1?: CSSProperties["lineHeight"];
  propFontWeight1?: CSSProperties["fontWeight"];
  propFontFamily1?: CSSProperties["fontFamily"];
  propColor1?: CSSProperties["color"];
  propTextAlign1?: CSSProperties["textAlign"];
  propDisplay1?: CSSProperties["display"];
  propCursor?: CSSProperties["cursor"];
  propBorder?: CSSProperties["border"];
  propPadding2?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propFlexDirection2?: CSSProperties["flexDirection"];
  propAlignItems1?: CSSProperties["alignItems"];
  propJustifyContent1?: CSSProperties["justifyContent"];
  propPadding3?: CSSProperties["padding"];
  propBorder1?: CSSProperties["border"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propFontSize2?: CSSProperties["fontSize"];
  propFontFamily2?: CSSProperties["fontFamily"];
  propTextAlign2?: CSSProperties["textAlign"];
  propDisplay2?: CSSProperties["display"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propAlignItems2?: CSSProperties["alignItems"];
  propJustifyContent2?: CSSProperties["justifyContent"];
};

const DetailsRowEditable1: NextPage<DetailsRowEditable1Type> = ({
  text = "Location Choice",
  labelText2,
  valueText,
  labelText,
  thomasSt,
  newYorkNY10007,
  labelText1,
  valueText1,
  showThirdDetail = false,
  showThomasSt,
  iconImageMargin,
  iconImageFlexDirection,
  iconImageAlignItems,
  iconImageJustifyContent,
  iconImagePadding,
  iconImageBoxSizing,
  iconImageGap,
  detailCellMargin,
  detailCellPosition,
  detailCellFontSize,
  detailCellLetterSpacing,
  detailCellLineHeight,
  detailCellFontWeight,
  detailCellFontFamily,
  detailCellColor,
  detailCellTextAlign,
  detailCellDisplay,
  propFlexDirection,
  propPadding,
  propGap,
  propBorderBottom,
  propBoxSizing,
  propDisplay,
  propFlexDirection1,
  propAlignItems,
  propJustifyContent,
  propPadding1,
  propPosition,
  propFontSize,
  propLetterSpacing,
  propLineHeight,
  propFontWeight,
  propFontFamily,
  propColor,
  propTextAlign,
  propPosition1,
  propFontSize1,
  propLetterSpacing1,
  propLineHeight1,
  propFontWeight1,
  propFontFamily1,
  propColor1,
  propTextAlign1,
  propDisplay1,
  propCursor,
  propBorder,
  propPadding2,
  propBackgroundColor,
  propFlexDirection2,
  propAlignItems1,
  propJustifyContent1,
  propPadding3,
  propBorder1,
  propWidth,
  propHeight,
  propFontSize2,
  propFontFamily2,
  propTextAlign2,
  propDisplay2,
  propAlignSelf,
  propFlex,
  propAlignItems2,
  propJustifyContent2,
}) => {
  const thomasStStyle: CSSProperties = useMemo(() => {
    return {
      margin: iconImageMargin,
      flexDirection: iconImageFlexDirection,
      alignItems: iconImageAlignItems,
      justifyContent: iconImageJustifyContent,
      padding: iconImagePadding,
      boxSizing: iconImageBoxSizing,
      gap: iconImageGap,
    };
  }, [
    iconImageMargin,
    iconImageFlexDirection,
    iconImageAlignItems,
    iconImageJustifyContent,
    iconImagePadding,
    iconImageBoxSizing,
    iconImageGap,
  ]);

  const newYorkNYStyle: CSSProperties = useMemo(() => {
    return {
      margin: detailCellMargin,
      position: detailCellPosition,
      fontSize: detailCellFontSize,
      letterSpacing: detailCellLetterSpacing,
      lineHeight: detailCellLineHeight,
      fontWeight: detailCellFontWeight,
      fontFamily: detailCellFontFamily,
      color: detailCellColor,
      textAlign: detailCellTextAlign,
      display: detailCellDisplay,
    };
  }, [
    detailCellMargin,
    detailCellPosition,
    detailCellFontSize,
    detailCellLetterSpacing,
    detailCellLineHeight,
    detailCellFontWeight,
    detailCellFontFamily,
    detailCellColor,
    detailCellTextAlign,
    detailCellDisplay,
  ]);

  const detailCellStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
      padding: propPadding,
      gap: propGap,
    };
  }, [propFlexDirection, propPadding, propGap]);

  const label1Style: CSSProperties = useMemo(() => {
    return {
      borderBottom: propBorderBottom,
      boxSizing: propBoxSizing,
      display: propDisplay,
      flexDirection: propFlexDirection1,
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      padding: propPadding1,
      position: propPosition,
      fontSize: propFontSize,
      letterSpacing: propLetterSpacing,
      lineHeight: propLineHeight,
      fontWeight: propFontWeight,
      fontFamily: propFontFamily,
      color: propColor,
      textAlign: propTextAlign,
    };
  }, [
    propBorderBottom,
    propBoxSizing,
    propDisplay,
    propFlexDirection1,
    propAlignItems,
    propJustifyContent,
    propPadding1,
    propPosition,
    propFontSize,
    propLetterSpacing,
    propLineHeight,
    propFontWeight,
    propFontFamily,
    propColor,
    propTextAlign,
  ]);

  const labelTextStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition1,
      fontSize: propFontSize1,
      letterSpacing: propLetterSpacing1,
      lineHeight: propLineHeight1,
      fontWeight: propFontWeight1,
      fontFamily: propFontFamily1,
      color: propColor1,
      textAlign: propTextAlign1,
      display: propDisplay1,
      cursor: propCursor,
      border: propBorder,
      padding: propPadding2,
      backgroundColor: propBackgroundColor,
      flexDirection: propFlexDirection2,
      alignItems: propAlignItems1,
      justifyContent: propJustifyContent1,
    };
  }, [
    propPosition1,
    propFontSize1,
    propLetterSpacing1,
    propLineHeight1,
    propFontWeight1,
    propFontFamily1,
    propColor1,
    propTextAlign1,
    propDisplay1,
    propCursor,
    propBorder,
    propPadding2,
    propBackgroundColor,
    propFlexDirection2,
    propAlignItems1,
    propJustifyContent1,
  ]);

  const valueStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding3,
      border: propBorder1,
      width: propWidth,
      height: propHeight,
    };
  }, [propPadding3, propBorder1, propWidth, propHeight]);

  const valueTextStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize2,
      fontFamily: propFontFamily2,
      textAlign: propTextAlign2,
      display: propDisplay2,
      alignSelf: propAlignSelf,
      flex: propFlex,
      alignItems: propAlignItems2,
      justifyContent: propJustifyContent2,
    };
  }, [
    propFontSize2,
    propFontFamily2,
    propTextAlign2,
    propDisplay2,
    propAlignSelf,
    propFlex,
    propAlignItems2,
    propJustifyContent2,
  ]);

  return (
    <div className={styles.detailsroweditable}>
      <div className={styles.reservationDetailsGroupHead}>
        <div className={styles.reservationDetailsGroupText}>{text}</div>
      </div>
      <div className={styles.reservationDetailsGroupBody}>
        <DetailsRowImage detailsRowImageBoxSizing="border-box" />
        <div className={styles.bodyDetails}>
          <DetailCell labelText="Lot ID" valueText="A-1" />
          <DetailCell labelText="Lot Address" />
          {showThirdDetail && (
            <div className={styles.detailcell} style={detailCellStyle}>
              <div className={styles.label} style={label1Style}>
                <div
                  className={styles.reservationDetailsGroupText}
                  style={labelTextStyle}
                >
                  {labelText1}
                </div>
              </div>
              <div className={styles.value} style={valueStyle}>
                <div
                  className={styles.reservationDetailsGroupText}
                  style={valueTextStyle}
                >
                  {valueText1}
                </div>
              </div>
            </div>
          )}
          <Buttonsmallsmall1
            buttonText="Edit"
            buttonsmallsmallCursor="pointer"
            buttonsmallsmallBorder="none"
            buttonsmallsmallPadding="0"
            buttonsmallsmallBackgroundColor="transparent"
            buttonsmallsmallBorderRadius="unset"
            buttonShapeBorderRadius="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsRowEditable1;
