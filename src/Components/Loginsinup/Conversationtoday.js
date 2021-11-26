import styles from "./Opentoworkscrolling.module.css";
const Conversationtoday = () => {
  return (
    <div className={styles.conversationtoday}>
      <div className={styles.seperation}>
        <div className={styles.info}>
          <div className={styles.heading}>
            <p>Conversations today could lead</p>
            <p className={styles.secondheading}>to opportunity tomorrow</p>
          </div>
          <div className={styles.infosec}>
            <p className={styles.infodescription}>
              Sending messages to people you know is a great way to strengthen
              relationships as you take next step in your Career.
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <img
            className={styles.mblinhand}
            src="https://previews.123rf.com/images/garetsworkshop/garetsworkshop1806/garetsworkshop180600061/104140494-young-african-american-girl-working-on-laptop-in-restaurant-pretty-girl-with-dark-curly-hair-sitting.jpg"
            alt="mblinhand"
          />
        </div>
      </div>
    </div>
  );
};
export default Conversationtoday;
