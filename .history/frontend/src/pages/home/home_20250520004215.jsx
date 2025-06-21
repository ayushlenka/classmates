// "use client";

// import styles from "./home.module.scss";
// import Footer from "../../components/footer/footer";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <div className={styles.circleWrapper}>
//           <div className={`${styles.circle} ${styles.purple}`}></div>
//           <div className={`${styles.circle} ${styles.yellow}`}></div>
//           <div className={`${styles.circle} ${styles.blue}`}></div>
//         </div>

//         <header className={styles.header}>
//           <a href="/" className={styles.logo}>
//             <img src="logo.png" alt="classmate logo" />
//           </a>

//           <section className={styles.buttons}>
//             <a href="#" className={styles.signUp}>
//               Sign up
//             </a>

//             <a href="#" className={styles.logIn}>
//               Log in
//             </a>
//           </section>
//         </header>

//         <section className={styles.content}>
//           <section className={styles.title}>
//             <h1>Classmates</h1>
//             {/* 
//             <p>
//               An <span>AI-powered</span> course planning system that helps UC
//               Davis students select classes based on their{" "}
//               <span>major, expected graduation,</span> and
//               <span> current transcript</span>.
//             </p> */}

//             <a href="#" className={styles.getStarted}>
//               Get Started →
//             </a>
//           </section>

//           <section className={styles.hero}>
//             <img
//               src="hero.png"
//               alt="transcript generator example"
//               className={styles.proto}
//             />
//           </section>

//           <section className={styles.cards}>
//             <h2>How It Works</h2>

//             <div className={styles.list}>
//               <div className={styles.card}>
//                 <img
//                   src="lucide_lightbulb.svg"
//                   alt="Lightbulb Icon"
//                   className={styles.icon}
//                 />

//                 <h3>
//                   <span>AI-Powered</span> Recommendations
//                 </h3>
//                 <p>
//                   Our advanced AI analyzes your academic history and goals to
//                   suggest the most suitable classes for your unique path.
//                 </p>
//               </div>

//               <div className={styles.card}>
//                 <img src="lucide_cap.svg" className={styles.icon} />
//                 <h3>
//                   <span>Personalized</span> for UCD Students
//                 </h3>
//                 <p>
//                   Tailored specifically for UC Davis students, ensuring all
//                   recommendations align with university requirements.
//                 </p>
//               </div>

//               <div className={styles.card}>
//                 <img src="mdi_calendar.svg" className={styles.icon} />
//                 <h3>
//                   <span>Efficient</span> Schedule Building
//                 </h3>
//                 <p>
//                   Save time and stress by quickly generating optimized class
//                   schedules that keep you on track for graduation.
//                 </p>
//               </div>
//             </div>
//           </section>

//           <div className={styles.circleWrapperMiddle}>
//             <div className={`${styles.circle} ${styles.purple}`}></div>
//             <div className={`${styles.circle} ${styles.yellow}`}></div>
//             <div className={`${styles.circle} ${styles.blue}`}></div>
//           </div>

//           <section className={styles.letsGetStarted}>
//             <img
//               src="logo.png"
//               alt="classmate logo"
//               className={styles.startedPic}
//             />

//             <h2>Let’s Get Started</h2>

//             <a href="#" className={styles.primaryBtn}>
//               Make my schedule →
//             </a>
//           </section>

//           <section className={styles.community}>
//             <h2>Join Our Community</h2>

//             <p>
//               Connect with fellow UC Davis students and get the latest updates
//               on Classmates.
//             </p>

//             <a href="#" className={styles.primaryBtn}>
//               Join Our Discord →
//             </a>
//           </section>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

"use client";

import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <div className="bg-[#101010]">
      <main className="flex flex-col items-center pt-[90px] bg-[#101010]">
        {/* Animated Background Circles */}
        <div className="absolute top-[300px] left-[20%] h-[600px] w-[50%]">
          <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#bc55ec] w-[600px] h-[600px] animate-purpleBounce"></div>
          <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#efff8f] w-[400px] h-[400px] animate-yellowBounce"></div>
          <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#4fe2e2cc] w-[500px] h-[500px] animate-blueBounce"></div>
        </div>

        {/* Header */}
        <header className="flex justify-between items-center w-full">
          <a href="/" className="ml-[100px]">
            <img src="logo.png" alt="classmate logo" className="w-10 h-10" />
          </a>

          <section className="flex gap-[30px] mr-[100px]">
            <a className="px-5 py-2 rounded-full bg-[rgba(232,184,255,0.34)] shadow-[0px_0px_20px_0px_rgba(255,255,255,0.45)] text-white text-[18px] font-normal font-inter" href="#">
              Sign up
            </a>
            <a className="px-5 py-2 rounded-full bg-[rgba(255,255,255,0.2)] text-white text-[18px] font-normal font-inter" href="#">
              Log in
            </a>
          </section>
        </header>

        {/* Main Content */}
        <section className="flex flex-col items-center w-full">
          <section className="flex flex-col items-start w-[1030px]">
            <h1 className="mt-[70px] mb-0 text-white text-[100px] font-thin font-archivo drop-shadow-[0px_4px_40px_rgba(255,255,255,0.4)]">
              Classmates
            </h1>
            <a href="#" className="mt-[16px] mb-[46px] px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[18px] font-medium font-inter">
              Get Started →
            </a>
          </section>

          <section className="flex flex-col items-center">
            <img src="hero.png" alt="transcript generator example" className="w-[1240px] h-[920px] z-20" />
          </section>

          <section className="flex flex-col items-center mt-[200px] gap-[72px]">
            <h2 className="text-white text-[64px] font-thin font-archivo">How It Works</h2>
            <div className="flex gap-[30px]">
              {[
                {
                  icon: "lucide_lightbulb.svg",
                  title: "AI-Powered Recommendations",
                  desc: "Our advanced AI analyzes your academic history and goals to suggest the most suitable classes for your unique path.",
                },
                {
                  icon: "lucide_cap.svg",
                  title: "Personalized for UCD Students",
                  desc: "Tailored specifically for UC Davis students, ensuring all recommendations align with university requirements.",
                },
                {
                  icon: "mdi_calendar.svg",
                  title: "Efficient Schedule Building",
                  desc: "Save time and stress by quickly generating optimized class schedules that keep you on track for graduation.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center w-[400px] h-[350px] p-5 rounded-[20px] border border-white bg-[rgba(255,255,255,0.2)]"
                >
                  <img src={card.icon} alt="icon" className="mt-10 w-[69px] h-[69px]" />
                  <h3 className="mt-[50px] text-white text-[24px] font-extralight text-center font-archivo">
                    <span className="text-[#bc55ec] font-medium">{card.title.split(" ")[0]}</span>{" "}
                    {card.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-white text-[18px] font-light text-center font-archivo leading-[26px]">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Middle Circles */}
          <div className="absolute top-[2000px] left-[30%] h-[400px] w-[30%]">
            <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#bc55ec] w-[300px] h-[300px] animate-purpleBounce"></div>
            <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#efff8f] w-[150px] h-[150px] animate-yellowBounce"></div>
            <div className="absolute rounded-full opacity-70 blur-[200px] z-10 bg-[#4fe2e2cc] w-[250px] h-[250px] animate-blueBounce"></div>
          </div>

          {/* Let's Get Started */}
          <section className="flex flex-col items-center mt-[200px] z-20">
            <img src="logo.png" alt="classmate logo" className="w-[60px] h-[60px] z-20" />
            <h2 className="mt-6 mb-6 text-white text-[48px] font-light font-archivo">Let’s Get Started</h2>
            <a href="#" className="px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[18px] font-medium font-inter z-20">
              Make my schedule →
            </a>
          </section>

          {/* Community Section */}
          <section className="flex flex-col items-center mt-[192px] gap-3">
            <h2 className="text-white text-[48px] font-thin text-center font-archivo">Join Our Community</h2>
            <p className="text-white text-[24px] font-normal text-center leading-[36px] font-archivo">
              Connect with fellow UC Davis students and get the latest updates on Classmates.
            </p>
            <a href="#" className="mt-3 px-5 py-2 rounded-full bg-[rgba(188,85,236,0.35)] shadow-[0px_0px_20px_0px_rgba(232,184,255,0.34)] text-white text-[18px] font-medium font-inter">
              Join Our Discord →
            </a>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

