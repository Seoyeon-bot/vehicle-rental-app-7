import type { NextPage } from "next";
import styles from "./step-object.module.css";

type StepObjectType = {
  stepLabelText?: string;
};

const StepObject: NextPage<StepObjectType> = ({ stepLabelText = "Step X" }) => {
  return (
    <div className={styles.stepObject}>
      <div className={styles.stepLabelShape}>
        <div className={styles.stepLabelText}>{stepLabelText}</div>
      </div>
      <div className={styles.stepCircle} />
    </div>
  );
};

export default StepObject;
