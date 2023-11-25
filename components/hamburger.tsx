import type { NextPage } from "next";
import { useEffect } from "react";
import LinkHamburgerNonBottomCont from "./link-hamburger-non-bottom-cont";
import LinkHamburgerBottomContaine from "./link-hamburger-bottom-containe";
import styles from "./hamburger.module.css";

type HamburgerType = {
  onClose?: () => void;
};

const Hamburger: NextPage<HamburgerType> = ({ onClose }) => {
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
    <div className={styles.hamburger} data-animate-on-scroll>
      <LinkHamburgerNonBottomCont linkText="Link / Hamburger / Non-Bottom" />
      <LinkHamburgerNonBottomCont linkText="Link / Hamburger / Non-Bottom" />
      <LinkHamburgerBottomContaine linkText="Link / Hamburger / Bottom" />
    </div>
  );
};

export default Hamburger;
