import type { NextPage } from "next";
import { useEffect } from "react";
import LinkHamburgerNonBottomCont from "./link-hamburger-non-bottom-cont";
import LinkHamburgerBottomContaine from "./link-hamburger-bottom-containe";
import styles from "./hamburger-account.module.css";

type HamburgerAccountType = {
  onClose?: () => void;
};

const HamburgerAccount: NextPage<HamburgerAccountType> = ({ onClose }) => {
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
    <div className={styles.hamburgerAccount} data-animate-on-scroll>
      <LinkHamburgerNonBottomCont linkText="Create Reservation" />
      <LinkHamburgerNonBottomCont linkText="View Profile" />
      <LinkHamburgerBottomContaine linkText="Logout" />
    </div>
  );
};

export default HamburgerAccount;
