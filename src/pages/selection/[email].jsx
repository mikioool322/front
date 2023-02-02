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
import { useRouter } from 'next/router'
export default function Selection() {
  const [possiblePartners, setPossiblePartners] = useState([]);
  const [next, setNext] = useState(0);
  const [nextPartnerProvider, setNextPartnerProvider] = useState(new NextPartnerProvider([]));
  const router = useRouter();
  const email = router.query.email;

  const initData = () => {
    HttpService.get(
      `http://tinder-sggw.herokuapp.com/api/user/${email}/preferences`,
    ).then((response) => {
      if (response.status === 200) {
        setPossiblePartners(response.data.map(d => new UserDetails(d.userEmail, d.userName, d.description, d.phoneNumber, d.photo, d.gender, d.age, d.degree)));
        setNextPartnerProvider(new NextPartnerProvider(response.data.map(d => new UserDetails(d.userEmail, d.userName, d.description, d.phoneNumber, d.photo, d.gender, d.age, d.degree))));
      }
    })
  };

  const saveAccept = () => {
    if (possiblePartners.length > 0) {
      HttpService.post(
        "http://tinder-sggw.herokuapp.com/api/user-matches/add-decision/",
        {
          'selectingUserEmail': email,
          'selectedUserEmail': possiblePartners[0].userEmail,
          'selectedUserApproved': true
        }
      ).then((r) => { setNext(next + 1); })

    }
  };

  const saveDecline = async () => {
    if (possiblePartners.length > 0) {
      HttpService.post(
        "http://tinder-sggw.herokuapp.com/api/user-matches/add-decision/",
        {
          'selectingUserEmail':email,
          'selectedUserEmail': possiblePartners[0].userEmail,
          'selectedUserApproved': true
        }
      ).then((r) => { setNext(next + 1); })
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

        <Link href={`/match/${email}`} className={styles.backButton}>
          <Button variant="contained" color="primary">
            Pokaż dopasowania
          </Button>
        </Link>
      </div>
    </>
  );
}
