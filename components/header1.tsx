import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ClientLogoComponent from "./client-logo-component";
import IconIoniconsSharpMenu from "./icon-ionicons-sharp-menu";
import styles from "./header1.module.css";

type Header1Type = {
  /** Style props */
  headerFlexShrink?: CSSProperties["flexShrink"];

  /** Action props */
  onClientLogoComponentClick?: () => void;
};

const Header1: NextPage<Header1Type> = ({
  headerFlexShrink,
  onClientLogoComponentClick,
}) => {
  const header1Style: CSSProperties = useMemo(() => {
    return {
      flexShrink: headerFlexShrink,
    };
  }, [headerFlexShrink]);

  return (
    <header className={styles.header} style={header1Style}>
      <ClientLogoComponent
        onClientLogoComponentClick={onClientLogoComponentClick}
      />
      <IconIoniconsSharpMenu
        imageDimensions="/icon--ionicons--sharp--menusharp1.svg"
        iconIoniconsSharpMenuWidth="130px"
        iconIoniconsSharpMenuHeight="130px"
        iconIoniconsSharpMenuPosition="relative"
        iconIoniconsSharpMenuFlexShrink="0"
      />
    </header>
  );
};

export default Header1;
