"use client"
import Banner from "@/components/Banner/Banner";
import BasicButton from "@/components/BasicButton/BasicButton";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.hompageContainer}>
        <Banner />
        <div className={styles.helloText}>
          jesteś studentem sggw i CHCESZ POZNAĆ KOGOŚ CIEKAWEGO ? A MOŻE MASZ
          OCHOTĘ NA RANDKĘ ! W TAKIM RAZIE TO MIEJSCE JEST DLA CIEBIE. WYBIERZ
          “STUDENCKIE RANDEWU”
        </div>
        <div className={styles.buttons}>
          <Link href="/login" style={{ display: "contents" }}>
            <BasicButton text="Zaloguj się" fontSize={48} />
          </Link>
          <Link href="/registration" style={{ display: "contents" }}>
            <BasicButton text="Zarejestruj się" fontSize={48} />
          </Link>
        </div>
      </div>
    </>
  );
}
