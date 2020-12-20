import Image from "next/image";
import Link from "next/link";
import styles from "./Terminal.module.css";

const Terminal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles["left-column"]}>
        <img
          className={styles["profile-img"]}
          src="/assets/images/profile.jpeg"
          alt="picture of me"
          width={200}
          height={200}
        />
      </div>

      <div className={styles["nav-wrapper"]}>
        <a href="/">
          <div className={styles["dots-wrapper"]}>
            <div className={styles["browser-dot"]}></div>
            <div className={styles["browser-dot"]}></div>
            <div className={styles["browser-dot"]}></div>
          </div>
        </a>
        <ul className={styles.navigation}>
          <li>
            <a href="index.html#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className={styles["right-column"]}>
        <div className={styles["preview-shadow"]}>
          <div className={styles["preview"]}>
            <div className={`${styles.corner} ${styles["corner-tl"]}`}></div>
            <div className={`${styles.corner} ${styles["corner-tr"]}`}></div>
            <h3>What I Do</h3>
            <p>
              I was a lead developer in a past life, now I enjoy teaching
              courses.
            </p>
            <div className={`${styles.corner} ${styles["corner-br"]}`}></div>
            <div className={`${styles.corner} ${styles["corner-bl"]}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
