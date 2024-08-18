/**
 *
 *  This is the Dashboard Main
 *
 */

import { useRouter } from "next/router";

import { FaHandshake, FaPencilRuler } from "react-icons/fa";
import { MdStickyNote2, MdOutlinePayments } from "react-icons/md";
import { BsChatTextFill } from "react-icons/bs";
import { SiMaterialdesignicons } from "react-icons/si";

import { DashboardSection } from "./DashboardSection";

import styles from "../../../styles/modules/Dashboard/Dashboard.module.css";

function returnSectionObj(
  sectName,
  sectIcon,
  viewText,
  addText,
  editText,
  removeText,
  viewLink,
  addLink,
  editLink,
  removeLink
) {
  const OBJECT = {
    sectName: sectName,
    sectIcon: sectIcon,
    viewText: `View ${viewText}`, // Corrected string concatenation
    addText: `Add ${addText}`,
    editText: `Edit ${editText}`,
    removeText: `Remove ${removeText}`,
    viewLink: viewLink,
    addLink: addLink,
    editLink: editLink,
    removeLink: removeLink,
  };

  return OBJECT;
}

export const DashboardMain = () => {
  const S_S = [
    "Client(s)",
    "Project(s)",
    "Reminder(s)",
    "Payment(s)",
    "Template(s)",
    "Note(s)",
  ];
  const CLIENTS_OBJ = returnSectionObj(
    "Clients",
    <FaHandshake />,
    S_S[0],
    S_S[0],
    S_S[0],
    S_S[0],
    "/clients/view_clients",
    "/clients/add_client",
    "/clients/edit_client",
    "/clients/remove_client"
  );
  const PROJECTS_OBJ = returnSectionObj(
    "Projects",
    <FaPencilRuler />,
    S_S[1],
    S_S[1],
    S_S[1],
    S_S[1],
    "/projects/view_projects",
    "/projects/add_project",
    "/projects/edit_project",
    "/projects/remove_project"
  );
  const REMINDERS_OBJ = returnSectionObj(
    "Reminders",
    <BsChatTextFill />,
    S_S[2],
    S_S[2],
    S_S[2],
    S_S[2],
    "/reminders/view_reminders",
    "/reminders/add_reminder",
    "/reminders/edit_reminder",
    "/reminders/remove_reminder"
  );
  const PAYMENTS_OBJ = returnSectionObj(
    "Payments",
    <MdOutlinePayments />,
    S_S[3],
    S_S[3],
    S_S[3],
    S_S[3],
    "/payments/view_payments",
    "/payments/add_payment",
    "/payments/edit_payment",
    "/payments/remove_payment"
  );
  const TEMPLATES_OBJ = returnSectionObj(
    "Templates",
    <SiMaterialdesignicons />,
    S_S[4],
    S_S[4],
    S_S[4],
    S_S[4],
    "/templates/view_templates",
    "/templates/add_template",
    "/templates/edit_template",
    "/templates/remove_template"
  );
  const NOTES_OBJ = returnSectionObj(
    "Notes",
    <MdStickyNote2 />,
    S_S[5],
    S_S[5],
    S_S[5],
    S_S[5],
    "/notes/view_notes",
    "/notes/add_note",
    "/notes/edit_note",
    "/notes/remove_note"
  );

  return (
    <section id="dashboardMain" className={`${styles.dashboard_main}`}>
      <div className={`${styles.dashboard_main_inner}`}>
        <DashboardSection sectObj={CLIENTS_OBJ} />
        <DashboardSection sectObj={PROJECTS_OBJ} />
        <DashboardSection sectObj={REMINDERS_OBJ} />
        <DashboardSection sectObj={PAYMENTS_OBJ} />
        <DashboardSection sectObj={TEMPLATES_OBJ} />
        <DashboardSection sectObj={NOTES_OBJ} />
      </div>
    </section>
  );
};
