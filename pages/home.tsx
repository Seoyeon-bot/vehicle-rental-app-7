import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header1 from "../components/header1";
import LinkRegularMediumContainer1 from "../components/link-regular-medium-container1";
import Containerfooter1 from "../components/containerfooter1";
import styles from "./home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  const onClientLogoComponentClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className={styles.home}>
      <img
        className={styles.tempimagexkbq5g1Icon}
        alt=""
        src="/tempimagexkbq5g-1@2x.png"
      />
      <Header1
        headerFlexShrink="0"
        onClientLogoComponentClick={onClientLogoComponentClick}
      />
      <main className={styles.containermain}>
        <div className={styles.exampleMain}>
          <i className={styles.home1}>Home</i>
        </div>
        <LinkRegularMediumContainer1 linkText="Confirm Reservation" />
      </main>
      <div className={styles.verticalSpacer} />
      <Containerfooter1
        imageDimensions="/imageour-logo@2x.png"
        containerfooterFlexShrink="unset"
        containerfooterBorderRadius="unset"
        textFooterContainerBorderRadius="unset"
      />
    </div>
  );
};

export default Home;
