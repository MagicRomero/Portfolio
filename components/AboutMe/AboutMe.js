import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["about-me"]}>
        <h4>More about me</h4>

        <p>
          I build new projects just to tickle my brain and love teaching others
          how they're made.
        </p>

        <p>
          While I keep busy teaching courses, I still take interviews in search
          of a great team & projects that interest me.
        </p>
      </div>
      <div className={styles["about-me"]}>
        <h4>Top Expertise</h4>

        <div className={styles.skills}>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Postgres</li>
          </ul>

          <ul>
            <li>Google Maps API</li>
            <li>JS Charts</li>
            <li>AWS (RDS/S3)</li>
            <li>Heroku</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
