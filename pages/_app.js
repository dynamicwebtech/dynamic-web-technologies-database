// React/Next Imports
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

// Data/Functions/Images Imports
import DeclareStorageVariable from "../assets/functions/data/storage/DeclareStorageVariable";
import RemoveStorageVariable from "../assets/functions/data/storage/RemoveStorageVariable";
import CheckUserDevice from "../assets/functions/dom/checkers/CheckUserDevice";
import CheckScreenOrientation from "../assets/functions/dom/checkers/CheckScreenOrientation";

import getCurrentUser from "@/assets/hooks/getCurrentUser";

import { fetchClients } from "../assets/functions/async/fetchers/fetchClients";
import { fetchProjects } from "../assets/functions/async/fetchers/fetchProjects";
import { fetchNotes } from "../assets/functions/async/fetchers/fetchNotes";
import { fetchPayments } from "../assets/functions/async/fetchers/fetchPayments";
import { fetchReminders } from "../assets/functions/async/fetchers/fetchReminders";
import { fetchTemplates } from "../assets/functions/async/fetchers/fetchTemplates";
import { fetchUsers } from "../assets/functions/async/fetchers/fetchUsers";

// Component Imports

// Style Imports
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

//TODO: This is used to indicate if the client has not paid for the project and/or the monthly invoice(s)
let IS_PAYMENT_REQUIRED = false;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const hasRedirectedRef = useRef(false);

  const [updateUI, setUpdateUI] = useState(0);
  // const [isLoggedIn, setIsLoggedIn] = useState(null);

  // DATA SETTERS
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [users, setUsers] = useState([]);

  //? GLOBALS
  //! Forget scroll position and force user back to top of page
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.addEventListener("beforeunload", () => {
      if (window.scrollY !== 0) {
        DeclareStorageVariable("session", "Reload Scroll", true);
      }
    });

    if (sessionStorage.getItem("Reload Scroll")) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      RemoveStorageVariable("session", "Reload Scroll");
    }
  }, []);

  //! Checking where the user should be (on what pages: login, welcome, dashboard, etc.)
  useEffect(() => {
    // if (!hasRedirectedRef.current) {
    //   if (currentUser !== null) {
    //     CheckPageRoutingState(router, currentUser);
    //     hasRedirectedRef.current = true;
    //   } else {
    //     CheckPageRoutingState(router, null);
    //     hasRedirectedRef.current = true;
    //   }
    // }
  }, []);

  //! Updating UI State
  useEffect(() => {
    if (!sessionStorage.getItem("FM Loaded")) {
      DeclareStorageVariable("session", "FM Loaded", true);
    }

    if (sessionStorage.getItem("FM Loaded")) {
      setUpdateUI(updateUI + 1);
    }
  }, []);

  //! Displaying the page content after a few seconds and after updateUI updates
  // useEffect(() => {
  //   if (updateUI > 0) {
  //     if (document.getElementById("loadingScreen")) {
  //       document.getElementById("loadingScreen").style.opacity = 0;
  //       document.getElementById("loadingScreen").style.visibility = "hidden";
  //     }

  //     setTimeout(() => {
  //       document.body.style.overflowY = "auto";
  //       document.body.style.pointerEvents = "auto";

  //       document.querySelectorAll(".page-cnt").forEach((page) => {
  //         page.style.opacity = 1;
  //         page.style.visibility = "visible";
  //       });
  //     }, 1500);
  //   }
  // }, [updateUI]);

  //! Reload Page after route change (This is mostly for the animations)
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      router.reload();
    });
  }, [router]);

  //? DATA
  useEffect(() => {
    let turnOnFetchers = false;

    if (turnOnFetchers) {
      fetchClients("/api/clients/getClients", setClients, "Client Storage");
      fetchProjects(
        "/api/projects/getProjects",
        setProjects,
        "Project Storage"
      );
      fetchUsers("/api/users/getUsers", setUsers, "User Storage");
      // fetchNotes("/api/notes/getNotes", setNotes, "Note Storage");
      // fetchPayments(
      //   "/api/payments/getPayments",
      //   setPayments,
      //   "Payment Storage"
      // );
      // fetchReminders(
      //   "/api/reminders/getReminders",
      //   setReminders,
      //   "Reminder Storage"
      // );
      // fetchTemplates(
      //   "/api/templates/getTemplates",
      //   setTemplates,
      //   "Template Storage"
      // );
    }
  }, []);

  //! Session/Local Storage Clearing
  useEffect(() => {
    if (!sessionStorage.getItem("EA Fix")) {
      DeclareStorageVariable("session", "EA Fix", true);
      router.reload();
    }

    if (sessionStorage.getItem("EA Fix")) {
      const SS_VARIABLES = [
        "Modal Opened",
        // "FM Loaded",
        "Mobile Nav Opened",
        "Page Reload",
        "Submission Sent",
        "ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog",
      ];
      const LS_VARIABLES = ["ally-supports-cache"];

      SS_VARIABLES.forEach((variable) => {
        RemoveStorageVariable("session", variable);
      });
      LS_VARIABLES.forEach((variable) => {
        RemoveStorageVariable("local", variable);
      });
    }
  }, [router]);

  //? MANIPS
  //! Determine to enable/disable framer motion animations on mobile devices
  useEffect(() => {
    //TODO: THIS IS USED TO ENABLE/DISABLE THE FRAMER MOTION ANIMATIONS ON MOBILE DEVICES
    // ----------------------------------------------------
    const TURN_OFF_FRAMER_MOTION_ON_MOBILE_DEVICES = true;
    const TURN_OFF_FRAMER_MOTION_ON_DESKTOP = false;
    // ----------------------------------------------------

    // Checking to see if user is on desktop
    let onDesktop = true;
    let onMobile = true;
    if (sessionStorage.getItem("Mobile Device")) {
      onDesktop = false;
      onMobile = true;
    }

    if (sessionStorage.getItem("Desktop Device")) {
      onDesktop = true;
      onMobile = false;
    }

    const handleDisableCheck = () => {
      // if (!TURN_OFF_FRAMER_MOTION_ON_MOBILE_DEVICES) {
      //   return;
      // } else {
      //   if (!onDesktop) {
      //     document.querySelectorAll(".fm-element").forEach((fix) => {
      //       fix.classList.add("fm-mobile-fix");
      //     });
      //   }
      // }

      //! DESKTOP
      if (TURN_OFF_FRAMER_MOTION_ON_DESKTOP) {
        if (onDesktop && !onMobile) {
          document.querySelectorAll(".fm-element").forEach((fix) => {
            fix.classList.add("fm-mobile-fix");
          });
        }
      }

      //! MOBILE
      if (TURN_OFF_FRAMER_MOTION_ON_MOBILE_DEVICES) {
        if (!onDesktop && onMobile) {
          document.querySelectorAll(".fm-element").forEach((fix) => {
            fix.classList.add("fm-mobile-fix");
          });
        }
      }

      //! BOTH
      if (
        TURN_OFF_FRAMER_MOTION_ON_DESKTOP &&
        TURN_OFF_FRAMER_MOTION_ON_MOBILE_DEVICES
      ) {
        document.querySelectorAll(".fm-element").forEach((fix) => {
          fix.classList.add("fm-mobile-fix");
        });
      }
    };

    // Adds the class to disable the animations if DETERMINE_FRAMER_MOTION_ON_MOBILE_DEVICES = true
    handleDisableCheck();
  }, []);

  //? CHECKERS
  //! Check Page Orientation
  useEffect(() => {
    window.addEventListener("orientationchange", () => {
      CheckScreenOrientation();
    });
  }, []);

  //! Check User Device
  useEffect(() => {
    let mobile,
      desktop = false;

    // Page Load
    window.addEventListener("load", () => {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    });

    if (document.readyState === "complete") {
      setTimeout(() => {
        CheckUserDevice(mobile, desktop);
      }, 500);
    }

    // Resize
    window.addEventListener("resize", () => {
      CheckUserDevice(mobile, desktop);
    });
  }, []);

  //? DISPLAYS/HIDERS
  //! Add selection styling for specific elements by adding a className to each element
  useEffect(() => {
    const ELEMENT_TYPES = [
      "h1",
      "h1 span",
      "h2",
      "h2 span",
      "h3",
      "h3 span",
      "h4",
      "h4 span",
      "h5",
      "h5 span",
      "h6",
      "h6 span",
      "p",
      "p a",
      "span",
      "span span",
      "a",
      "a span",
      "em",
      "li",
      "img",
      "br",
      "strong",
      "button",
      "button span",
      "label",
      "select",
      "input",
      "textarea",
      ':contains("&nbsp;")',
    ];

    setTimeout(() => {
      ELEMENT_TYPES.forEach((eT) => {
        const ELEMENTS = document.getElementsByTagName(eT);

        for (let i = 0; i < ELEMENTS.length; i++) {
          if (!ELEMENTS[i].classList.contains("selected")) {
            ELEMENTS[i].classList.add("selected");
          }
        }
      });
    }, 200);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
