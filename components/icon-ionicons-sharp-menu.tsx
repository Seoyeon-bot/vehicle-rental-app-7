import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./icon-ionicons-sharp-menu.module.css";

type IconIoniconsSharpMenuType = {
  imageDimensions?: string;

  /** Style props */
  iconIoniconsSharpMenuWidth?: CSSProperties["width"];
  iconIoniconsSharpMenuHeight?: CSSProperties["height"];
  iconIoniconsSharpMenuPosition?: CSSProperties["position"];
  iconIoniconsSharpMenuFlexShrink?: CSSProperties["flexShrink"];
};

const IconIoniconsSharpMenu: NextPage<IconIoniconsSharpMenuType> = ({
  imageDimensions,
  iconIoniconsSharpMenuWidth,
  iconIoniconsSharpMenuHeight,
  iconIoniconsSharpMenuPosition,
  iconIoniconsSharpMenuFlexShrink,
}) => {
  const iconIoniconsSharpMenuStyle: CSSProperties = useMemo(() => {
    return {
      width: iconIoniconsSharpMenuWidth,
      height: iconIoniconsSharpMenuHeight,
      position: iconIoniconsSharpMenuPosition,
      flexShrink: iconIoniconsSharpMenuFlexShrink,
    };
  }, [
    iconIoniconsSharpMenuWidth,
    iconIoniconsSharpMenuHeight,
    iconIoniconsSharpMenuPosition,
    iconIoniconsSharpMenuFlexShrink,
  ]);

  return (
    <img
      className={styles.iconIoniconsSharpMenu}
      alt=""
      src={imageDimensions}
      style={iconIoniconsSharpMenuStyle}
    />
  );
};

export default IconIoniconsSharpMenu;
