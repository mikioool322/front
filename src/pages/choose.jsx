import Banner from "@/components/Banner/Banner";
import styles from "./choose.module.css";
import { useState } from "react";
import BasicButton from "@/components/BasicButton/BasicButton";
import Link from "next/link";

export default function Choose() {
  return (
    <>
      <div className={styles.container}>
        <Banner />
        <div className={styles.text}>Wybierz swojego idealnego partnera</div>
        <div className={styles.radios}>
          <div>
            <div className={styles.radioText}>Wybierz wiek partnera</div>
            <div>
              <input type="radio" id="18-25" name="age" value="18-25" />
              <label className={styles.label} htmlFor="18-25">
                18-25
              </label>
            </div>

            <div>
              <input type="radio" id="25-30" name="age" value="25-30" />
              <label className={styles.label} htmlFor="25-30">
                25-30
              </label>
            </div>

            <div>
              <input type="radio" id="30-35" name="age" value="30-35" />
              <label className={styles.label} htmlFor="30-35">
                30-35
              </label>
            </div>
            <div>
              <input type="radio" id="30+" name="age" value="30+" />
              <label className={styles.label} htmlFor="30+">
                30+
              </label>
            </div>
          </div>
          <div>
            <div className={styles.radioText}>Wybierz płeć partnera</div>
            <div>
              <input type="radio" id="KOBIETA" name="sex" value="KOBIETA" />
              <label className={styles.label} htmlFor="KOBIETA">
                KOBIETA
              </label>
            </div>

            <div>
              <input type="radio" id="MĘŻCZYZNA" name="sex" value="MĘŻCZYZNA" />
              <label className={styles.label} htmlFor="MĘŻCZYZNA">
                MĘŻCZYZNA
              </label>
            </div>
          </div>
        </div>
        <Link href="/searching" className={styles.nextButton}>
          <BasicButton text="Dalej" fontSize={24} />
        </Link>
      </div>
    </>
  );
}
