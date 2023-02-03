
import Banner from "@/components/Banner/Banner";
import styles from "./choose-preferences.module.css";
import { useState } from "react";
import ReactSelect from "react-select";
import { Button } from "@mui/material";
import { HttpService } from "@/components/http.service";
import { useRouter } from 'next/router'
import Link from "next/link";
export default function Choose() {
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [ageError, setAgeError] = useState("");
  const [gender, setGender] = useState("");

  const router = useRouter();
  const email = router.query.email;

  const handleMinAgeChange = (value) => {
    if (value < 15 || value > 80) {
      setAgeError("Dopuszczalny wiek 15-80")
    }
    else {
      setAgeError("")
      setMinAge(value)
    }
  };

  const handleMaxAgeChange = (value) => {
    if (value < 15 || value > 80) {
      setAgeError("Dopuszczalny wiek 15-80")
    }
    else {
      setAgeError("")
      setMaxAge(value)
    }
  };

  const handleGenderChange = (value) => {
    setGender(value)
  };

  const handleRegisterPreferences = () => {
    if (isFormValid()) {
      HttpService.post(
        `http://tinder-sggw.herokuapp.com/api/user/${email}/preferences`,
        {
          'minAge': minAge,
          'maxAge': maxAge,
          'gender': gender,

        }).then((response) => {
          if (response.status === 200) {
            NextResponse.redirect('/selection')
          }
        }).catch((e) => {
          if (e.response !== undefined && e.response.status === 409) {
            setRegistrationResult("Konto na podany email istnieje")
          }
        })
    }
  };

  const isFormValid = () => {
    return minAge >= 15 &&
      maxAge <= 80 &&
      minAge < maxAge &&
      gender.length !== 0
  };

  const genderOptions = [
    { value: "FEMALE", label: "Kobieta" },
    { value: "MALE", label: "Mężczyzna" },
  ];

  return (
    <>
      <div className={styles.container}>
        <Banner />

        <div className={styles.text}>Wybierz swojego idealnego partnera</div>
        <div className={styles.input}>

          <ReactSelect placeholder="Wybierz płeć..." className={styles.select} options={genderOptions} onChange={(event) => handleGenderChange(event.value)} />

          <input placeholder="Minimalny wiek" className={styles.input} type="number" onChange={(event) => handleMinAgeChange(event.target.value)} />

          <input placeholder="Maksymalny wiek" className={styles.input} type="number" onChange={(event) => handleMaxAgeChange(event.target.value)} />
          {ageError.length !== 0 && (
            <div className={styles.invalid}>{ageError}</div>
          )}
        </div>
        <Link href={`/selection/${email}`} className={styles.backButton}>         
        <Button variant="contained" color="primary" onClick={handleRegisterPreferences}>
          Dalej
        </Button>
        </Link>
      </div>
    </>
  );
}