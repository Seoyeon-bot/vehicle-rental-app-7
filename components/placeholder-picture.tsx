import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./placeholder-picture.module.css";

type PlaceholderPictureType = {
  imageDimensions?: string;

  /** Style props */
  placeholderPictureMargin?: CSSProperties["margin"];
  placeholderPicturePosition?: CSSProperties["position"];
  placeholderPictureTop?: CSSProperties["top"];
  placeholderPictureLeft?: CSSProperties["left"];
  placeholderPictureZIndex?: CSSProperties["zIndex"];
  placeholderPictureOverflow?: CSSProperties["overflow"];
  placeholderPictureFlexShrink?: CSSProperties["flexShrink"];
};

const PlaceholderPicture: NextPage<PlaceholderPictureType> = ({
  imageDimensions,
  placeholderPictureMargin,
  placeholderPicturePosition,
  placeholderPictureTop,
  placeholderPictureLeft,
  placeholderPictureZIndex,
  placeholderPictureOverflow,
  placeholderPictureFlexShrink,
}) => {
  const placeholderPictureStyle: CSSProperties = useMemo(() => {
    return {
      margin: placeholderPictureMargin,
      position: placeholderPicturePosition,
      top: placeholderPictureTop,
      left: placeholderPictureLeft,
      zIndex: placeholderPictureZIndex,
      overflow: placeholderPictureOverflow,
      flexShrink: placeholderPictureFlexShrink,
    };
  }, [
    placeholderPictureMargin,
    placeholderPicturePosition,
    placeholderPictureTop,
    placeholderPictureLeft,
    placeholderPictureZIndex,
    placeholderPictureOverflow,
    placeholderPictureFlexShrink,
  ]);

  return (
    <img
      className={styles.placeholderPicture}
      alt=""
      src={imageDimensions}
      style={placeholderPictureStyle}
    />
  );
};

export default PlaceholderPicture;
