/**
 *
 *  This will be used to check the routing state for where the user
 *  should be based on certain parameters
 *
 */

const CheckPageRoutingState = (router, currentUser) => {
  const ENTERED_DATABASE = sessionStorage.getItem("Entered Database");

  if (ENTERED_DATABASE) {
    // If the user has entered the website
    if (currentUser) {
      // If the user is logged in (Checks the getCurrentUser function call)
      if (router.pathname !== "/dashboard") {
        router.push("/dashboard");
      }
    } else {
      // If the user is NOT logged in
      if (router.pathname !== "/login") {
        router.push("/login");
      }
    }
  } else {
    // If the user has NOT entered the website
    if (router.pathname !== "/") {
      router.push("/");
    }
  }
};

export default CheckPageRoutingState;
