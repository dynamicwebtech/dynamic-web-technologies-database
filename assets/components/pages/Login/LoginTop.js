/**
 *
 *  This is the Login Top
 *
 */

import { LOGO } from "@/assets/cdns/CDNImgs";

import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "../../../styles/modules/Login/Login.module.css";

export const LoginTop = () => {
  return (
    <section id="loginTop" className={`${styles.login_top}`}>
      <div className={`${styles.login_top_inner}`}>
        <LazyLoadImage
          className="orientation-change-element half-second"
          src={LOGO}
          alt="Dynamic Web Technologies Logo."
        />

        <h1 className="orientation-change-element half-second">
          Login to Database
        </h1>
      </div>
    </section>
  );
};
