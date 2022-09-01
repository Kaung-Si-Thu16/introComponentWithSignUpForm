import React, { useState } from "react";
import styles from "../css/rightside.module.css";

function RightSide() {
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // const firstName = document.querySelector("#firstName");
  // const lastName = document.querySelector("#lastName");
  // const email = document.querySelector("#email");
  // const password = document.querySelector("#password");

  const errorToggler = () => {
    if (document.querySelector("#firstName").value === "") {
      setFirstNameError(true);
    } else if (document.querySelector("#firstName").value !== "") {
      setFirstNameError(false);
    }
    if (document.querySelector("#lastName").value === "") {
      setLastNameError(true);
    } else if (document.querySelector("#lastName").value !== "") {
      setLastNameError(false);
    }
    if (document.querySelector("#email").value === "") {
      setEmailError(true);
    } else if (document.querySelector("#email").value !== "") {
      setEmailError(false);
    }
    if (document.querySelector("#password").value === "") {
      setPasswordError(true);
    } else if (document.querySelector("#password").value !== "") {
      setPasswordError(false);
    }

    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        document.querySelector("#email").value
      )
    ) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.adContainer}>
        <p className={styles.ad}>
          <b>Try it free 7 days </b>
          <span>then $20/mo. thereafter</span>
        </p>
      </div>

      <div className={firstNameError || lastNameError || emailError || passwordError ? styles.errorCard : styles.formContainer}>
        <div className={styles.firstName}>
          <input
            className={firstNameError ? styles.error : styles.input}
            type="text"
            name="firstName"
            id="firstName"
            placeholder={firstNameError ? "" : "First Name"}
          />

          <span className={firstNameError ? styles.errorIcon : styles.noError}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#FF7979" cx="12" cy="12" r="12" />
                <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
              </g>
            </svg>
          </span>

          <p className={firstNameError ? styles.errorMsg : styles.noError}>
            First Name cannot be empty
          </p>
        </div>
        <div className={styles.LastName}>
          <input
            className={lastNameError ? styles.error : styles.input}
            type="text"
            name="lastName"
            id="lastName"
            placeholder={lastNameError ? "" : "Last Name"}
          />

          <span className={lastNameError ? styles.errorIcon : styles.noError}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#FF7979" cx="12" cy="12" r="12" />
                <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
              </g>
            </svg>
          </span>

          <p className={lastNameError ? styles.errorMsg : styles.noError}>
            Last Name cannot be empty
          </p>
        </div>
        <div className={styles.email}>
          <input
            className={emailError ? styles.emailError : styles.input}
            type="email"
            name="email"
            id="email"
            placeholder={emailError ? "email@example/com" : "Email Address"}
          />

          <span className={emailError ? styles.errorIcon : styles.noError}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#FF7979" cx="12" cy="12" r="12" />
                <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
              </g>
            </svg>
          </span>

          <p className={emailError ? styles.errorMsg : styles.noError}>
            Looks like this is not an email
          </p>
        </div>
        <div className={styles.password}>
          <input
            className={passwordError ? styles.error : styles.input}
            type="password"
            name="password"
            id="password"
            placeholder={passwordError ? "" : "Password"}
          />

          <span className={passwordError ? styles.errorIcon : styles.noError}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#FF7979" cx="12" cy="12" r="12" />
                <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
                <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
              </g>
            </svg>
          </span>

          <p className={passwordError ? styles.errorMsg : styles.noError}>
            Password cannot be empty
          </p>
        </div>

        <div className={styles.btn}>
          <button onClick={() => errorToggler()}>Claim your free trial</button>
        </div>

        <div className={styles.bottomText}>
          <p>
            <span>By clicking the button, you are agreeing to our </span>{" "}
            <a href="#">
              <b>Terms and Services</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
