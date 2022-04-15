import styles from "../styles/navPage.module.css";

export default function navPage() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Buy Now</h1>
      </div>
      <div>
        <h1>About us</h1>
      </div>
      <div>
        <h1>FAQ</h1>
      </div>
      <div>
        <h1>Test</h1>
      </div>
    </div>
  );
}
