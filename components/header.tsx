import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./header.module.css";

type HeaderType = {
  imageDimensions?: string;

  /** Style props */
  headerHeight?: CSSProperties["height"];
  headerFlexShrink?: CSSProperties["flexShrink"];
  clientLogoComponentWidth?: CSSProperties["width"];
  clientLogoIconWidth?: CSSProperties["width"];
  clientLogoIconAlignSelf?: CSSProperties["alignSelf"];
  clientLogoIconMaxWidth?: CSSProperties["maxWidth"];
  clientLogoIconOverflow?: CSSProperties["overflow"];
  clientLogoIconFlexShrink?: CSSProperties["flexShrink"];
  searchBarJustifyContent?: CSSProperties["justifyContent"];
  searchBarFieldHeight?: CSSProperties["height"];
  searchVehiclesDisplay?: CSSProperties["display"];
  searchVehiclesAlignItems?: CSSProperties["alignItems"];
  searchVehiclesWidth?: CSSProperties["width"];
  searchVehiclesFlexShrink?: CSSProperties["flexShrink"];
  searchVehiclesFlex?: CSSProperties["flex"];

  /** Action props */
  onClientLogoComponentClick?: () => void;
};

const Header: NextPage<HeaderType> = ({
  imageDimensions,
  headerHeight,
  headerFlexShrink,
  clientLogoComponentWidth,
  clientLogoIconWidth,
  clientLogoIconAlignSelf,
  clientLogoIconMaxWidth,
  clientLogoIconOverflow,
  clientLogoIconFlexShrink,
  searchBarJustifyContent,
  searchBarFieldHeight,
  searchVehiclesDisplay,
  searchVehiclesAlignItems,
  searchVehiclesWidth,
  searchVehiclesFlexShrink,
  searchVehiclesFlex,
  onClientLogoComponentClick,
}) => {
  const headerStyle: CSSProperties = useMemo(() => {
    return {
      height: headerHeight,
      flexShrink: headerFlexShrink,
    };
  }, [headerHeight, headerFlexShrink]);

  const clientLogoComponentStyle: CSSProperties = useMemo(() => {
    return {
      width: clientLogoComponentWidth,
    };
  }, [clientLogoComponentWidth]);

  const clientLogoIconStyle: CSSProperties = useMemo(() => {
    return {
      width: clientLogoIconWidth,
      alignSelf: clientLogoIconAlignSelf,
      maxWidth: clientLogoIconMaxWidth,
      overflow: clientLogoIconOverflow,
      flexShrink: clientLogoIconFlexShrink,
    };
  }, [
    clientLogoIconWidth,
    clientLogoIconAlignSelf,
    clientLogoIconMaxWidth,
    clientLogoIconOverflow,
    clientLogoIconFlexShrink,
  ]);

  const searchBar1Style: CSSProperties = useMemo(() => {
    return {
      justifyContent: searchBarJustifyContent,
    };
  }, [searchBarJustifyContent]);

  const searchBarField1Style: CSSProperties = useMemo(() => {
    return {
      height: searchBarFieldHeight,
    };
  }, [searchBarFieldHeight]);

  const searchVehicles1Style: CSSProperties = useMemo(() => {
    return {
      display: searchVehiclesDisplay,
      alignItems: searchVehiclesAlignItems,
      width: searchVehiclesWidth,
      flexShrink: searchVehiclesFlexShrink,
      flex: searchVehiclesFlex,
    };
  }, [
    searchVehiclesDisplay,
    searchVehiclesAlignItems,
    searchVehiclesWidth,
    searchVehiclesFlexShrink,
    searchVehiclesFlex,
  ]);

  return (
    <header className={styles.header} style={headerStyle}>
      <a
        className={styles.clientLogoComponent}
        onClick={onClientLogoComponentClick}
        style={clientLogoComponentStyle}
      >
        <img
          className={styles.clientLogoIcon}
          alt=""
          src="/client-logo@2x.png"
          style={clientLogoIconStyle}
        />
      </a>
      <div className={styles.searchBar} style={searchBar1Style}>
        <div className={styles.searchBarField} style={searchBarField1Style}>
          <input
            className={styles.searchVehicles}
            placeholder="Search vehicles..."
            type="text"
            style={searchVehicles1Style}
          />
        </div>
        <div className={styles.searchBarIcon}>
          <img
            className={styles.searchBarFragment1Icon}
            alt=""
            src={imageDimensions}
          />
        </div>
      </div>
      <button className={styles.buttonsmallsmall}>
        <div className={styles.buttonShape}>
          <div className={styles.buttonText}>Browse</div>
        </div>
      </button>
      <div className={styles.searchBar}>
        <img className={styles.userIcon} alt="" src="/user-icon@2x.png" />
      </div>
    </header>
  );
};

export default Header;
