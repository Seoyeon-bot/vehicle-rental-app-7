import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./steps-connector.module.css";

type StepsConnectorType = {
  /** Style props */
  stepsConnectorHeight?: CSSProperties["height"];
};

const StepsConnector: NextPage<StepsConnectorType> = ({
  stepsConnectorHeight,
}) => {
  const stepsConnectorStyle: CSSProperties = useMemo(() => {
    return {
      height: stepsConnectorHeight,
    };
  }, [stepsConnectorHeight]);

  return <div className={styles.stepsConnector} style={stepsConnectorStyle} />;
};

export default StepsConnector;
