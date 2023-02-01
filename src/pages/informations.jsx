import Banner from "@/components/Banner/Banner";
import styles from "./informations.module.css";
import { useState } from "react";
import BasicButton from "@/components/BasicButton/BasicButton";
import ReactSelect from "react-select";
import Link from "next/link";

const zainteresowania = [
  { value: "ŚPIEWANIE", label: "ŚPIEWANIE" },
  { value: "GOTOWANIE", label: "GOTOWANIE" },
  { value: "OGRODNICTWO", label: "OGRODNICTWO" },
  { value: "FOTOGRAFIA", label: "FOTOGRAFIA" },
  { value: "OGLĄDANIE FILMÓW", label: "OGLĄDANIE FILMÓW" },
  { value: "MOTORYZACJA", label: "MOTORYZACJA" },
  { value: "PŁYWANIE", label: "PŁYWANIE" },
  { value: "MALARSTWO", label: "MALARSTWO" },
  { value: "CZYTANIE KSIĄŻEK", label: "CZYTANIE KSIĄŻEK" },
  { value: "MAJSTERKOWANIE", label: "MAJSTERKOWANIE" },
  { value: "BIEGANIE", label: "BIEGANIE" },
  { value: "PODRÓŻE", label: "PODRÓŻE" },
];

const kierunekStudiow = [
  { value: "ARCHITEKTURA KRAJOBRAZU", label: "ARCHITEKTURA KRAJOBRAZU" },
  { value: "BEZPIECZEŃSTWO ŻYWNOŚCI", label: "BEZPIECZEŃSTWO ŻYWNOŚCI" },
  { value: "BIO INŻYNIERIA ZWIERZĄT", label: "BIO INŻYNIERIA ZWIERZĄT" },
  { value: "BIOLOGIA", label: "BIOLOGIA" },
  { value: "BIOTECHNOLOGIA", label: "BIOTECHNOLOGIA" },
  { value: "BUDOWNICTWO", label: "BUDOWNICTWO" },
  { value: "DIETETYKA", label: "DIETETYKA" },
  {
    value: "EKOLOGICZNE ROLNICTWO I PRODUKCJA ŻYWNOŚCI",
    label: "EKOLOGICZNE ROLNICTWO I PRODUKCJA ŻYWNOŚCI",
  },
  { value: "EKONOMIA", label: "EKONOMIA" },
  { value: "MAJSTERKOWANIE", label: "MAJSTERKOWANIE" },
  { value: "FINANSE I RACHUNKOWOŚĆ", label: "FINANSE I RACHUNKOWOŚĆ" },
  {
    value: "FOOD SCIENCE: TECHNOLOGY AND NUTRITION",
    label: "FOOD SCIENCE: TECHNOLOGY AND NUTRITION",
  },
  { value: "GASTRONOMIA I HOTELARSTWO", label: "GASTRONOMIA I HOTELARSTWO" },
  { value: "GOSPODARKA PRZESTRZENNA", label: "GOSPODARKA PRZESTRZENNA" },
  {
    value: "HODOWLA I OCHRONA ZWIERZĄT TOWARZYSZĄCYCH I DZIKICH",
    label: "HODOWLA I OCHRONA ZWIERZĄT TOWARZYSZĄCYCH I DZIKICH",
  },
  { value: "INFORMATYKA", label: "INFORMATYKA" },
  { value: "INFORMATYKA I EKONOMETRIA", label: "INFORMATYKA I EKONOMETRIA" },
  { value: "INŻYNIERIA EKOLOGICZNA", label: "INŻYNIERIA EKOLOGICZNA" },
  {
    value: "INŻYNIERIA I GOSPODARKA WODNA",
    label: "INŻYNIERIA I GOSPODARKA WODNA",
  },
  { value: "INŻYNIERIA ŚRODOWISKA", label: "INŻYNIERIA ŚRODOWISKA" },
  {
    value: "INŻYNIERIA SYSTEMÓW BIOTECHNICZNYCH",
    label: "INŻYNIERIA SYSTEMÓW BIOTECHNICZNYCH",
  },
  { value: "LEŚNICTWO", label: "LEŚNICTWO" },
  { value: "LOGISTYKA", label: "LOGISTYKA" },
  { value: "MEBLARSTWO", label: "MEBLARSTWO" },
  { value: "OCHRONA ŚRODOWISKA", label: "OCHRONA ŚRODOWISKA" },
  { value: "OCHRONA ZDROWIA ROŚLIN", label: "OCHRONA ZDROWIA ROŚLIN" },
  { value: "OGRODNICTWO", label: "OGRODNICTWO" },
  {
    value: "OGRODNICTWO MIEJSKIE I ARBORYSTYKA",
    label: "OGRODNICTWO MIEJSKIE I ARBORYSTYKA",
  },
  { value: "PEDAGOGIKA", label: "PEDAGOGIKA" },
  { value: "ROLNICTWO", label: "ROLNICTWO" },
  { value: "SOCJOLOGIA", label: "SOCJOLOGIA" },
  { value: "TECHNOLOGIA BIOMEDYCZNA", label: "TECHNOLOGIA BIOMEDYCZNA" },
  { value: "TECHNOLOGIA DREWNA", label: "TECHNOLOGIA DREWNA" },
  {
    value: "TECHNOLOGIA ŻYWIENIA I ŻYWIENIE CZŁOWIEKA",
    label: "TECHNOLOGIA ŻYWIENIA I ŻYWIENIE CZŁOWIEKA",
  },
  {
    value: "TECHNOLOGIE ENERGII ODNAWIALNEJ ",
    label: "TECHNOLOGIE ENERGII ODNAWIALNEJ ",
  },
  { value: "TURYSTYKA I REKREACJA", label: "TURYSTYKA I REKREACJA" },
  { value: "WETERYNARIA", label: "WETERYNARIA" },
  { value: "ZARZĄDZANIE", label: "ZARZĄDZANIE" },
  {
    value: "ZARZĄDZANIE I INŻYNIERIA PRODUKCJI",
    label: "ZARZĄDZANIE I INŻYNIERIA PRODUKCJI",
  },
  { value: "ZOOTECHNIKA", label: "ZOOTECHNIKA" },
  {
    value: "ŻYWIENIE CZŁOWIEKA I OCENA ŻYWNOŚCI",
    label: "ŻYWIENIE CZŁOWIEKA I OCENA ŻYWNOŚCI",
  },
];

const wiek = [
  { value: "18-25", label: "18-25" },
  { value: "25-30", label: "25-30" },
  { value: "30-35", label: "30-35" },
  { value: "35+", label: "35+" },
];

const plec = [
  { value: "female", label: "KOBIETA" },
  { value: "male", label: "MĘŻCZYZNA" },
];

export default function Informations() {
  return (
    <>
      <div className={styles.container}>
        <Banner />
        <div className={styles.text}>Informacje o sobie</div>
        <ReactSelect
          isMulti
          placeholder="Wybierz zainteresowania..."
          className={styles.select}
          options={zainteresowania}
        />
        <ReactSelect
          placeholder="Wybierz kierunek studiów..."
          className={styles.select}
          options={kierunekStudiow}
        />
        <ReactSelect
          placeholder="Wybierz wiek..."
          className={styles.select}
          options={wiek}
        />
        <ReactSelect
          placeholder="Wybierz płeć..."
          className={styles.select}
          options={plec}
        />
        <Link href="/choose-parameters" className={styles.nextButton}>
          <BasicButton text="Dalej" fontSize={24} />
        </Link>
      </div>
    </>
  );
}
