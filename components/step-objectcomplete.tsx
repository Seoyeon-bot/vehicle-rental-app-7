import type { NextPage } from "next";
import styles from "./step-objectcomplete.module.css";

const StepObjectcomplete: NextPage = () => {
  return (
    <div className={styles.stepObjectcomplete}>
      <div className={styles.stepLabelShape}>
        <div className={styles.stepLabelText}>Step X</div>
      </div>
      <div className={styles.stepCircle}>
        <div className={styles.div}>✓</div>
      </div>
    </div>
  );
};

export default StepObjectcomplete;
