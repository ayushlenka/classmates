"use client";

import styles from "./home.module.scss";
import { LuLightbulb } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { LuCalendarCheck } from "react-icons/lu";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.circleWrapper}>
          <div className={`${styles.circle} ${styles.purple}`}></div>
          <div className={`${styles.circle} ${styles.yellow}`}></div>
          <div className={`${styles.circle} ${styles.blue}`}></div>
        </div>

        <header className={styles.header}>
          <a href="#" className={styles.logo}></a>

          <section className={styles.buttons}>
            <a href="#" className={styles.signUp}>
              Sign up
            </a>

            <a href="#" className={styles.logIn}>
              Log in
            </a>
          </section>
        </header>

        <section className={styles.content}>
          <section className={styles.title}>
            <h1>Classmates</h1>

            <p>
              An <span>AI-powered</span> course planning system that helps UC
              Davis students select classes based on their{" "}
              <span>major, expected graduation,</span> and
              <span> current transcript</span>.
            </p>
          </section>

          <section className={styles.hero}>
            <a href="#" className={styles.getStarted}>
              Get Started →
            </a>

            <img src="#" alt="" className={styles.proto} />
          </section>

          <section className={styles.cards}>
            <h2>How It Works</h2>

            <div className={styles.list}>
              <div className={styles.card}>
                <LuLightbulb className={styles.icon} />

                <h3>AI-Powered Recommendations</h3>
                <p>
                  Our advanced AI analyzes your academic history and goals to
                  suggest the most suitable classes for your unique path.
                </p>
              </div>

              <div className={styles.card}>
                <LuGraduationCap className={styles.icon} />
                <h3>Personalized for UC Davis Students</h3>
                <p>
                  Tailored specifically for UC Davis students, ensuring all
                  recommendations align with university requirements.
                </p>
              </div>

              <div className={styles.card}>
                <LuCalendarCheck className={styles.icon} />
                <h3>Plan Schedules Efficiently</h3>
                <p>
                  Save time and stress by quickly generating optimized class
                  schedules that keep you on track for graduation.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.letsGetStarted}>
            <img src="#" alt="" className={styles.startedPic} />

            <h2>Let’s Get Started</h2>

            <a href="#" className={styles.primaryBtn}>
              Make my schedule →
            </a>
          </section>

          <section className={styles.community}>
            <h2>Join Our Community</h2>

            <p>
              Connect with fellow UC Davis students and get the latest updates
              on Classmates.
            </p>

            <a href="#" className={styles.primaryBtn}>
              Join Our Discord →
            </a>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
