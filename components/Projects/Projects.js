import styles from "./Projects.module.css";

const ProjectCard = () => {
  return (
    <div className={styles.card}>
      <img src="/assets/images/ecom.jpg" alt="project" />
      <div className={styles["card-body"]}>
        <h5 className={styles["card-title"]}>Ecommerce pro</h5>
        <p className={styles["card-text"]}>
          Esto fue un proyecto que fue la puta ostia, conseguimos 1 millon de
          pedidos mensuales con 0 caidas
        </p>
      </div>
      <div className={styles["card-footer"]}>
        <button className="button button-primary">Ver demo</button>
        <span>Source</span>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <h3>Projects</h3>
      <div className={styles["projects-wrapper"]}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
