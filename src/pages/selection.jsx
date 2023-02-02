import Banner from "@/components/Banner/Banner";
import styles from "./selection.module.css";
import { useState, useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@mui/material";
import { HttpService } from "@/components/http.service";
import { UserDetails } from "@/components/UserDetails";
import { NextPartnerProvider } from "@/components/NextPartnerProvider/NextPartnerProvider";
import BasicButton from "@/components/BasicButton/BasicButton";

export default function Selection() {
  const [possiblePartners, setPossiblePartners] = useState([]);
  const [next, setNext] = useState(0);
  const [nextPartnerProvider, setNextPartnerProvider] = useState(new NextPartnerProvider([]));
  const initData = () => {
    HttpService.get(
      "http://localhost:8080/api/user/s2080@sggw.edu.pl/preferences",
    ).then((response) => {
      if (response.status === 200) {
        setPossiblePartners(response.data.map(d => new UserDetails(d.userEmail, d.userName, d.description, d.phoneNumber, d.photo, d.gender, d.age, d.degree)));
        setNextPartnerProvider(new NextPartnerProvider(response.data.map(d => new UserDetails(d.userEmail, d.userName, d.description, d.phoneNumber, d.photo, d.gender, d.age, d.degree))));
      }
    })
  };


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
      ).then((r) => { setNext(next + 1); })

    }
  };

  const saveDecline = async () => {
    if (possiblePartners.length > 0) {
      HttpService.post(
        "http://localhost:8080//api/user-matches/add-decision/",
        {
          'selectingUserEmail': 's2080@sggw.edu.pl',
          'selectedUserEmail': possiblePartners[0].userEmail,
          'selectedUserApproved': true
        }
      )
      await setNext(next + 1);
    }
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
        {nextPartnerProvider.renderNextPartner(next, saveAccept, saveDecline)}
        <Button variant="contained" color="primary" onClick={initData}>
          Załaduj liste partnerek
        </Button>

        <Link href="/match" className={styles.backButton}>
          <Button variant="contained" color="primary">
            Pokaż dopasowania
          </Button>
        </Link>
      </div>
    </>
  );
}
