"use client"
import styles from "./BasicButton.module.css";
import { Button } from "@mui/material"
export default function BasicButton({ text, fontSize,onClick }) {
  return (
    <Button onClick ={onClick} className={styles.button} style={{ fontSize: `${fontSize}px` }}>
      {text}
    </Button>
  );
}
