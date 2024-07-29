/**
 *
 *  This is used to check if the user has entered the website
 *
 */

import { useState, useEffect } from "react";

const getWebsiteEnterance = () => {
  const [websiteEnterance, setWebsiteEnterance] = useState(null);

  useEffect(() => {
    const WEBSITE_ENTERANCE = sessionStorage.getItem("Entered Website");
    if (WEBSITE_ENTERANCE) {
      setWebsiteEnterance(true); // Setting the currentUser object to the state
      console.log(setWebsiteEnterance);
    }
  }, []);

  return websiteEnterance;
};

export default getWebsiteEnterance;
