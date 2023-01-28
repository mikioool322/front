import styles from "./BasicButton.module.css";

export default function BasicButton({ text, fontSize }) {
  return (
    <button className={styles.button} style={{ fontSize: `${fontSize}px` }}>
      {text}
    </button>
  );
}
