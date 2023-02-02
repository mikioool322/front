'use client';
import Banner from "@/components/Banner/Banner";
import styles from "./registration.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { HttpService } from "@/components/http.service";
import ReactSelect from "react-select";
import Link from "next/link";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [photo, setPhoto] = useState();
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [ageError, setAgeError] = useState("");
  const [degree, setDegree] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registrationResult, setRegistrationResult] = useState("");
  const handleCheckEmail = (value) => {

    if (/^\w+([\.-]?\w+)*@sggw.edu.pl/.test(value)) {
      setEmailError("");
      setEmail(value);
    } else {
      setEmailError("Nieprawidłowy email!");
    }
  };

  const handleCheckPassword = (value) => {

    if (value.length >= 8) {
      setPasswordError("");
      setPassword(value);
    } else {
      setPasswordError("Hasło za krótkie");
    }
  };

  const handleDescriptionChange = (value) => {
    setDescription(value)
  };

  const handleUserNameChange = (value) => {
    setUserName(value)
  };

  const handleGenderChange = (value) => {
    setGender(value)
  };

  const handleDegreeChange = (value) => {
    setDegree(value)
  };

  const handleAgeChange = (value) => {
    if (value < 15 || value > 80) {
      setAgeError("Dopuszczalny wiek 15-80")
    }
    else {
      setAgeError("")
      setAge(value)
    }
  };

  const hanglePhotoChange = (file) => {
    var reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        var binaryData = e.target.result;
        var base64String = window.btoa(binaryData);
        setPhoto(base64String);
      };
    })(file);

    reader.readAsBinaryString(file);
  };

  const handlePhoneNumberChange = (value) => {
    if (value.length !== 9) {
      setPhoneNumberError("Numer telefonu musi miec 9 znakow. Przykład 777888999")
    }
    else {
      setPhoneNumberError("")
    }
    setPhoneNumber(value)
  };

  const handleRegister = () => {
    if (isFormValid()) {

      HttpService.post(
        "http://tinder-sggw.herokuapp.com/api/user/",
        {
          'userEmail': email,
          'password': password,
          'userName': userName,
          'description': description,
          'phoneNumber': phoneNumber,
          'photo': photo,
          'gender': gender,
          'age': age,
          'degree': degree
        }).then((response) => {
          
        }).catch((e) => {
          if (e.response !== undefined && e.response.status === 409) {
            setRegistrationResult("Konto na podany email istnieje")
          }
        })
    }
  };

  const genderOptions = [
    { value: "FEMALE", label: "Kobieta" },
    { value: "MALE", label: "Mężczyzna" },
  ];

  const degreeOptions = [
    { value: "COMPUTER_SCIENCE", label: "Informatyka" },
    { value: "MEDICINE", label: "Medycyna" },
    { value: "DIETETICS", label: "Dietetyka" },
    { value: "PEDAGOGY", label: "Pedagogika" },
    { value: "JOURNALISM", label: "Dziennikarstwo" },
  ];

  const isFormValid = () => {
    return passwordError.length === 0 &&
      emailError.length === 0 &&
      userName.length >= 0 &&
      phoneNumberError.length === 0 &&
      gender.length !== 0 &&
      ageError.length === 0 &&
      degree.length !== 0
  }

  return (
    <>
      <div className={styles.container}>
        <Banner />

        <form>
          <div className={styles.inputs}>
            <div className={styles.text}>Rejestracja</div>
            <input placeholder="Email" className={styles.input} type="email" onChange={(event) => handleCheckEmail(event.target.value)} />
            {emailError !== "" && (
              <div className={styles.invalid}>{emailError}</div>
            )}

            <input placeholder="Hasło" className={styles.input} type="password" onChange={(event) => handleCheckPassword(event.target.value)} />
            {passwordError !== "" && (
              <div className={styles.invalid}>{passwordError}</div>
            )}

            <input placeholder="Imie" className={styles.input} type="text" onChange={(event) => handleUserNameChange(event.target.value)} />

            <div className={styles.uploadPhoto}>
              <label for="file-upload" className={styles.button}>
                Dodaj zdjęcie
              </label>
              <input type="file" name="myImage" accept="image/*" id="file-upload" className={styles.input} onChange={(event) => { hanglePhotoChange(event.target.files[0]); }}
              />
            </div>

            <textarea placeholder="Napisz pare zdań o sobie..." className={styles.textArea} onChange={(event) => handleDescriptionChange(event.target.value)} />
            <input placeholder="numer telefonu" className={styles.input} type="number" onChange={(event) => handlePhoneNumberChange(event.target.value)} />
            {phoneNumber.length !== 9 && (
              <div className={styles.invalid}>{phoneNumberError}</div>
            )}

            <ReactSelect placeholder="Wybierz płeć..." className={styles.select} options={genderOptions} onChange={(event) => handleGenderChange(event.value)} />

            <input placeholder="wiek" className={styles.input} type="number" onChange={(event) => handleAgeChange(event.target.value)} />
            {ageError.length !== 0 && (
              <div className={styles.invalid}>{ageError}</div>
            )}

            <ReactSelect placeholder="Wybierz kierunek studiów" className={styles.select} options={degreeOptions} onChange={(event) => handleDegreeChange(event.value)} />

            <Button variant="contained" color="primary" onClick={handleRegister}>
              zarejestruj sie!
            </Button>
            <Link href="/login" className={styles.backButton}>
              <Button variant="contained" color="primary">
                Przejdz do logowania
              </Button>
            </Link>
            {registrationResult !== "" && (
              <div className={styles.invalid}>{registrationResult}</div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
