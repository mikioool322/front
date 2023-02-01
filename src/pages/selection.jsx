import Banner from "@/components/Banner/Banner";
import styles from "./selection.module.css";
import { useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Selection() {
  return (
    <>
      <div className={styles.container}>
        <Banner />
        <div className={styles.photoSection}>
          <Link href="/match">
            <FiCheck className={styles.check} />
          </Link>
          <div className={styles.image}>
            <img src="sandra 1.png" />
          </div>
          <FiX className={styles.x} />
        </div>
        <div className={styles.informations}>
          <div>
            <div>30 lat</div>
            <div>Informatyka</div>
            <div>Lubię: bieganie, śpiewanie, PODRÓŻE, </div>
            <div>
              Jestem pogodną osobą, lubię podróże mam 5 dzieci bla bla bla
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
