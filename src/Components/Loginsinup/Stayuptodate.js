import styles from "./Opentoworkscrolling.module.css";
const Stayuptodate = () => {
  return (
    <div className={styles.conversationtoday}>
      <div className={styles.seperation}>
        <div className={styles.info}>
          <div className={styles.heading}>
            <p>Stay up to date on your </p>
            <p className={styles.secondheading}>industry</p>
          </div>
          <div className={styles.infosec}>
            <p className={styles.infodescription}>
              From live vedios,to stories ,to newsletters and more,LinkedIn is
              full of ways to stay up to date on the latest discussion in your
              industry.
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <img
            className={styles.mblinhand}
            src="https://c8.alamy.com/comp/T1P607/12th-july-2018-trent-bridge-nottingham-england-1st-odi-royal-london-one-day-series-england-v-india-rohit-sharma-of-india-T1P607.jpg"
            alt="mblinhand"
          />
        </div>
      </div>
    </div>
  );
};
export default Stayuptodate;
