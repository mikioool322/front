import Banner from "@/components/Banner/Banner";
import styles from "./registration.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { HttpService } from "@/components/http.service";
import Router from 'next/router'
export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationResult, setRegistrationResult] = useState("");

  const handleCheckEmail = (value) => {

    if (/^\w+([\.-]?\w+)*@sggw.edu.pl/.test(value)) {
      setEmailError("");
      setEmail(value);
    } else {
      setEmailError("Nieprawidłowy email!");
    }
  };

  const handleCheckPassword = (value) => {

    if (value.length >= 8) {
      setPasswordError("");
      setPassword(value);
    } else {
      setPasswordError("Hasło za krótkie");
    }
  };

  const handleRegister = () => {
    if (passwordError.length === 0 && emailError.length === 0) {
      HttpService.post(
        "http://localhost:8080/api/user/",
        {
          'userEmail': email,
          'password': password
        }).then((response) => {
          if (response.status === 200) {
            Router.push('/login') 
          }
          else {
            setRegistrationResult("Istnieje użytkonik z podanym emailem")
          }
        })
    }
  }


  return (
    <>
      <div className={styles.container}>
        <Banner />

        <form>
          <div className={styles.inputs}>
            <div className={styles.text}>Rejestracja</div>
            <input
              placeholder="Email"
              className={styles.input}
              type="email"
              onChange={(event) => handleCheckEmail(event.target.value)} />
            {emailError !== "" && (
              <div className={styles.invalid}>{emailError}</div>
            )}
            <input placeholder="Hasło" className={styles.input} type="password" onChange={(event) => handleCheckPassword(event.target.value)} />
            {passwordError !== "" && (
              <div className={styles.invalid}>{passwordError}</div>
            )}
            {registrationResult !== "" && (
              <div className={styles.invalid}>{registrationResult}</div>
            )}
          </div>
          <div className={styles.nextButton}>
            <Button variant="contained" color="primary" onClick={handleRegister}>
              zarejestruj sie!
            </Button>
          </div>

        </form>

      </div>
    </>
  );
}
