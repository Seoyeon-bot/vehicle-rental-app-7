import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./alignment-center.module.css";

type AlignmentCenterType = {
  loremIpsumDolorSitAmetCon?: string;
  caption?: string;
  text?: string;
  headline1?: string;
  headline2?: boolean;

  /** Style props */
  alignmentCenterHeight?: CSSProperties["height"];
  alignmentCenterOverflow?: CSSProperties["overflow"];
  alignmentCenterFlexShrink?: CSSProperties["flexShrink"];
  alignmentCenterZIndex?: CSSProperties["zIndex"];
  loremIpsumDolorMarginBlockStart?: CSSProperties["marginBlockStart"];
  loremIpsumDolorMarginBlockEnd?: CSSProperties["marginBlockEnd"];
  loremIpsumDolorAlignSelf?: CSSProperties["alignSelf"];
  loremIpsumDolorPosition?: CSSProperties["position"];
  loremIpsumDolorFontSize?: CSSProperties["fontSize"];
  loremIpsumDolorLineHeight?: CSSProperties["lineHeight"];
  loremIpsumDolorFontFamily?: CSSProperties["fontFamily"];
  loremIpsumDolorColor?: CSSProperties["color"];
  loremIpsumDolorTextAlign?: CSSProperties["textAlign"];
  loremIpsumDolorDisplay?: CSSProperties["display"];
  bibendumAmetAtMargin?: CSSProperties["margin"];
  paragraphAlignSelf?: CSSProperties["alignSelf"];
  paragraphPosition?: CSSProperties["position"];
  paragraphFontSize?: CSSProperties["fontSize"];
  paragraphLineHeight?: CSSProperties["lineHeight"];
  paragraphFontFamily?: CSSProperties["fontFamily"];
  paragraphColor?: CSSProperties["color"];
  paragraphTextAlign?: CSSProperties["textAlign"];
  paragraphMargin?: CSSProperties["margin"];
};

const AlignmentCenter: NextPage<AlignmentCenterType> = ({
  loremIpsumDolorSitAmetCon,
  caption = "Caption",
  text = "Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.",
  headline1 = "Purus sagittis fringilla arcu neque.",
  headline2 = true,
  alignmentCenterHeight,
  alignmentCenterOverflow,
  alignmentCenterFlexShrink,
  alignmentCenterZIndex,
  loremIpsumDolorMarginBlockStart,
  loremIpsumDolorMarginBlockEnd,
  loremIpsumDolorAlignSelf,
  loremIpsumDolorPosition,
  loremIpsumDolorFontSize,
  loremIpsumDolorLineHeight,
  loremIpsumDolorFontFamily,
  loremIpsumDolorColor,
  loremIpsumDolorTextAlign,
  loremIpsumDolorDisplay,
  bibendumAmetAtMargin,
  paragraphAlignSelf,
  paragraphPosition,
  paragraphFontSize,
  paragraphLineHeight,
  paragraphFontFamily,
  paragraphColor,
  paragraphTextAlign,
  paragraphMargin,
}) => {
  const alignmentCenterStyle: CSSProperties = useMemo(() => {
    return {
      height: alignmentCenterHeight,
      overflow: alignmentCenterOverflow,
      flexShrink: alignmentCenterFlexShrink,
      zIndex: alignmentCenterZIndex,
    };
  }, [
    alignmentCenterHeight,
    alignmentCenterOverflow,
    alignmentCenterFlexShrink,
    alignmentCenterZIndex,
  ]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      marginBlockStart: loremIpsumDolorMarginBlockStart,
      marginBlockEnd: loremIpsumDolorMarginBlockEnd,
      alignSelf: loremIpsumDolorAlignSelf,
      position: loremIpsumDolorPosition,
      fontSize: loremIpsumDolorFontSize,
      lineHeight: loremIpsumDolorLineHeight,
      fontFamily: loremIpsumDolorFontFamily,
      color: loremIpsumDolorColor,
      textAlign: loremIpsumDolorTextAlign,
      display: loremIpsumDolorDisplay,
    };
  }, [
    loremIpsumDolorMarginBlockStart,
    loremIpsumDolorMarginBlockEnd,
    loremIpsumDolorAlignSelf,
    loremIpsumDolorPosition,
    loremIpsumDolorFontSize,
    loremIpsumDolorLineHeight,
    loremIpsumDolorFontFamily,
    loremIpsumDolorColor,
    loremIpsumDolorTextAlign,
    loremIpsumDolorDisplay,
  ]);

  const bibendumAmetAtStyle: CSSProperties = useMemo(() => {
    return {
      margin: bibendumAmetAtMargin,
    };
  }, [bibendumAmetAtMargin]);

  const paragraphStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: paragraphAlignSelf,
      position: paragraphPosition,
      fontSize: paragraphFontSize,
      lineHeight: paragraphLineHeight,
      fontFamily: paragraphFontFamily,
      color: paragraphColor,
      textAlign: paragraphTextAlign,
      margin: paragraphMargin,
    };
  }, [
    paragraphAlignSelf,
    paragraphPosition,
    paragraphFontSize,
    paragraphLineHeight,
    paragraphFontFamily,
    paragraphColor,
    paragraphTextAlign,
    paragraphMargin,
  ]);

  return (
    <div className={styles.alignmentcenter} style={alignmentCenterStyle}>
      <div className={styles.top}>
        {caption && <b className={styles.caption}>{caption}</b>}
        {headline1 && <b className={styles.mainHeadline}>{headline1}</b>}
        {headline2 && (
          <b className={styles.secondaryHeadline}>
            <p className={styles.loremIpsumDolor} style={loremIpsumDolorStyle}>
              {loremIpsumDolorSitAmetCon}
            </p>
            <p className={styles.bibendumAmetAt} style={bibendumAmetAtStyle}>
              Bibendum amet at molestie mattis.
            </p>
          </b>
        )}
      </div>
      {text && (
        <div className={styles.paragraph} style={paragraphStyle}>
          {text}
        </div>
      )}
    </div>
  );
};

export default AlignmentCenter;
