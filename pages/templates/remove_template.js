// React/Next Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Library Imports

// Data/Functions/Images Imports

// Component Imports
import { PageHead } from "@/assets/components/global/All/PageHead";

// Style Imports
import styles from "../../assets/styles/modules/Templates/Templates.module.css";

export default function RemoveTemplate() {
  const router = useRouter();

  const PAGE_HEAD_OBJ = {
    pageTitle: "Remove Template(s)",
  };

  return (
    <div id="PAGE" className="page">
      <PageHead pageHeadObj={PAGE_HEAD_OBJ} />

      <div id="PAGE_CNT"></div>
    </div>
  );
}
