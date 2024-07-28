// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { WelcomeMain } from "@/assets/components/pages/Welcome/WelcomeMain";

// Style Imports
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  const router = useRouter();

  const PAGE_HEAD_OBJ = {
    pageTitle: "Welcome",
  };

  return (
    <div
      id="PAGE"
      className="page"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F3F3",
        overflowX: "hidden",
        whiteSpace: "prewrap",
      }}
    >
      <PageHead pageHeadObj={PAGE_HEAD_OBJ} />

      <div id="PAGE_CNT" style={{ maxWidth: "900px", margin: "auto" }}>
        <WelcomeMain />
      </div>
    </div>
  );
}
