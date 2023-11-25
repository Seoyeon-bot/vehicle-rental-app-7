import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header1 from "./header1";
import StepsGroup from "./steps-group";
import DetailsRowEditable1 from "./details-row-editable1";
import Buttonlargesmall from "./buttonlargesmall";
import Containerfooter1 from "./containerfooter1";
import styles from "./confirm-reservation.module.css";

const ConfirmReservation: NextPage = () => {
  const router = useRouter();

  const onClientLogoComponentClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <a className={styles.confirmReservation}>
      <Header1
        headerFlexShrink="0"
        onClientLogoComponentClick={onClientLogoComponentClick}
      />
      <main className={styles.containermain}>
        <StepsGroup
          stepTitle="Confirm Reservation"
          stepSubtitle="Payment Details"
          stepButtonText="Complete Payment"
        />
        <div className={styles.reservationDetailsSection}>
          <div className={styles.reservationDetailsHeader}>
            <h1 className={styles.reservationDetails}>Reservation Details</h1>
          </div>
          <DetailsRowEditable1
            text="Vehicle Choice"
            labelText2="Make"
            valueText="Geo"
            labelText="Model"
            newYorkNY10007="Year"
            valueText1="Edit"
            showThirdDetail
            showThomasSt
            iconImageMargin="unset"
            iconImageFlexDirection="column"
            iconImageAlignItems="flex-start"
            iconImageJustifyContent="flex-start"
            iconImagePadding="0px var(--padding-3xs)"
            iconImageBoxSizing="border-box"
            iconImageGap="10px"
            detailCellMargin="unset"
            detailCellPosition="relative"
            detailCellFontSize="36px"
            detailCellLetterSpacing="0.5px"
            detailCellLineHeight="100%"
            detailCellFontWeight="500"
            detailCellFontFamily="'Fira Sans'"
            detailCellColor="2px solid #000"
            detailCellTextAlign="center"
            detailCellDisplay="inline-block"
            propFlexDirection="row"
            propPadding="var(--padding-3xs) 0px"
            propGap="unset"
            propBorderBottom="unset"
            propBoxSizing="unset"
            propDisplay="inline-block"
            propFlexDirection1="unset"
            propAlignItems="unset"
            propJustifyContent="unset"
            propPadding1="unset"
            propPosition="relative"
            propFontSize="30px"
            propLetterSpacing="0.5px"
            propLineHeight="100%"
            propFontWeight="500"
            propFontFamily="'Fira Sans'"
            propColor="2px solid #000"
            propTextAlign="left"
            propPosition1="unset"
            propFontSize1="unset"
            propLetterSpacing1="unset"
            propLineHeight1="unset"
            propFontWeight1="unset"
            propFontFamily1="unset"
            propColor1="unset"
            propTextAlign1="unset"
            propDisplay1="flex"
            propCursor="pointer"
            propBorder="none"
            propPadding2="0"
            propBackgroundColor="transparent"
            propFlexDirection2="column"
            propAlignItems1="center"
            propJustifyContent1="center"
            propPadding3="unset"
            propBorder1="2px solid var(--color-black)"
            propWidth="214px"
            propHeight="82px"
            propFontSize2="40px"
            propFontFamily2="Cabin"
            propTextAlign2="center"
            propDisplay2="flex"
            propAlignSelf="stretch"
            propFlex="1"
            propAlignItems2="center"
            propJustifyContent2="center"
          />
          <DetailsRowEditable1
            text="Date Range Choice"
            labelText2="From"
            valueText="10/21/2023"
            labelText="To"
            newYorkNY10007="Label"
            valueText1="Edit"
            showThirdDetail
            showThomasSt={false}
            iconImageMargin="unset"
            iconImageFlexDirection="column"
            iconImageAlignItems="flex-start"
            iconImageJustifyContent="flex-start"
            iconImagePadding="0px var(--padding-3xs)"
            iconImageBoxSizing="border-box"
            iconImageGap="10px"
            detailCellMargin="unset"
            detailCellPosition="relative"
            detailCellFontSize="36px"
            detailCellLetterSpacing="0.5px"
            detailCellLineHeight="100%"
            detailCellFontWeight="500"
            detailCellFontFamily="'Fira Sans'"
            detailCellColor="2px solid #000"
            detailCellTextAlign="center"
            detailCellDisplay="inline-block"
            propFlexDirection="row"
            propPadding="var(--padding-3xs) 0px"
            propGap="unset"
            propBorderBottom="unset"
            propBoxSizing="unset"
            propDisplay="inline-block"
            propFlexDirection1="unset"
            propAlignItems="unset"
            propJustifyContent="unset"
            propPadding1="unset"
            propPosition="relative"
            propFontSize="30px"
            propLetterSpacing="0.5px"
            propLineHeight="100%"
            propFontWeight="500"
            propFontFamily="'Fira Sans'"
            propColor="2px solid #000"
            propTextAlign="left"
            propPosition1="unset"
            propFontSize1="unset"
            propLetterSpacing1="unset"
            propLineHeight1="unset"
            propFontWeight1="unset"
            propFontFamily1="unset"
            propColor1="unset"
            propTextAlign1="unset"
            propDisplay1="flex"
            propCursor="pointer"
            propBorder="none"
            propPadding2="0"
            propBackgroundColor="transparent"
            propFlexDirection2="column"
            propAlignItems1="center"
            propJustifyContent1="center"
            propPadding3="unset"
            propBorder1="2px solid var(--color-black)"
            propWidth="214px"
            propHeight="82px"
            propFontSize2="40px"
            propFontFamily2="Cabin"
            propTextAlign2="center"
            propDisplay2="flex"
            propAlignSelf="stretch"
            propFlex="1"
            propAlignItems2="center"
            propJustifyContent2="center"
          />
          <DetailsRowEditable1
            text="Location Choice"
            labelText2="Lot ID"
            valueText="A-1"
            labelText="Lot Address"
            thomasSt="33 Thomas St"
            newYorkNY10007="New York, NY 10007"
            labelText1="Label"
            valueText1="Value"
            showThirdDetail={false}
            showThomasSt
          />
          <div className={styles.proceedButtonSection}>
            <Buttonlargesmall
              buttonText="Proceed to Payment"
              buttonlargesmallCursor="pointer"
              buttonlargesmallBorder="none"
              buttonlargesmallPadding="0"
              buttonlargesmallBackgroundColor="transparent"
            />
          </div>
        </div>
      </main>
      <div className={styles.verticalSpacer} />
      <Containerfooter1
        imageDimensions="/imageour-logo@2x.png"
        containerfooterFlexShrink="0"
        containerfooterBorderRadius="var(--br-31xl) 0px 0px 50px"
        textFooterContainerBorderRadius="90px"
      />
    </a>
  );
};

export default ConfirmReservation;
