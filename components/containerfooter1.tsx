import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Buttonsmallsmall1 from "./buttonsmallsmall1";
import styles from "./containerfooter1.module.css";

type Containerfooter1Type = {
  imageDimensions?: string;

  /** Style props */
  containerfooterFlexShrink?: CSSProperties["flexShrink"];
  containerfooterBorderRadius?: CSSProperties["borderRadius"];
  textFooterContainerBorderRadius?: CSSProperties["borderRadius"];
};

const Containerfooter1: NextPage<Containerfooter1Type> = ({
  imageDimensions,
  containerfooterFlexShrink,
  containerfooterBorderRadius,
  textFooterContainerBorderRadius,
}) => {
  const containerfooter1Style: CSSProperties = useMemo(() => {
    return {
      flexShrink: containerfooterFlexShrink,
    };
  }, [containerfooterFlexShrink]);

  const buttonsmallsmall2Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: containerfooterBorderRadius,
    };
  }, [containerfooterBorderRadius]);

  const buttonShape1Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: textFooterContainerBorderRadius,
    };
  }, [textFooterContainerBorderRadius]);

  return (
    <footer className={styles.containerfooter} style={containerfooter1Style}>
      <div className={styles.textFooterContainer}>
        <div className={styles.textfooter}>
          <span className={styles.textfooterTxt}>
            <p
              className={styles.borrowOurCars}
            >{`© 2023 “Borrow Our Cars” &`}</p>
            <p className={styles.borrowOurCars}>“:thumbsup: design”</p>
          </span>
        </div>
      </div>
      <div className={styles.ourLogoContainer}>
        <img className={styles.imageourLogoIcon} alt="" src={imageDimensions} />
      </div>
      <div className={styles.textFooterContainer}>
        <a className={styles.linkfooter}>About</a>
      </div>
      <Buttonsmallsmall1
        buttonText="Support"
        buttonsmallsmallCursor="pointer"
        buttonsmallsmallBorder="none"
        buttonsmallsmallPadding="0"
        buttonsmallsmallBackgroundColor="transparent"
        buttonsmallsmallBorderRadius="unset"
        buttonShapeBorderRadius="unset"
      />
    </footer>
  );
};

export default Containerfooter1;
