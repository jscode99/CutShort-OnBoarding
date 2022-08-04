//Styles
import styles from "./index.module.sass";

export default function AppHeader({ title, des }) {
  return (
    <div className="pb-3">
      <p className={`${styles.contentone_title} text-center`}>
        {title}
      </p>
      <p className={`${styles.contentone_subtitle} text-center`}>
        {des}
      </p>
    </div>
  );
}
