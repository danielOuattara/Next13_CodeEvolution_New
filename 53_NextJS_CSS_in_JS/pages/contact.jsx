import * as styles from "./../styles/Contact.module.css";
import * as scss_styles from "./../styles/Contact.module.scss";

export default function Contact() {
  return (
    <>
      <h2 className={styles.heading}>Contact Page</h2>
      <h2 className={scss_styles["heading-scss"]}>Contact Page</h2>
    </>
  );
}
