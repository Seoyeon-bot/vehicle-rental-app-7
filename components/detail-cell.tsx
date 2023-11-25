import type { NextPage } from "next";
import styles from "./detail-cell.module.css";

type DetailCellType = {
  labelText?: string;
  valueText?: string;
};

const DetailCell: NextPage<DetailCellType> = ({
  labelText = "Label",
  valueText = "Value",
}) => {
  return (
    <div className={styles.detailcell}>
      <div className={styles.label}>
        <div className={styles.labeltext}>{labelText}</div>
      </div>
      <div className={styles.value}>
        <div className={styles.labeltext}>{valueText}</div>
      </div>
    </div>
  );
};

export default DetailCell;
