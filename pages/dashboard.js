// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";
import { MainNav } from "@/assets/components/global/Nav/MainNav";
import { DashboardMain } from "@/assets/components/pages/Dashboard/DashboardMain";

// Style Imports
import "../assets/styles/modules/Dashboard/Dashboard.module.css";

export default function Dashboard() {
  const router = useRouter();

  const PAGE_HEAD_OBJ = {
    pageTitle: "Dashboard",
  };

  useEffect(() => {
    setTimeout(() => {
      if (!sessionStorage.getItem("Current User")) {
        router.push("/login");
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F3F3F3",
        overflowX: "hidden",
        whiteSpace: "prewrap",
      }}
    >
      <PageHead pageHeadObj={PAGE_HEAD_OBJ} />

      <div
        id="PAGE_CNT"
        style={{
          maxWidth: "1400px",
          width: "100%",
          margin: "auto",
        }}
      >
        <MainNav />
        <DashboardMain />
      </div>
    </div>
  );
}
