import { timeStamp } from "console";
import styles from "./index.module.css";

type props = {
  x: number;
  y: number;
  timeStamp: number;
  value: string;
};

const FlyingReaction = ({ x, y, timeStamp, value }: props) => {
  <div
    className={`pointer-events-none absolute select-none ${
      styles.disappear
    } text-${(timeStamp % 5) + 2}xl ${styles["goUp" + (timeStamp % 3)]}`}
    style={{ left: x, top: y }}
  >
    <div className={styles["leftRight" + (timeStamp % 3)]}>
      <div className="-translate-x-1/2 -translate-y-1/2 transform">{value}</div>
    </div>
  </div>;
};

export default FlyingReaction;