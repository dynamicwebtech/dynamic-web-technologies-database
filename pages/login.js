// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports
import getWebsiteEnterance from "@/assets/hooks/getWebsiteEnterance";
import getCurrentUser from "@/assets/hooks/getCurrentUser";

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { LoginTop } from "@/assets/components/pages/Login/LoginTop";
import { LoginMain } from "@/assets/components/pages/Login/LoginMain";

// Style Imports
import "../assets/styles/modules/Login/Login.module.css";

export default function Login() {
  const router = useRouter();

  const currentUser = getCurrentUser();

  const PAGE_HEAD_OBJ = {
    pageTitle: "Login",
  };

  useEffect(() => {
    setTimeout(() => {
      if (currentUser) {
        router.push("/dashboard");
      }

      if (!sessionStorage.getItem("Entered Website")) {
        router.push("/");
      }
    }, 500);
  }, []);

  return (
    <div
      id="PAGE"
      className="page"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F3F3",
        overflowX: "hidden",
        whiteSpace: "prewrap",
      }}
    >
      <PageHead pageHeadObj={PAGE_HEAD_OBJ} />

      <div id="PAGE_CNT" style={{ maxWidth: "600px", margin: "auto" }}>
        <LoginTop />
        <LoginMain currentUser={currentUser} />
      </div>
    </div>
  );
}
