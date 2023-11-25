import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./search-bar.module.css";

type SearchBarType = {
  dimensionCode?: string;

  /** Style props */
  searchBarJustifyContent?: CSSProperties["justifyContent"];
  searchBarFieldHeight?: CSSProperties["height"];
  searchVehiclesBorder?: CSSProperties["border"];
  searchVehiclesBackgroundColor?: CSSProperties["backgroundColor"];
  searchVehiclesDisplay?: CSSProperties["display"];
  searchVehiclesAlignItems?: CSSProperties["alignItems"];
  searchVehiclesWidth?: CSSProperties["width"];
  searchVehiclesFlexShrink?: CSSProperties["flexShrink"];
  searchVehiclesFlex?: CSSProperties["flex"];
};

const SearchBar: NextPage<SearchBarType> = ({
  dimensionCode,
  searchBarJustifyContent,
  searchBarFieldHeight,
  searchVehiclesBorder,
  searchVehiclesBackgroundColor,
  searchVehiclesDisplay,
  searchVehiclesAlignItems,
  searchVehiclesWidth,
  searchVehiclesFlexShrink,
  searchVehiclesFlex,
}) => {
  const searchBarStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: searchBarJustifyContent,
    };
  }, [searchBarJustifyContent]);

  const searchBarFieldStyle: CSSProperties = useMemo(() => {
    return {
      height: searchBarFieldHeight,
    };
  }, [searchBarFieldHeight]);

  const searchVehiclesStyle: CSSProperties = useMemo(() => {
    return {
      border: searchVehiclesBorder,
      backgroundColor: searchVehiclesBackgroundColor,
      display: searchVehiclesDisplay,
      alignItems: searchVehiclesAlignItems,
      width: searchVehiclesWidth,
      flexShrink: searchVehiclesFlexShrink,
      flex: searchVehiclesFlex,
    };
  }, [
    searchVehiclesBorder,
    searchVehiclesBackgroundColor,
    searchVehiclesDisplay,
    searchVehiclesAlignItems,
    searchVehiclesWidth,
    searchVehiclesFlexShrink,
    searchVehiclesFlex,
  ]);

  return (
    <div className={styles.searchBar} style={searchBarStyle}>
      <div className={styles.searchBarField} style={searchBarFieldStyle}>
        <div className={styles.searchVehicles} style={searchVehiclesStyle}>
          Search vehicles...
        </div>
      </div>
      <div className={styles.searchBarIcon}>
        <img
          className={styles.searchBarFragment1Icon}
          alt=""
          src={dimensionCode}
        />
      </div>
    </div>
  );
};

export default SearchBar;
