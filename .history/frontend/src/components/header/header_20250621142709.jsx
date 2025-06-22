import React from 'react';
import { useAuth } from '../../context/AuthContext';
import styles from './header.module.scss';

export default function Header() {
  const { user, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className={styles.main}>
      <div className={styles.circleWrapper}>
        <div className={`${styles.circle} ${styles.purple}`}></div>
        <div className={`${styles.circle} ${styles.yellow}`}></div>
        <div className={`${styles.circle} ${styles.blue}`}></div>
      </div>

      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <img src="logo.png" alt="Classmates Logo" />
        </a>

        <section className={styles.buttons}>
          <a href="/recommender" className={styles.recommender}>
            Recommender
          </a>

          <a href="/transcript" className={styles.transcripts}>
            Your Transcripts
          </a>
        </section>

        {user && (
          <a href="#" onClick={handleLogout} className={styles.logOut}>
            Log out
          </a>
        )}
      </header>
    </div>
  );
}