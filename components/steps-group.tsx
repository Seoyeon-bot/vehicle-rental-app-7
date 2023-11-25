import type { NextPage } from "next";
import StepObject from "./step-object";
import StepsConnector from "./steps-connector";
import styles from "./steps-group.module.css";

type StepsGroupType = {
  stepTitle?: string;
  stepSubtitle?: string;
  stepButtonText?: string;
};

const StepsGroup: NextPage<StepsGroupType> = ({
  stepTitle,
  stepSubtitle,
  stepButtonText,
}) => {
  return (
    <div className={styles.stepsGroup}>
      <StepObject stepLabelText="Step X" />
      <StepsConnector stepsConnectorHeight="88px" />
      <StepObject stepLabelText="Step X" />
      <StepsConnector stepsConnectorHeight="88px" />
      <StepObject stepLabelText="Step X" />
    </div>
  );
};

export default StepsGroup;
