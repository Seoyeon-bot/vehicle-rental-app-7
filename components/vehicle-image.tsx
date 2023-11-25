import type { NextPage } from "next";
import styles from "./vehicle-image.module.css";

type VehicleImageType = {
  imageDimensions?: string;
};

const VehicleImage: NextPage<VehicleImageType> = ({ imageDimensions }) => {
  return (
    <div className={styles.vehicleimage}>
      <img className={styles.imageIcon} alt="" src={imageDimensions} />
    </div>
  );
};

export default VehicleImage;
