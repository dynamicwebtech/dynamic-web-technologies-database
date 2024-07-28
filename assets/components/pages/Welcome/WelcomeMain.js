/**
 *
 *  This is the Welcome Main
 *
 */

import { useRouter } from "next/router";

import { LOGO } from "@/assets/cdns/CDNImgs";

import CheckPageRoutingState from "@/assets/functions/dom/checkers/routing/CheckWelcomePageState";
import DeclareStorageVariable from "@/assets/functions/data/storage/DeclareStorageVariable";

import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "../../../styles/modules/Index/Index.module.css";

export const WelcomeMain = () => {
  const router = useRouter();

  return (
    <section id="welcomeMain" className={`${styles.welcome_main}`}>
      <div className={`${styles.welcome_main_inner}`}>
        <LazyLoadImage
          className="orientation-change-element half-second"
          src={LOGO}
          alt="Dynamic Web Technologies Logo."
        />

        <h1 className="orientation-change-element half-second">
          Company Database
        </h1>

        <button
          id="enterSite"
          className={`${styles.enter_site} orientation-change-element half-second`}
          onClick={(e) => {
            // Triggers the user has entered the website
            DeclareStorageVariable("session", "Entered Database", true);

            CheckPageRoutingState(router, null); // Bingo!
          }}
        >
          <span>Enter Database</span>
        </button>
      </div>
    </section>
  );
};
