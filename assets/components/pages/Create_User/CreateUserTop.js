/**
 *
 *  This is the Create User Top
 *
 */

import { LOGO } from "@/assets/cdns/CDNImgs";

import { LazyLoadImage } from "react-lazy-load-image-component";

import styles from "../../../styles/modules/Create_User/Create_User.module.css";

export const CreateUserTop = () => {
  return (
    <section id="createUserTop" className={`${styles.create_user_top}`}>
      <div className={`${styles.create_user_top_inner}`}>
        <LazyLoadImage
          className="orientation-change-element half-second"
          src={LOGO}
          alt="Dynamic Web Technologies Logo."
        />

        <h1 className="orientation-change-element half-second">
          Create A User
        </h1>
      </div>
    </section>
  );
};
