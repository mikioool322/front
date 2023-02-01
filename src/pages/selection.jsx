import Banner from "@/components/Banner/Banner";
import styles from "./selection.module.css";
import { useState } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@mui/material";
import { HttpService } from "@/components/http.service";
import { UserDetails } from "@/components/UserDetails";

export default function Selection() {
  const [possiblePartners, setPossiblePartners] = useState([]);

  const initData = () => {
    HttpService.get(
      "http://localhost:8080/api/user/s2080@sggw.edu.pl/preferences",
    ).then((response) => {
      if (response.status === 200) {
        setPossiblePartners(response.data.map(d => new UserDetails(d.userEmail, d.description, d.phoneNumber, d.photo, d.gender, d.age, d.degree)))
      }
    })
  };

  const degree = new Map([

    ["COMPUTER_SCIENCE", "Informatyka"],
    ["MEDICINE", "Medycyna"],
    ["DIETETICS", "Dietetyka"],
    ["PEDAGOGY", "Pedagogika"],
    ["JOURNALISM", "Dziennikarstwo"],
  ]);

  const gender = new Map([
    ["FEMALE", "kobieta"],
    ["MALE", "mężczyzna"],
  ]);

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
            <div>Wiek:{possiblePartners.length > 0 && possiblePartners[0].age}</div>
            <div>Kierunek:{possiblePartners.length > 0 && degree.get(possiblePartners[0].degree)}</div>
            <div>Płeć: {possiblePartners.length > 0 && possiblePartners[0].gender} </div>
            <div>Opis: {possiblePartners.length > 0 && possiblePartners[0].description} </div>
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={initData}>
          Dalej
        </Button>
      </div>
    </>
  );
}
