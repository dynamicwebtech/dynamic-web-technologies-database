/**
 *
 *  This is the Main Nav
 *
 */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { LOGO } from "@/assets/cdns/CDNImgs";

import { RiLogoutBoxLine } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";

import RemoveStorageVariable from "@/assets/functions/data/storage/RemoveStorageVariable";

import styles from "../../../styles/modules/Nav/Nav.module.css";

export const MainNav = () => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("Current User")) {
      setCurrentUser(sessionStorage.getItem("Current User"));
    }
  }, []);

  return (
    <section id="mainNav" className={`${styles.main_nav}`}>
      <div className={`${styles.main_nav_inner}`}>
        <LazyLoadImage
          className="orientation-change-element half-second"
          src={LOGO}
          alt="Dynamic Web Technologies Logo."
        />

        <div className={`${styles.main_nav_links}`}>
          <button
            className={`${styles.logout} orientation-change-element half-second`}
            onClick={(e) => {
              if (sessionStorage.getItem("Current User")) {
                RemoveStorageVariable("session", "Current User");
              }

              router.push("/login");
            }}
          >
            <span>Logout</span>
            <RiLogoutBoxLine />
          </button>

          <span
            className={`${styles.current_user} orientation-change-element half-second`}
          >
            Current User: <span>{currentUser}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
