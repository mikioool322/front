import Banner from "@/components/Banner/Banner";
import styles from "./login.module.css";
import { useState } from "react";
import BasicButton from "@/components/BasicButton/BasicButton";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleCheckEmail = (value) => {
    setEmail(value);
    if (/^\w+([\.-]?\w+)*@sggw.edu.pl/.test(value)) {
      setEmailError("");
    } else setEmailError("Nieprawidłowy email!");
  };

  return (
    <>
      <div className={styles.container}>
        <Banner />

        <form>
          <div className={styles.inputs}>
            <div className={styles.text}>Logowanie</div>
            <input
              placeholder="Email"
              className={styles.input}
              type="email"
              onChange={(event) => handleCheckEmail(event.target.value)}
            />
            {emailError !== "" && (
              <div className={styles.invalid}>{emailError}</div>
            )}
            <input placeholder="Hasło" className={styles.input} type="password" />
            {passwordError === "" && (
              <div className={styles.invalid}>Nieprawidłowe hasło!</div>
            )}
          </div>

          <Link href="/photo" className={styles.nextButton}>
            <BasicButton type="submit" text="Zaloguj się" fontSize={36} />
          </Link>
        </form>
      </div>
    </>
  );
}
