import * as styles from "./../styles/About.module.css";
import * as scss_styles from "./../styles/About.module.scss";

export default function About() {
  return (
    <>
      <h2 className={styles.heading}>About Page</h2>
      <h2 className={scss_styles["heading-scss"]}>About Page</h2>

      <button className="btn btn-primary mx-2">Click</button>
      <button className="btn btn-success mx-2">Click</button>
    </>
  );
}
