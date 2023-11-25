import type { NextPage } from "next";
import styles from "./location-image.module.css";

const LocationImage: NextPage = () => {
  return (
    <div className={styles.locationimage}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
    </div>
  );
};

export default LocationImage;
