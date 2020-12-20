import styles from "./Header.module.css";

const Header = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <h5>Personalize theme</h5>

      <div className={styles["theme-options-wrapper"]}>
        <div
          data-mode="light"
          id="light-mode"
          className={`${styles["theme-dot"]} ${styles["light-mode"]}`}
        ></div>
        <div
          data-mode="blue"
          id="blue-mode"
          className={`${styles["theme-dot"]} ${styles["blue-mode"]}`}
        ></div>
        <div
          data-mode="green"
          id="green-mode"
          className={`${styles["theme-dot"]} ${styles["green-mode"]}`}
        ></div>
        <div
          data-mode="purple"
          id="purple-mode"
          className={`${styles["theme-dot"]} ${styles["purple-mode"]}`}
        ></div>
      </div>
    </div>
  );
};

export default Header;
