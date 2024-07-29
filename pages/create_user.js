// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import "../assets/styles/modules/Create_User/Create_User.module.css";

export default function CreateUser() {
  const router = useRouter();

  const PAGE_HEAD_OBJ = {
    pageTitle: "Create User",
  };

  setTimeout(() => {
    if (!sessionStorage.getItem("Entered Website")) {
      router.push("/");
    }
  }, 500);

  return (
    <div id="PAGE" className="page">
      <PageHead pageHeadObj={PAGE_HEAD_OBJ} />

      <div id="PAGE_CNT"></div>
    </div>
  );
}
