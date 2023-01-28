import Banner from "@/components/Banner/Banner";
import BasicButton from "@/components/BasicButton/BasicButton";
import styles from "./page.module.css";

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
          <BasicButton text="Zaloguj się" fontSize={48} />
          <BasicButton text="Zarejestruj się" fontSize={48} />
        </div>
      </div>
    </>
  );
}
