import { useEffect, useState } from "react";
import styles from "../app.module.scss";

const Test = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <span className={styles.debug}>test</span>
    </div>
  );
};

export default Test;
