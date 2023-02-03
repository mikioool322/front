
import Banner from "@/components/Banner/Banner";
import styles from "./login.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { HttpService } from "@/components/http.service";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [autenticatedUser, setAutenticatedUser] = useState(false);

  const handleCheckEmail = (value) => {
    setEmail(value);
    if (/^\w+([\.-]?\w+)*@sggw.edu.pl/.test(value)) {
      setEmailError("");
    } else setEmailError("Nieprawidłowy email!");
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = () => {
    HttpService.post(
      "https://tinder-sggw.herokuapp.com/api/user/login",
      {
        'userEmail': email,
        'password': password
      }).then((response) => {
        if (response.status === 200) {
          setAutenticatedUser(true)
          setPasswordError("")
        }
      }).catch((e) => {
        if (e.response !== undefined && e.response.status === 401) {
          setPasswordError("Podany login i haslo nie pasuja do siebie")
          setAutenticatedUser(false)
        }
      })
  }
  const renderNextButtons = () => {
    autenticatedUser ? (<>         <Link href="/selection" className={styles.backButton}>
      <Button variant="contained" color="primary">
        Przejdz do par
      </Button>
    </Link>
      <Link href="/choose-preferences" className={styles.backButton}>
        <Button variant="contained" color="primary">
          Przejdz do preferencji
        </Button>
      </Link></>) : <></>
  }

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
            <input
              placeholder="Hasło"
              className={styles.input}
              type="password"
              onChange={(event) => handlePasswordChange(event.target.value)} />
            {passwordError !== "" && (
              <div className={styles.invalid}>{passwordError}</div>
            )}
          </div>
          <div className={styles.nextButton}>
            <Button variant="contained" color="primary" onClick={handleLogin}>
              zaloguj sie
            </Button>

            <Link href={autenticatedUser ? `/selection/${email}` : "/login"} className={styles.backButton}>
              <Button variant="contained" color="primary">
                Przejdz do par
              </Button>
            </Link>
            <Link href={autenticatedUser ? `/choose-preferences/${email}` : "/login"}  className={styles.backButton}>
              <Button variant="contained" color="primary">
                Przejdz do preferencji
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
