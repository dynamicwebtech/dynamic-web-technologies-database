/**
 *
 *  This is the Login Main
 *
 */

import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import styles from "../../../styles/modules/Login/Login.module.css";

export const LoginMain = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const handleLogin = async (event) => {
  //   event.preventDefault();

  //   const loginEmail = event.target.loginEmail.value;
  //   const loginPassword = event.target.loginPassword.value;

  //   try {
  //     const res = await fetch("/api/login/loginUser", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ loginEmail, loginPassword }),
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       // Handle successful login
  //       console.log("Login successful:", data.message);
  //       // Redirect to another page, e.g., the dashboard
  //       alert(data.message);

  //       localStorage.setItem(
  //         "Current User",
  //         JSON.stringify({
  //           email: loginEmail,
  //           hashedPassword: data.hashedPassword,
  //         })
  //       );

  //       router.push("/dashboard");
  //     } else {
  //       // Handle error response
  //       console.error("Login failed:", data.error);
  //       alert(data.error);
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //     alert(error);
  //   }
  // };

  const handleLogin = async (e, email, password, formError, router) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login/loginUser", {
        email,
        password,
      });

      const { token } = response.data;

      // Store the token in sessionStorage
      sessionStorage.setItem("Current User", token);

      router.push("/dashboard");
    } catch (error) {
      formError("Invalid credentials!");
      console.error("Login error:", error);
    }
  };

  const resetForm = () => {
    const CHECKED = document.getElementById("passwordCheckbox");
    const SHOW_ICON = document.getElementById("showIcon");
    const HIDE_ICON = document.getElementById("hideIcon");
    const PASSWORD_INPUT = document.getElementById("loginPassword");

    setEmail("");
    setPassword("");
    setError("");

    CHECKED.checked = false;
    PASSWORD_INPUT.type = "password";
    SHOW_ICON.style.opacity = 1;
    HIDE_ICON.style.opacity = 0;
  };

  return (
    <section id="loginMain" className={`${styles.login_main}`}>
      <form
        className={`${styles.login_main_form}`}
        id="loginForm"
        onSubmit={(e) => {
          handleLogin(e, email, password, setError, router);
        }}
        onReset={resetForm}
      >
        <div className={`${styles.login_main_form_inner}`}>
          <div className={`${styles.login_main_form_inner_set}`}>
            <label for="loginEmail">User Email Address:</label>
            <input
              type="email"
              id="loginEmail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={`${styles.password_set}`}>
            <div className={`${styles.login_main_form_inner_set}`}>
              <label for="loginPassword">User Password:</label>
              <input
                type="password"
                id="loginPassword"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className={`${styles.hide_show_box}`}>
              <input
                id="passwordCheckbox"
                type="checkbox"
                onChange={(e) => {
                  const CHECKED = e.currentTarget.checked;
                  const SHOW_ICON = document.getElementById("showIcon");
                  const HIDE_ICON = document.getElementById("hideIcon");
                  const PASSWORD_INPUT =
                    document.getElementById("loginPassword");

                  if (CHECKED) {
                    SHOW_ICON.style.opacity = 0;
                    HIDE_ICON.style.opacity = 1;
                    PASSWORD_INPUT.type = "text";
                  }

                  if (!CHECKED) {
                    SHOW_ICON.style.opacity = 1;
                    HIDE_ICON.style.opacity = 0;
                    PASSWORD_INPUT.type = "password";
                  }
                }}
              />

              <FaEye id="showIcon" className={`${styles.icon}`} />
              <FaEyeSlash id="hideIcon" className={`${styles.icon}`} />
            </div>
          </div>

          <div className={`${styles.login_btns}`}>
            <button
              type="reset"
              className={`${styles.reset_btn} orientation-change-element half-second`}
            >
              <span>CLEAR</span>
            </button>
            <button
              type="submit"
              className={`${styles.login_btn} orientation-change-element half-second`}
            >
              <span>LOGIN</span>
            </button>
          </div>
        </div>
      </form>

      {/**
      
        <div className={`${styles.bottom_links}`}>
        <ul>
          <li>
            <a href="/create_user">
              <span>Create A User?</span>
            </a>
          </li>
          <li>
            <a href="/forgot_password">
              <span>Forgot Password?</span>
            </a>
          </li>
        </ul>
      </div>
        
      */}
    </section>
  );
};
