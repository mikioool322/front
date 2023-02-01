import Banner from "@/components/Banner/Banner";
import styles from "./match.module.css";
import { useState } from "react";
import BasicButton from "@/components/BasicButton/BasicButton";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

export default function Match() {
  return (
    <>
      <div className={styles.container}>
        <Banner />
        <div className={styles.texts}>
          <div className={styles.text}>Zostaliście dopasowani!</div>
          <div className={styles.text}>Skontaktuj się pod:</div>
          <div className={styles.mail}>sandra.kubicka@sggw.edu.pl</div>
        </div>
        <AiFillHeart className={styles.heart} />
        <Link href="/selection" className={styles.backButton}>
          <BasicButton text="Wróć do przeglądania" fontSize={36} />
        </Link>
      </div>
    </>
  );
}
