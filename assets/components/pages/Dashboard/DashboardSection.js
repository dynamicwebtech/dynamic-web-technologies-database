/**
 *
 *  This is the Dashboard Section
 *
 */
import { useRouter } from "next/router";

import styles from "../../../styles/modules/Dashboard/Dashboard.module.css";

export const DashboardSection = ({ sectObj }) => {
  // Destructure sectObj
  const {
    sectName: SECT_NAME,
    sectIcon: SECT_ICON,
    viewText: VIEW_TEXT,
    addText: ADD_TEXT,
    editText: EDIT_TEXT,
    removeText: REMOVE_TEXT,
    viewLink: VIEW_LINK,
    addLink: ADD_LINK,
    editLink: EDIT_LINK,
    removeLink: REMOVE_LINK,
  } = sectObj;

  return (
    <div id={`section_${SECT_NAME}`} className={`${styles.dashboard_section}`}>
      <div className={`${styles.dashboard_section_box} container-fluid`}>
        <div className={`${styles.dashboard_section_row} row`}>
          <div
            className={`${styles.dashboard_section_side} ${styles.dashboard_section_L} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
          >
            <div className={`${styles.dashboard_section_side_cnt}`}>
              {SECT_ICON}

              <span
                className={`${styles.sect_name} orientation-change-element half-second`}
              >
                {SECT_NAME}
              </span>
            </div>
          </div>
          <div
            className={`${styles.dashboard_section_side} ${styles.dashboard_section_R} col-lg-8 col-md-8 col-sm-6 col-xs-12`}
          >
            <div className={`${styles.dashboard_section_side_cnt}`}>
              <div
                className={`${styles.link_box} ${styles.view_link} container-fluid`}
              >
                <div className={`${styles.link_row} row`}>
                  <div
                    className={`${styles.link_side} col-lg-7 col-md-7 col-sm-6 col-xs-12`}
                  >
                    <span
                      className={`${styles.link_name} orientation-change-element half-second`}
                    >
                      {VIEW_TEXT}
                    </span>
                  </div>
                  <div
                    className={`${styles.link_side} col-lg-5 col-md-5 col-sm-6 col-xs-12`}
                  >
                    <a
                      href={VIEW_LINK}
                      className={`orientation-change-element half-second`}
                    >
                      Go To Page
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.link_box} ${styles.add_link} container-fluid`}
              >
                <div className={`${styles.link_row} row`}>
                  <div
                    className={`${styles.link_side} col-lg-7 col-md-7 col-sm-6 col-xs-12`}
                  >
                    <span
                      className={`${styles.link_name} orientation-change-element half-second`}
                    >
                      {ADD_TEXT}
                    </span>
                  </div>
                  <div
                    className={`${styles.link_side} col-lg-5 col-md-5 col-sm-6 col-xs-12`}
                  >
                    <a
                      href={ADD_LINK}
                      className={`orientation-change-element half-second`}
                    >
                      Go To Page
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.link_box} ${styles.edit_link} container-fluid`}
              >
                <div className={`${styles.link_row} row`}>
                  <div
                    className={`${styles.link_side} col-lg-7 col-md-7 col-sm-6 col-xs-12`}
                  >
                    <span
                      className={`${styles.link_name} orientation-change-element half-second`}
                    >
                      {EDIT_TEXT}
                    </span>
                  </div>
                  <div
                    className={`${styles.link_side} col-lg-5 col-md-5 col-sm-6 col-xs-12`}
                  >
                    <a
                      href={EDIT_LINK}
                      className={`orientation-change-element half-second`}
                    >
                      Go To Page
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.link_box} ${styles.remove_link} container-fluid`}
              >
                <div className={`${styles.link_row} row`}>
                  <div
                    className={`${styles.link_side} col-lg-7 col-md-7 col-sm-6 col-xs-12`}
                  >
                    <span
                      className={`${styles.link_name} orientation-change-element half-second`}
                    >
                      {REMOVE_TEXT}
                    </span>
                  </div>
                  <div
                    className={`${styles.link_side} col-lg-5 col-md-5 col-sm-6 col-xs-12`}
                  >
                    <a
                      href={REMOVE_LINK}
                      className={`orientation-change-element half-second`}
                    >
                      Go To Page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
