import Banner from "@/components/Banner/Banner";
import styles from "./match.module.css";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { NextPartnerProvider } from "@/components/NextPartnerProvider/NextPartnerProvider";
import { Button } from "@mui/material";
import { HttpService } from "@/components/http.service";
import { UserDetails } from "@/components/UserDetails";
import { useRouter } from 'next/router'
export default function Match() {
  const [nextPartnerProvider, setNextPartnerProvider] = useState(new NextPartnerProvider([]));

  const router = useRouter();
  const email = router.query.email;

  const initData = () => {
    HttpService.get(
      `http://localhost:8080/api/user-matches/${email}`,
    ).then((response) => {
      if (response.status === 200) {
        setNextPartnerProvider(new NextPartnerProvider(response.data.map(d => new UserDetails(d.userEmail, d.userName, d.description, d.phoneNumber, d.photo, d.gender, d.age, d.degree))));
      }
    })
  };

  return (
    <>
      <div className={styles.container}>
        <Banner />
        {nextPartnerProvider.printDates()}
        <AiFillHeart className={styles.heart} />
        <Button variant="contained" color="primary" onClick={initData}>
          Załaduj liste dopasowanych partnerek
        </Button>
      </div>
    </>
  );
}
