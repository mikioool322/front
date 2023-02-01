import Banner from "@/components/Banner/Banner";
import styles from "./registration.module.css";
import { useState } from "react";
import BasicButton from "@/components/BasicButton/BasicButton";
import Link from "next/link";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  return (
    <>
      <div className={styles.container}>
        <Banner />

        <form>
          <div className={styles.inputs}>
            <div className={styles.text}>Rejestracja</div>
            <input placeholder="Email" className={styles.input} type="email" />
            {emailError === "" && (
              <div className={styles.invalid}>Email jest juz zajęty!</div>
            )}
            <input placeholder="Hasło" className={styles.input} type="text" />
            {/* {passwordError === "" && (
              <div className={styles.invalid}>Nieprawidłowe hasło!</div>
            )} */}
          </div>

          <Link href="/photo" className={styles.nextButton}>
            <BasicButton type="submit" text="Zarejestruj się" fontSize={36} />
          </Link>
        </form>
      </div>
    </>
  );
}
