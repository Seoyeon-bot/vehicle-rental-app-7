import type { NextPage } from "next";
import styles from "./client-logo-component.module.css";

type ClientLogoComponentType = {
  /** Action props */
  onClientLogoComponentClick?: () => void;
};

const ClientLogoComponent: NextPage<ClientLogoComponentType> = ({
  onClientLogoComponentClick,
}) => {
  return (
    <a
      className={styles.clientLogoComponent}
      onClick={onClientLogoComponentClick}
    >
      <img className={styles.clientLogoIcon} alt="" src="/client-logo@2x.png" />
    </a>
  );
};

export default ClientLogoComponent;
