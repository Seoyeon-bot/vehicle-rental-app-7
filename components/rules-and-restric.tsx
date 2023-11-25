import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./rules-and-restric.module.css";

type RulesAndRestricType = {
  textStyle?: string;

  /** Style props */
  linkRegularMediumContaineAlignSelf?: CSSProperties["alignSelf"];
  linkRegularMediumContaineZIndex?: CSSProperties["zIndex"];
  linkRegularMediumContaineAlignItems?: CSSProperties["alignItems"];
  linkRegularMediumContaineJustifyContent?: CSSProperties["justifyContent"];
  linkRegularMediumContaineWidth?: CSSProperties["width"];
  linkRegularMediumContaineHeight?: CSSProperties["height"];
  linkRegularMediumContaineMargin?: CSSProperties["margin"];
  linkRegularMediumContainePosition?: CSSProperties["position"];
  linkRegularMediumContaineTop?: CSSProperties["top"];
  linkRegularMediumContaineLeft?: CSSProperties["left"];
};

const RulesAndRestric: NextPage<RulesAndRestricType> = ({
  textStyle,
  linkRegularMediumContaineAlignSelf,
  linkRegularMediumContaineZIndex,
  linkRegularMediumContaineAlignItems,
  linkRegularMediumContaineJustifyContent,
  linkRegularMediumContaineWidth,
  linkRegularMediumContaineHeight,
  linkRegularMediumContaineMargin,
  linkRegularMediumContainePosition,
  linkRegularMediumContaineTop,
  linkRegularMediumContaineLeft,
}) => {
  const linkRegularMediumContainerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: linkRegularMediumContaineAlignSelf,
      zIndex: linkRegularMediumContaineZIndex,
      alignItems: linkRegularMediumContaineAlignItems,
      justifyContent: linkRegularMediumContaineJustifyContent,
      width: linkRegularMediumContaineWidth,
      height: linkRegularMediumContaineHeight,
      margin: linkRegularMediumContaineMargin,
      position: linkRegularMediumContainePosition,
      top: linkRegularMediumContaineTop,
      left: linkRegularMediumContaineLeft,
    };
  }, [
    linkRegularMediumContaineAlignSelf,
    linkRegularMediumContaineZIndex,
    linkRegularMediumContaineAlignItems,
    linkRegularMediumContaineJustifyContent,
    linkRegularMediumContaineWidth,
    linkRegularMediumContaineHeight,
    linkRegularMediumContaineMargin,
    linkRegularMediumContainePosition,
    linkRegularMediumContaineTop,
    linkRegularMediumContaineLeft,
  ]);

  return (
    <div
      className={styles.linkRegularMediumContainer}
      style={linkRegularMediumContainerStyle}
    >
      <a className={styles.linkregularmedium}>{textStyle}</a>
    </div>
  );
};

export default RulesAndRestric;
