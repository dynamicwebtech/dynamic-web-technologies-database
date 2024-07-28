/**
 *
 *  This is used to get the current user logged in
 *
 */

import { useState, useEffect } from "react";

const getCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const CURRENT_USER = localStorage.getItem("Current User");
    if (CURRENT_USER) {
      setCurrentUser(JSON.parse(CURRENT_USER)); // Setting the currentUser object to the state
    }
  }, []);

  return currentUser;
};

export default getCurrentUser;
