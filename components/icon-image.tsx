import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./icon-image.module.css";

type IconImageType = {
  imageDimensions?: string;

  /** Style props */
  iconImageWidth?: CSSProperties["width"];
  iconImageHeight?: CSSProperties["height"];
  iconImagePosition?: CSSProperties["position"];
  iconImageFlexShrink?: CSSProperties["flexShrink"];
};

const IconImage: NextPage<IconImageType> = ({
  imageDimensions,
  iconImageWidth,
  iconImageHeight,
  iconImagePosition,
  iconImageFlexShrink,
}) => {
  const iconImageStyle: CSSProperties = useMemo(() => {
    return {
      width: iconImageWidth,
      height: iconImageHeight,
      position: iconImagePosition,
      flexShrink: iconImageFlexShrink,
    };
  }, [iconImageWidth, iconImageHeight, iconImagePosition, iconImageFlexShrink]);

  return (
    <img
      className={styles.iconImage}
      alt=""
      src={imageDimensions}
      style={iconImageStyle}
    />
  );
};

export default IconImage;
