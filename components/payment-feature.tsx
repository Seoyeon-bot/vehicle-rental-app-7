import type { NextPage } from "next";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "./header";
import StateDefaultTextareaFalse from "./state-default-textarea-false";
import StyleOutlineSizeLBrand from "./style-outline-size-l-brand";
import StyleSimpleDirectionNone from "./style-simple-direction-none";
import TextareaFalseErrorFalse from "./textarea-false-error-false";
import RulesAndRestric from "./rules-and-restric";
import AlignmentCenter from "./alignment-center";
import PlaceholderPicture from "./placeholder-picture";
import Containerfooter from "./containerfooter";
import styles from "./payment-feature.module.css";

const PaymentFeature: NextPage = () => {
  const router = useRouter();

  const onClientLogoComponentClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <a
      className={styles.paymentFeature}
      href="http//rentalcar.payment.com"
      target="_blank"
      data-animate-on-scroll
    >
      <Header
        imageDimensions="/search-bar-fragment-1@2x.png"
        headerHeight="115px"
        headerFlexShrink="0"
        clientLogoComponentWidth="220px"
        clientLogoIconWidth="unset"
        clientLogoIconAlignSelf="stretch"
        clientLogoIconMaxWidth="100%"
        clientLogoIconOverflow="hidden"
        clientLogoIconFlexShrink="0"
        searchBarJustifyContent="space-between"
        searchBarFieldHeight="unset"
        searchVehiclesDisplay="inline-block"
        searchVehiclesAlignItems="unset"
        searchVehiclesWidth="unset"
        searchVehiclesFlexShrink="unset"
        searchVehiclesFlex="1"
        onClientLogoComponentClick={onClientLogoComponentClick}
      />
      <main className={styles.gatherInformation}>
        <div className={styles.reservationConfirmation} />
        <StateDefaultTextareaFalse
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--search1.svg"
          text1="First Name"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown1.svg"
          iconRight
          text
          iconLeft={false}
          stateDefaultTextareaFalseWidth="332px"
          stateDefaultTextareaFalseBorderBottom="1px solid var(--primary-30)"
          stateDefaultTextareaFalseAlignSelf="unset"
          stateDefaultTextareaFalseBorder="unset"
          stateDefaultTextareaFalseBackgroundColor="1px solid #a6c8ff"
          stateDefaultTextareaFalseJustifyContent="center"
          stateDefaultTextareaFalseMargin="inline "
          stateDefaultTextareaFalsePosition="absolute"
          stateDefaultTextareaFalseTop="50px"
          stateDefaultTextareaFalseLeft="30px"
          stateDefaultTextareaFalseZIndex="1"
          textColor="#697077"
          textTextAlign="center"
          stateDefaultTextareaFalseOverflow="unset"
          stateDefaultTextareaFalseFlexShrink="unset"
        />
        <StateDefaultTextareaFalse
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--search1.svg"
          text1="Enter Last Name"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown1.svg"
          iconRight
          text
          iconLeft={false}
          stateDefaultTextareaFalseWidth="334px"
          stateDefaultTextareaFalseBorderBottom="1px solid var(--coolgray-30)"
          stateDefaultTextareaFalseAlignSelf="unset"
          stateDefaultTextareaFalseBorder="unset"
          stateDefaultTextareaFalseBackgroundColor="1px solid #a6c8ff"
          stateDefaultTextareaFalseJustifyContent="center"
          stateDefaultTextareaFalseMargin="0 !important"
          stateDefaultTextareaFalsePosition="absolute"
          stateDefaultTextareaFalseTop="50px"
          stateDefaultTextareaFalseLeft="600px"
          stateDefaultTextareaFalseZIndex="2"
          textColor="#697077"
          textTextAlign="center"
          stateDefaultTextareaFalseOverflow="unset"
          stateDefaultTextareaFalseFlexShrink="unset"
        />
        <StateDefaultTextareaFalse
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--search1.svg"
          text1="Enter Phone Number"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown1.svg"
          iconRight
          text
          iconLeft={false}
          stateDefaultTextareaFalseWidth="332px"
          stateDefaultTextareaFalseBorderBottom="1px solid var(--coolgray-30)"
          stateDefaultTextareaFalseAlignSelf="unset"
          stateDefaultTextareaFalseBorder="unset"
          stateDefaultTextareaFalseBackgroundColor="1px solid #a6c8ff"
          stateDefaultTextareaFalseJustifyContent="center"
          stateDefaultTextareaFalseMargin="0 !important"
          stateDefaultTextareaFalsePosition="absolute"
          stateDefaultTextareaFalseTop="190px"
          stateDefaultTextareaFalseLeft="30px"
          stateDefaultTextareaFalseZIndex="3"
          textColor="#697077"
          textTextAlign="center"
          stateDefaultTextareaFalseOverflow="hidden"
          stateDefaultTextareaFalseFlexShrink="0"
        />
        <StateDefaultTextareaFalse
          iconJamIconsOutlineLogos="/icon--jamicons--outline--logos--search1.svg"
          text1="Enter Email Address"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--chevrondown1.svg"
          iconRight
          text
          iconLeft={false}
          stateDefaultTextareaFalseWidth="334px"
          stateDefaultTextareaFalseBorderBottom="1px solid var(--coolgray-30)"
          stateDefaultTextareaFalseAlignSelf="unset"
          stateDefaultTextareaFalseBorder="unset"
          stateDefaultTextareaFalseBackgroundColor="1px solid #a6c8ff"
          stateDefaultTextareaFalseJustifyContent="center"
          stateDefaultTextareaFalseMargin="0 !important"
          stateDefaultTextareaFalsePosition="absolute"
          stateDefaultTextareaFalseTop="190px"
          stateDefaultTextareaFalseLeft="600px"
          stateDefaultTextareaFalseZIndex="4"
          textColor="#697077"
          textTextAlign="center"
          stateDefaultTextareaFalseOverflow="hidden"
          stateDefaultTextareaFalseFlexShrink="0"
        />
      </main>
      <main className={styles.calculateTotalCost} data-animate-on-scroll>
        <div className={styles.reservationConfirmation1}>
          <img
            className={styles.fordescapeimageIcon}
            alt=""
            src="/fordescapeimage@2x.png"
          />
        </div>
        <StyleOutlineSizeLBrand
          iconJamIconsOutlineLogos="/icon--tablericons--brandstripe.svg"
          text1="Pay with Stripe"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright.svg"
          text
          iconLeft
          iconRight={false}
          styleOutlineSizeLBrandMargin="0 !important"
          styleOutlineSizeLBrandPosition="absolute"
          styleOutlineSizeLBrandTop="338px"
          styleOutlineSizeLBrandLeft="874px"
          styleOutlineSizeLBrandBorderRadius="10px"
          styleOutlineSizeLBrandWidth="unset"
          styleOutlineSizeLBrandOverflow="hidden"
          styleOutlineSizeLBrandFlexShrink="0"
          styleOutlineSizeLBrandZIndex="1"
          styleOutlineSizeLBrandHeight="38px"
          styleOutlineSizeLBrandJustifyContent="center"
          styleOutlineSizeLBrandAlignSelf="stretch"
          textContainerJustifyContent="center"
          textContainerOpacity="unset"
        />
        <StyleSimpleDirectionNone
          showLabel={false}
          styleSimpleDirectionNoneMargin="Inline"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="15px"
          styleSimpleDirectionNoneLeft="30px"
          styleSimpleDirectionNoneBorderRadius="5px"
          styleSimpleDirectionNoneBackgroundColor="1px solid #a6c8ff"
          styleSimpleDirectionNoneBorder="1px solid var(--color-black)"
          styleSimpleDirectionNoneBoxSizing="border-box"
          styleSimpleDirectionNoneWidth="340px"
          styleSimpleDirectionNoneHeight="45px"
          styleSimpleDirectionNoneMixBlendMode="normal"
          styleSimpleDirectionNoneZIndex="2"
          styleSimpleDirectionNoneJustifyContent="flex-end"
          styleSimpleDirectionNoneBoxShadow="unset"
          styleSimpleDirectionNoneOverflow="unset"
          styleSimpleDirectionNoneFlexShrink="unset"
          labelColor="#121619"
          labelAlignSelf="stretch"
          labelWhiteSpace="pre-wrap"
          labelWidth="24px"
          labelFlexShrink="0"
        />
        <StyleSimpleDirectionNone
          text="Rental Car Cost Per Day"
          showLabel
          styleSimpleDirectionNoneMargin="0 !important"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="15px"
          styleSimpleDirectionNoneLeft="31px"
          styleSimpleDirectionNoneBorderRadius="unset"
          styleSimpleDirectionNoneBackgroundColor="unset"
          styleSimpleDirectionNoneBorder="unset"
          styleSimpleDirectionNoneBoxSizing="unset"
          styleSimpleDirectionNoneWidth="337px"
          styleSimpleDirectionNoneHeight="45px"
          styleSimpleDirectionNoneMixBlendMode="normal"
          styleSimpleDirectionNoneZIndex="3"
          styleSimpleDirectionNoneJustifyContent="space-between"
          styleSimpleDirectionNoneBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25) inset"
          styleSimpleDirectionNoneOverflow="hidden"
          styleSimpleDirectionNoneFlexShrink="0"
          labelColor="#121619"
          labelAlignSelf="unset"
          labelWhiteSpace="unset"
          labelWidth="unset"
          labelFlexShrink="unset"
        />
        <StyleSimpleDirectionNone
          showLabel={false}
          styleSimpleDirectionNoneMargin="0 !important"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="83px"
          styleSimpleDirectionNoneLeft="30px"
          styleSimpleDirectionNoneBorderRadius="5px"
          styleSimpleDirectionNoneBackgroundColor="1px solid #a6c8ff"
          styleSimpleDirectionNoneBorder="1px solid var(--color-black)"
          styleSimpleDirectionNoneBoxSizing="border-box"
          styleSimpleDirectionNoneWidth="340px"
          styleSimpleDirectionNoneHeight="45px"
          styleSimpleDirectionNoneMixBlendMode="normal"
          styleSimpleDirectionNoneZIndex="4"
          styleSimpleDirectionNoneJustifyContent="flex-end"
          styleSimpleDirectionNoneBoxShadow="unset"
          styleSimpleDirectionNoneOverflow="unset"
          styleSimpleDirectionNoneFlexShrink="unset"
          labelColor="#121619"
          labelAlignSelf="stretch"
          labelWhiteSpace="pre-wrap"
          labelWidth="24px"
          labelFlexShrink="0"
        />
        <StyleSimpleDirectionNone
          showLabel={false}
          styleSimpleDirectionNoneMargin="0 !important"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="170px"
          styleSimpleDirectionNoneLeft="30px"
          styleSimpleDirectionNoneBorderRadius="5px"
          styleSimpleDirectionNoneBackgroundColor="1px solid #a6c8ff"
          styleSimpleDirectionNoneBorder="1px solid var(--color-black)"
          styleSimpleDirectionNoneBoxSizing="border-box"
          styleSimpleDirectionNoneWidth="340px"
          styleSimpleDirectionNoneHeight="45px"
          styleSimpleDirectionNoneMixBlendMode="normal"
          styleSimpleDirectionNoneZIndex="5"
          styleSimpleDirectionNoneJustifyContent="flex-end"
          styleSimpleDirectionNoneBoxShadow="unset"
          styleSimpleDirectionNoneOverflow="unset"
          styleSimpleDirectionNoneFlexShrink="unset"
          labelColor="#121619"
          labelAlignSelf="stretch"
          labelWhiteSpace="pre-wrap"
          labelWidth="24px"
          labelFlexShrink="0"
        />
        <StyleSimpleDirectionNone
          showLabel={false}
          styleSimpleDirectionNoneMargin="0 !important"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="247px"
          styleSimpleDirectionNoneLeft="30px"
          styleSimpleDirectionNoneBorderRadius="5px"
          styleSimpleDirectionNoneBackgroundColor="1px solid #a6c8ff"
          styleSimpleDirectionNoneBorder="1px solid var(--color-black)"
          styleSimpleDirectionNoneBoxSizing="border-box"
          styleSimpleDirectionNoneWidth="340px"
          styleSimpleDirectionNoneHeight="45px"
          styleSimpleDirectionNoneMixBlendMode="normal"
          styleSimpleDirectionNoneZIndex="6"
          styleSimpleDirectionNoneJustifyContent="flex-end"
          styleSimpleDirectionNoneBoxShadow="unset"
          styleSimpleDirectionNoneOverflow="unset"
          styleSimpleDirectionNoneFlexShrink="unset"
          labelColor="#121619"
          labelAlignSelf="stretch"
          labelWhiteSpace="pre-wrap"
          labelWidth="24px"
          labelFlexShrink="0"
        />
        <StyleSimpleDirectionNone
          text="numberOfDays"
          showLabel
          styleSimpleDirectionNoneMargin="0 !important"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="83px"
          styleSimpleDirectionNoneLeft="31px"
          styleSimpleDirectionNoneBorderRadius="unset"
          styleSimpleDirectionNoneBackgroundColor="unset"
          styleSimpleDirectionNoneBorder="unset"
          styleSimpleDirectionNoneBoxSizing="unset"
          styleSimpleDirectionNoneWidth="337px"
          styleSimpleDirectionNoneHeight="45px"
          styleSimpleDirectionNoneMixBlendMode="unset"
          styleSimpleDirectionNoneZIndex="7"
          styleSimpleDirectionNoneJustifyContent="space-between"
          styleSimpleDirectionNoneBoxShadow="unset"
          styleSimpleDirectionNoneOverflow="hidden"
          styleSimpleDirectionNoneFlexShrink="0"
          labelColor="#121619"
          labelAlignSelf="unset"
          labelWhiteSpace="unset"
          labelWidth="unset"
          labelFlexShrink="unset"
        />
        <StyleSimpleDirectionNone
          text="Security Deposit Fee $100"
          showLabel
          styleSimpleDirectionNoneMargin="0 !important"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="170px"
          styleSimpleDirectionNoneLeft="28px"
          styleSimpleDirectionNoneBorderRadius="unset"
          styleSimpleDirectionNoneBackgroundColor="unset"
          styleSimpleDirectionNoneBorder="unset"
          styleSimpleDirectionNoneBoxSizing="unset"
          styleSimpleDirectionNoneWidth="343px"
          styleSimpleDirectionNoneHeight="45px"
          styleSimpleDirectionNoneMixBlendMode="unset"
          styleSimpleDirectionNoneZIndex="8"
          styleSimpleDirectionNoneJustifyContent="space-between"
          styleSimpleDirectionNoneBoxShadow="unset"
          styleSimpleDirectionNoneOverflow="hidden"
          styleSimpleDirectionNoneFlexShrink="0"
          labelColor="#121619"
          labelAlignSelf="unset"
          labelWhiteSpace="unset"
          labelWidth="unset"
          labelFlexShrink="unset"
        />
        <StyleSimpleDirectionNone
          showLabel={false}
          styleSimpleDirectionNoneMargin="0 !important"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="322px"
          styleSimpleDirectionNoneLeft="30px"
          styleSimpleDirectionNoneBorderRadius="5px"
          styleSimpleDirectionNoneBackgroundColor="1px solid #a6c8ff"
          styleSimpleDirectionNoneBorder="1px solid var(--color-black)"
          styleSimpleDirectionNoneBoxSizing="border-box"
          styleSimpleDirectionNoneWidth="340px"
          styleSimpleDirectionNoneHeight="45px"
          styleSimpleDirectionNoneMixBlendMode="normal"
          styleSimpleDirectionNoneZIndex="9"
          styleSimpleDirectionNoneJustifyContent="flex-end"
          styleSimpleDirectionNoneBoxShadow="unset"
          styleSimpleDirectionNoneOverflow="unset"
          styleSimpleDirectionNoneFlexShrink="unset"
          labelColor="#121619"
          labelAlignSelf="stretch"
          labelWhiteSpace="pre-wrap"
          labelWidth="24px"
          labelFlexShrink="0"
        />
        <StyleSimpleDirectionNone
          text="Taxes and Fees"
          showLabel
          styleSimpleDirectionNoneMargin="0 !important"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="247px"
          styleSimpleDirectionNoneLeft="31px"
          styleSimpleDirectionNoneBorderRadius="unset"
          styleSimpleDirectionNoneBackgroundColor="unset"
          styleSimpleDirectionNoneBorder="unset"
          styleSimpleDirectionNoneBoxSizing="unset"
          styleSimpleDirectionNoneWidth="340px"
          styleSimpleDirectionNoneHeight="45px"
          styleSimpleDirectionNoneMixBlendMode="unset"
          styleSimpleDirectionNoneZIndex="10"
          styleSimpleDirectionNoneJustifyContent="space-between"
          styleSimpleDirectionNoneBoxShadow="unset"
          styleSimpleDirectionNoneOverflow="hidden"
          styleSimpleDirectionNoneFlexShrink="0"
          labelColor="#121619"
          labelAlignSelf="unset"
          labelWhiteSpace="unset"
          labelWidth="unset"
          labelFlexShrink="unset"
        />
        <StyleSimpleDirectionNone
          text="Total"
          showLabel
          styleSimpleDirectionNoneMargin="0 !important"
          styleSimpleDirectionNonePosition="absolute"
          styleSimpleDirectionNoneTop="323px"
          styleSimpleDirectionNoneLeft="31px"
          styleSimpleDirectionNoneBorderRadius="unset"
          styleSimpleDirectionNoneBackgroundColor="unset"
          styleSimpleDirectionNoneBorder="unset"
          styleSimpleDirectionNoneBoxSizing="unset"
          styleSimpleDirectionNoneWidth="337px"
          styleSimpleDirectionNoneHeight="44px"
          styleSimpleDirectionNoneMixBlendMode="unset"
          styleSimpleDirectionNoneZIndex="11"
          styleSimpleDirectionNoneJustifyContent="space-between"
          styleSimpleDirectionNoneBoxShadow="unset"
          styleSimpleDirectionNoneOverflow="hidden"
          styleSimpleDirectionNoneFlexShrink="0"
          labelColor="#121619"
          labelAlignSelf="unset"
          labelWhiteSpace="unset"
          labelWidth="unset"
          labelFlexShrink="unset"
        />
        <TextareaFalseErrorFalse
          labelIconUrl="/icon--jamicons--outline--logos--search1.svg"
          labelIconImageUrl="/icon--jamicons--outline--logos--chevrondown.svg"
          description1="Car Price Per Day"
          description={false}
          label={false}
          textareaFalseErrorFalseWidth="221px"
          textareaFalseErrorFalseMargin="Inline"
          textareaFalseErrorFalsePosition="absolute"
          textareaFalseErrorFalseTop="15px"
          textareaFalseErrorFalseLeft="420px"
          textareaFalseErrorFalseHeight="43px"
          textareaFalseErrorFalseZIndex="12"
          text1="Placeholder"
          iconRight={false}
          text
          iconLeft={false}
        />
        <TextareaFalseErrorFalse
          label1="Label Name"
          labelIconUrl="/icon--jamicons--outline--logos--search1.svg"
          labelIconImageUrl="/icon--jamicons--outline--logos--chevrondown.svg"
          description1="Helper text goes here"
          description={false}
          label={false}
          textareaFalseErrorFalseWidth="221px"
          textareaFalseErrorFalseMargin="0 !important"
          textareaFalseErrorFalsePosition="absolute"
          textareaFalseErrorFalseTop="85px"
          textareaFalseErrorFalseLeft="420px"
          textareaFalseErrorFalseHeight="44px"
          textareaFalseErrorFalseZIndex="13"
          text1="Placeholder"
          iconRight={false}
          text
          iconLeft={false}
        />
        <TextareaFalseErrorFalse
          label1="Label Name"
          labelIconUrl="/icon--jamicons--outline--logos--search1.svg"
          labelIconImageUrl="/icon--jamicons--outline--logos--chevrondown.svg"
          description1="Helper text goes here"
          description={false}
          label={false}
          textareaFalseErrorFalseWidth="221px"
          textareaFalseErrorFalseMargin="0 !important"
          textareaFalseErrorFalsePosition="absolute"
          textareaFalseErrorFalseTop="170px"
          textareaFalseErrorFalseLeft="420px"
          textareaFalseErrorFalseHeight="37px"
          textareaFalseErrorFalseZIndex="14"
          text1="Placeholder"
          iconRight={false}
          text
          iconLeft={false}
        />
        <TextareaFalseErrorFalse
          label1="Label Name"
          labelIconUrl="/icon--jamicons--outline--logos--search1.svg"
          labelIconImageUrl="/icon--jamicons--outline--logos--chevrondown.svg"
          description1="Helper text goes here"
          description={false}
          label={false}
          textareaFalseErrorFalseWidth="221px"
          textareaFalseErrorFalseMargin="0 !important"
          textareaFalseErrorFalsePosition="absolute"
          textareaFalseErrorFalseTop="245px"
          textareaFalseErrorFalseLeft="420px"
          textareaFalseErrorFalseHeight="45px"
          textareaFalseErrorFalseZIndex="15"
          text1="Placeholder"
          iconRight={false}
          text
          iconLeft={false}
        />
        <TextareaFalseErrorFalse
          label1="Label Name"
          labelIconUrl="/icon--jamicons--outline--logos--search1.svg"
          labelIconImageUrl="/icon--jamicons--outline--logos--chevrondown.svg"
          description1="Helper text goes here"
          description={false}
          label={false}
          textareaFalseErrorFalseWidth="221px"
          textareaFalseErrorFalseMargin="0 !important"
          textareaFalseErrorFalsePosition="absolute"
          textareaFalseErrorFalseTop="320px"
          textareaFalseErrorFalseLeft="420px"
          textareaFalseErrorFalseHeight="36px"
          textareaFalseErrorFalseZIndex="16"
          text1="Placeholder"
          iconRight={false}
          text
          iconLeft={false}
        />
      </main>
      <img
        className={styles.carimagebackgroundIcon}
        alt=""
        src="/carimagebackground@2x.png"
      />
      <main className={styles.rentalCarRulesrestition}>
        <RulesAndRestric
          linkRegularMediumContaineAlignSelf="stretch"
          linkRegularMediumContaineZIndex="0"
          linkRegularMediumContaineAlignItems="center"
          linkRegularMediumContaineJustifyContent="center"
          linkRegularMediumContaineWidth="unset"
          linkRegularMediumContaineHeight="unset"
          linkRegularMediumContaineMargin="unset"
          linkRegularMediumContainePosition="unset"
          linkRegularMediumContaineTop="unset"
          linkRegularMediumContaineLeft="unset"
        />
        <AlignmentCenter
          caption="Caption"
          headline1="View rules and restrictions"
          text="Drivers under 25 years of age may need to pay an extra fee. Get a rental car insurance plan If you don't have one yet."
          caption
          text
          headline1
          headline2
          alignmentCenterHeight="339px"
          alignmentCenterOverflow="hidden"
          alignmentCenterFlexShrink="0"
          alignmentCenterZIndex="1"
          loremIpsumDolorMarginBlockStart="unset"
          loremIpsumDolorMarginBlockEnd="unset"
          loremIpsumDolorAlignSelf="stretch"
          loremIpsumDolorPosition="relative"
          loremIpsumDolorFontSize="18px"
          loremIpsumDolorLineHeight="140%"
          loremIpsumDolorFontFamily="Roboto"
          loremIpsumDolorColor="#21272a"
          loremIpsumDolorTextAlign="center"
          loremIpsumDolorDisplay="inline-block"
          paragraphAlignSelf="unset"
          paragraphPosition="unset"
          paragraphFontSize="unset"
          paragraphLineHeight="unset"
          paragraphFontFamily="unset"
          paragraphColor="unset"
          paragraphTextAlign="unset"
          paragraphMargin="0"
        />
        <StyleOutlineSizeLBrand
          iconJamIconsOutlineLogos="/icon--feathericons--checksquare.svg"
          text1="I agree"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright1.svg"
          text
          iconLeft
          iconRight={false}
          styleOutlineSizeLBrandMargin="inline"
          styleOutlineSizeLBrandPosition="absolute"
          styleOutlineSizeLBrandTop="373px"
          styleOutlineSizeLBrandLeft="958px"
          styleOutlineSizeLBrandBorderRadius="10px"
          styleOutlineSizeLBrandWidth="166px"
          styleOutlineSizeLBrandOverflow="hidden"
          styleOutlineSizeLBrandFlexShrink="0"
          styleOutlineSizeLBrandZIndex="2"
          styleOutlineSizeLBrandHeight="53px"
          styleOutlineSizeLBrandJustifyContent="center"
          styleOutlineSizeLBrandAlignSelf="unset"
          textContainerJustifyContent="center"
          textContainerOpacity="unset"
        />
        <RulesAndRestric
          linkRegularMediumContaineAlignSelf="unset"
          linkRegularMediumContaineZIndex="3"
          linkRegularMediumContaineAlignItems="flex-start"
          linkRegularMediumContaineJustifyContent="space-between"
          linkRegularMediumContaineWidth="234px"
          linkRegularMediumContaineHeight="62px"
          linkRegularMediumContaineMargin="unset"
          linkRegularMediumContainePosition="unset"
          linkRegularMediumContaineTop="unset"
          linkRegularMediumContaineLeft="unset"
        />
      </main>
      <div className={styles.reservationConfirmation2}>
        <PlaceholderPicture
          imageDimensions="/driver-insurance-picture-uplaod@2x.png"
          placeholderPictureMargin="0 !important"
          placeholderPicturePosition="absolute"
          placeholderPictureTop="20px"
          placeholderPictureLeft="660px"
          placeholderPictureZIndex="0"
          placeholderPictureOverflow="hidden"
          placeholderPictureFlexShrink="0"
        />
        <StyleOutlineSizeLBrand
          iconJamIconsOutlineLogos="/icon--feathericons--upload.svg"
          text1="Upload Driving license"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright2.svg"
          text
          iconLeft
          iconRight={false}
          styleOutlineSizeLBrandMargin="0 !important"
          styleOutlineSizeLBrandPosition="absolute"
          styleOutlineSizeLBrandTop="280px"
          styleOutlineSizeLBrandLeft="70px"
          styleOutlineSizeLBrandBorderRadius="10px"
          styleOutlineSizeLBrandWidth="unset"
          styleOutlineSizeLBrandOverflow="hidden"
          styleOutlineSizeLBrandFlexShrink="0"
          styleOutlineSizeLBrandZIndex="1"
          styleOutlineSizeLBrandHeight="45px"
          styleOutlineSizeLBrandJustifyContent="space-between"
          styleOutlineSizeLBrandAlignSelf="unset"
          textContainerJustifyContent="space-between"
          textContainerOpacity="unset"
        />
        <StyleOutlineSizeLBrand
          iconJamIconsOutlineLogos="/icon--feathericons--upload.svg"
          text1="Upload Driver's Insurance"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright2.svg"
          text
          iconLeft
          iconRight={false}
          styleOutlineSizeLBrandMargin="0 !important"
          styleOutlineSizeLBrandPosition="absolute"
          styleOutlineSizeLBrandTop="286px"
          styleOutlineSizeLBrandLeft="766px"
          styleOutlineSizeLBrandBorderRadius="10px"
          styleOutlineSizeLBrandWidth="unset"
          styleOutlineSizeLBrandOverflow="hidden"
          styleOutlineSizeLBrandFlexShrink="0"
          styleOutlineSizeLBrandZIndex="2"
          styleOutlineSizeLBrandHeight="45px"
          styleOutlineSizeLBrandJustifyContent="space-between"
          styleOutlineSizeLBrandAlignSelf="unset"
          textContainerJustifyContent="space-between"
          textContainerOpacity="unset"
        />
        <StyleOutlineSizeLBrand
          iconJamIconsOutlineLogos="/icon--tablericons--checkuplist.svg"
          text1="Reservation confirm email/message send"
          iconJamIconsOutlineLogos1="/icon--jamicons--outline--logos--arrowright3.svg"
          text
          iconLeft
          iconRight={false}
          styleOutlineSizeLBrandMargin="0 !important"
          styleOutlineSizeLBrandPosition="absolute"
          styleOutlineSizeLBrandTop="380px"
          styleOutlineSizeLBrandLeft="680px"
          styleOutlineSizeLBrandBorderRadius="10px"
          styleOutlineSizeLBrandWidth="450px"
          styleOutlineSizeLBrandOverflow="hidden"
          styleOutlineSizeLBrandFlexShrink="0"
          styleOutlineSizeLBrandZIndex="3"
          styleOutlineSizeLBrandHeight="54px"
          styleOutlineSizeLBrandJustifyContent="space-between"
          styleOutlineSizeLBrandAlignSelf="unset"
          textContainerJustifyContent="space-between"
          textContainerOpacity="0"
        />
        <RulesAndRestric
          linkRegularMediumContaineAlignSelf="unset"
          linkRegularMediumContaineZIndex="4"
          linkRegularMediumContaineAlignItems="flex-start"
          linkRegularMediumContaineJustifyContent="space-between"
          linkRegularMediumContaineWidth="443px"
          linkRegularMediumContaineHeight="40px"
          linkRegularMediumContaineMargin="0 !important"
          linkRegularMediumContainePosition="absolute"
          linkRegularMediumContaineTop="300px"
          linkRegularMediumContaineLeft="700.5px"
        />
        <PlaceholderPicture
          imageDimensions="/driver-insurance-picture-uplaod@2x.png"
          placeholderPictureMargin="inline"
          placeholderPicturePosition="absolute"
          placeholderPictureTop="20px"
          placeholderPictureLeft="0px"
          placeholderPictureZIndex="5"
          placeholderPictureOverflow="unset"
          placeholderPictureFlexShrink="unset"
        />
      </div>
      <Containerfooter
        containerfooterHeight="160px"
        containerfooterFlexShrink="0"
        textFooterContainerTextDecoration="none"
        textFooterContainerWidth="417px"
        textFooterContainerOpacity="0"
        textfooterDisplay="inline-block"
        textfooterAlignItems="unset"
        textfooterWidth="unset"
        textfooterFlexShrink="unset"
        textfooterFlex="1"
        thumbsupDesignMargin="unset"
        thumbsupDesignDisplay="flex"
        thumbsupDesignFlexDirection="column"
        thumbsupDesignAlignItems="center"
        thumbsupDesignJustifyContent="center"
        ourLogoContainerDisplay="unset"
        ourLogoContainerFlexDirection="unset"
        ourLogoContainerAlignItems="unset"
        ourLogoContainerJustifyContent="unset"
        ourLogoContainerPosition="relative"
        ourLogoContainerWidth="176px"
        ourLogoContainerHeight="184px"
        ourLogoContainerObjectFit="cover"
        imageourLogoIconPosition="unset"
        imageourLogoIconWidth="unset"
        imageourLogoIconHeight="unset"
        imageourLogoIconObjectFit="unset"
        imageourLogoIconDisplay="flex"
        imageourLogoIconFlexDirection="row"
        imageourLogoIconAlignItems="center"
        imageourLogoIconJustifyContent="center"
        imageourLogoIconPadding="var(--padding-xl) 10px"
        imageourLogoIconBoxSizing="border-box"
        linkFooterContainerFlexDirection="unset"
        linkFooterContainerPadding="unset"
        linkFooterContainerBoxSizing="unset"
        linkFooterContainerTextDecoration="none"
        linkFooterContainerPosition="relative"
        linkFooterContainerFontSize="32px"
        linkFooterContainerLetterSpacing="0.5px"
        linkFooterContainerLineHeight="100%"
        linkFooterContainerFontWeight="500"
        linkFooterContainerFontFamily="Cabin"
        linkFooterContainerColor="2px solid #000"
        linkFooterContainerTextAlign="center"
        linkFooterContainerWidth="86px"
        linkFooterContainerFlexShrink="0"
        linkfooterTextDecoration="unset"
        linkfooterPosition="unset"
        linkfooterFontSize="unset"
        linkfooterLetterSpacing="unset"
        linkfooterLineHeight="unset"
        linkfooterFontWeight="unset"
        linkfooterFontFamily="unset"
        linkfooterColor="unset"
        linkfooterTextAlign="unset"
        linkfooterWidth="unset"
        linkfooterFlexShrink="unset"
        linkfooterCursor="pointer"
        linkfooterBorder="none"
        linkfooterPadding="0"
        linkfooterBackgroundColor="transparent"
        linkfooterFlexDirection="column"
        buttonsmallsmallCursor="unset"
        buttonsmallsmallBorder="2px solid var(--color-black)"
        buttonsmallsmallPadding="unset"
        buttonsmallsmallBackgroundColor="unset"
        buttonsmallsmallFlexDirection="row"
        buttonsmallsmallAlignItems="flex-start"
        buttonsmallsmallJustifyContent="flex-start"
        buttonsmallsmallBoxSizing="border-box"
        buttonsmallsmallWidth="214px"
        buttonsmallsmallHeight="82px"
        buttonShapeBorder="unset"
        buttonShapeBoxSizing="unset"
        buttonShapeWidth="unset"
        buttonShapeHeight="unset"
        buttonShapeFlexDirection="unset"
        buttonShapeAlignItems="center"
        buttonShapeJustifyContent="center"
        buttonShapeAlignSelf="stretch"
        buttonShapeFlex="1"
        buttonShapePosition="relative"
        buttonShapeFontSize="40px"
        buttonShapeLetterSpacing="0.5px"
        buttonShapeLineHeight="100%"
        buttonShapeFontWeight="500"
        buttonShapeFontFamily="Cabin"
        buttonShapeColor="2px solid #000"
        buttonShapeTextAlign="center"
      />
    </a>
  );
};

export default PaymentFeature;
