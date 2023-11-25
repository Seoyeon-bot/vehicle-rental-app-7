import type { NextPage } from "next";
import ImageDetailsRow from "./image-details-row";
import DetailCell from "./detail-cell";
import Buttonsmallsmall1 from "./buttonsmallsmall1";
import styles from "./details-row-editable.module.css";

type DetailsRowEditableType = {
  text?: string;
  showThirdDetail?: boolean;
};

const DetailsRowEditable: NextPage<DetailsRowEditableType> = ({
  text = "Something Choice",
  showThirdDetail = true,
}) => {
  return (
    <div className={styles.detailsroweditable}>
      <div className={styles.reservationDetailsGroupHead}>
        <div className={styles.reservationDetailsGroupText}>{text}</div>
      </div>
      <div className={styles.reservationDetailsGroupBody}>
        <ImageDetailsRow imageDimensions="/image2@2x.png" />
        <div className={styles.bodyDetails}>
          <DetailCell labelText="Label" valueText="Value" />
          <DetailCell labelText="Label" valueText="Value" />
          <DetailCell labelText="Label" valueText="Value" />
          <Buttonsmallsmall1
            buttonText="Edit"
            buttonsmallsmallCursor="pointer"
            buttonsmallsmallBorder="none"
            buttonsmallsmallPadding="0"
            buttonsmallsmallBackgroundColor="transparent"
            buttonsmallsmallBorderRadius="unset"
            buttonShapeBorderRadius="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsRowEditable;
