import styles from "../app.module.scss";
import HydrationCheck from "../utils/HydrationCheck";

const Test = () => {
  return (
    <HydrationCheck>
      <span className={styles.debug}>test</span>
    </HydrationCheck>
  );
};

export default Test;
