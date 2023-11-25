import type { NextPage } from "next";
import VehicleImage from "./vehicle-image";
import styles from "./image-details-row.module.css";

type ImageDetailsRowType = {
  imageDimensions?: string;
};

const ImageDetailsRow: NextPage<ImageDetailsRowType> = ({
  imageDimensions,
}) => {
  return (
    <div className={styles.imageDetailsRow}>
      <VehicleImage imageDimensions="/image1@2x.png" />
    </div>
  );
};

export default ImageDetailsRow;
