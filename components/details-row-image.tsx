import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import IconImage from "./icon-image";
import styles from "./details-row-image.module.css";

type DetailsRowImageType = {
  /** Style props */
  detailsRowImageBoxSizing?: CSSProperties["boxSizing"];
};

const DetailsRowImage: NextPage<DetailsRowImageType> = ({
  detailsRowImageBoxSizing,
}) => {
  const detailsRowImageStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: detailsRowImageBoxSizing,
    };
  }, [detailsRowImageBoxSizing]);

  return (
    <div className={styles.detailsrowimage} style={detailsRowImageStyle}>
      <IconImage
        imageDimensions="/iconimage1.svg"
        iconImageWidth="280px"
        iconImageHeight="153px"
        iconImagePosition="relative"
        iconImageFlexShrink="0"
      />
    </div>
  );
};

export default DetailsRowImage;
