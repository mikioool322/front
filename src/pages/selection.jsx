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
  const [currentPartner, setCurrentPartner] = useState();
  const initData = () => {
    HttpService.get(
      "http://localhost:8080/api/user/s2080@sggw.edu.pl/preferences",
    ).then((response) => {
      if (response.status === 200) {
        setPossiblePartners(response.data.map(d => new UserDetails(d.userEmail, d.userName, d.description, d.phoneNumber, d.photo, d.gender, d.age, d.degree)))
        setCurrentPartner(possiblePartners[0])
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

  const renderPhoto = () => {
    possiblePartners.length > 0 ? (<img alt="Red dot" src={"data:image/png;base64," + possiblePartners[0].photo} />)
      : <></>
  };

  const saveAccept = () => {
    if (possiblePartners.length > 0) {
      HttpService.post(
        "http://localhost:8080//api/user-matches/add-decision/",
        {
          'selectingUserEmail': 's2080@sggw.edu.pl',
          'selectedUserEmail': possiblePartners[0].userEmail,
          'selectedUserApproved': true
        }
      )
      possiblePartners.shift();
        setCurrentPartner(possiblePartners[0]);
    }
  };

  const saveDecline = () => {
    if (possiblePartners.length > 0) {
      HttpService.post(
        "http://localhost:8080//api/user-matches/add-decision/",
        {
          'selectingUserEmail': 's2080@sggw.edu.pl',
          'selectedUserEmail': possiblePartners[0].userEmail,
          'selectedUserApproved': true
        }
      )
      possiblePartners.shift();
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Banner />
        <div className={styles.photoSection}>
          <FiCheck className={styles.check} onClick={saveAccept} />
          <div className={styles.image}>

          </div>
          <FiX className={styles.x} onClick={saveDecline} />
        </div>
        <div className={styles.informations}>
          <div>
            <div>Imie:{currentPartner !== undefined && currentPartner.userName}</div>
            <div>Wiek:{currentPartner !== undefined && currentPartner.age}</div>
            <div>Kierunek:{currentPartner !== undefined && degree.get(currentPartner.degree)}</div>
            <div>Płeć: {currentPartner !== undefined && currentPartner.gender} </div>
            <div>Opis: {currentPartner !== undefined && currentPartner.description} </div>
          </div>
        </div>
        <Button variant="contained" color="primary" onClick={initData}>
          Załaduj liste partnerek
        </Button>
      </div>
    </>
  );
}
