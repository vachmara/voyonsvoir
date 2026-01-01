import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <main>
        <button className={styles.button}>
          Surprise
        </button>
          <a
            className={styles.button}
            href="/contributors"
          >
            🎉 Voir les Contributeurs
          </a>
      </main>
    </div>
  );
}
