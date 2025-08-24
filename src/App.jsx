import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        background: "url('/bgcoklat.jpeg') no-repeat center center fixed",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      {/* Header */}
      <header className="header">
        <h1 className="logo">4LMUZAKY</h1>
        <nav className="nav">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("clip")}>Clip</button>
        </nav>
      </header>

      {/* Halaman Home */}
      {page === "home" && (
        <motion.div
          key="home"
          className="page"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card main-card">
            <div className="profile-section">
              {/* Foto Neon */}
              <div className="profile-photo">
                <img src="/rampal.jpeg" alt="Foto Frido" />
              </div>

              <h2 className="title">Frido Avan Almuzaki</h2>
              <p className="subtitle">
                Junggler Jago | Pemain Basket | Power Forward
              </p>
            </div>

            {/* Profil Singkat */}
            <div className="card section-card">
              <h3>Profil Singkat</h3>
              <p>
                Gue Frido Avan Almuzaki. Hidup gue nggak jauh-jauh dari game & olahraga.
                Di game, gue fokus di Mobile Legends dengan role jungler apalagi assasin.
                Buat gue, jungler itu seni, harus punya mekanik tinggi, map awareness,
                Fasthand, dan pastinya Retri God biar bisa nge-carry tim.
                <br /><br />
                Di luar game, gue sering turun ke lapangan basket. Main di posisi bigman /
                power forward, gue suka banget adu fisik, rebound, dan bikin momentum buat tim.
                <br /><br />
                Singkatnya, gue tipikal orang yang selalu all out, baik pas nge-game maupun pas olahraga.
              </p>
            </div>

            {/* Prestasi */}
            <div className="card section-card">
              <h3>Prestasi</h3>
              <ul>
                <li>🏆 Juara 2 MLBB Digi Fest Vol.2</li>
                <li>🥉 Juara 3 MLBB Glintung Water Street Event</li>
                <li>🏀 Juara 3 Classmeet Basketball SMKN8 (2025)</li>
                <li>🏀 Juara 2 Classmeet Basketball SMKN8 (2024)</li>
                <li>🔥 Best Player di SMPN (2023)</li>
              </ul>
            </div>

            {/* Skill Unggulan */}
            <div className="card section-card">
              <h3>Skill Unggulan</h3>
              <ul>
                <li>🎯 Retri God</li>
                <li>⚡ High Mekanik</li>
                <li>💪 Bigman Terkuat di Basket</li>
                <li>🛡️ Defense Kuat</li>
              </ul>
            </div>

            {/* Visi & Harapan */}
            <div className="card section-card">
              <h3>Visi & Harapan</h3>
              <p>
                Gue pengen jadi player yang dihormatin, entah di lapangan
                atau di game. Bukan cuma soal skill, tapi juga attitude,
                konsistensi, dan ngasih vibes positif. Intinya, tetep grind,
                tetep humble, dan buktiin kalau kerja keras + passion = hasil.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Halaman Clip */}
      {page === "clip" && (
        <motion.div
          key="clip"
          className="page"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card main-card">
            <h2 className="title">Highlight Clip</h2>
            <div className="card section-card">
              <div className="video-container">
                <video controls>
                  <source src="/videobasket1.mp4" type="video/mp4" />
                  Browser lo gak support video.
                </video>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

{/* Footer */}
<footer
  style={{
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
    background: "rgba(0,0,0,0.6)",
    fontSize: "14px",
    borderTop: "1px solid rgba(255,255,255,0.2)",
  }}
>
  © {new Date().getFullYear()} Frido Avan Almuzaki. All Rights Reserved.
</footer>

export default App;
