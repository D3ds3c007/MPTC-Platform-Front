import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { MFolderCardNa } from "@/app/components/ui/FolderCardNa/MFolderCardNa";

// Import de tes composants personnalisés
import { MButtonAjoutResource } from "@/app/components/ui/ButtonAjoutResource/MButtonAjoutResource";
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";


// Exemple d'image de profil
import photo from './photo.png';

// Exemple de vidéo (remplace avec props ou logique dynamique)
const videoSrc = "/video.mp4";

export default function FileDetails() {

  const allResources = [
    { fileType: "PDF", title: "Lesson A1", session: "OCT 2024", subtitle: "Top 10 grammar lessons", level: "A1", year: "2024", type: "Lesson", category: "Grammar", publishedDate: "2024-11-20"},
    { fileType: "Image", title: "Exam A2", session: "OCT 2024", subtitle: "Mock test for beginners", level: "A2", year: "2024", type: "Exam", category: "Vocabulary", publishedDate: "2024-10-18"},
    { fileType: "Video", title: "Lesson A1", session: "OCT 2024", subtitle: "Key vocabulary tips", level: "A1", year: "2024", type: "Lesson", category: "Listening", publishedDate: "2024-11-26"},
    { fileType: "Word", title: "Exercise A1", session: "OCT 2024", subtitle: "Listening practice 101", level: "A1", year: "2024", type: "Exercise", category: "Grammar", publishedDate: "2024-11-27"},
    { fileType: "Link", title: "Lesson A1", session: "OCT 2024", subtitle: "Speaking activities", level: "A1", year: "2024", type: "Lesson", category: "Speaking", publishedDate: "2024-11-20"},
    { fileType: "PDF", title: "Lesson A1", session: "OCT 2024", subtitle: "Top 10 grammar lessons", level: "A1", year: "2024", type: "Lesson", category: "Grammar", publishedDate: "2024-11-20"},
    { fileType: "Image", title: "Exam A2", session: "OCT 2024", subtitle: "Mock test for beginners", level: "A2", year: "2024", type: "Exam", category: "Vocabulary", publishedDate: "2024-10-18"},
    { fileType: "Video", title: "Lesson A1", session: "OCT 2024", subtitle: "Key vocabulary tips", level: "A1", year: "2024", type: "Lesson", category: "Listening", publishedDate: "2024-11-26"},
    { fileType: "Word", title: "Exercise A1", session: "OCT 2024", subtitle: "Listening practice 101", level: "A1", year: "2024", type: "Exercise", category: "Grammar", publishedDate: "2024-11-27"},
    { fileType: "Link", title: "Lesson A1", session: "OCT 2024", subtitle: "Speaking activities", level: "A1", year: "2024", type: "Lesson", category: "Speaking", publishedDate: "2024-11-20"},
  ];
  return (
    <div className={`bg-white p-4 rounded `}>
    <div className={styles.container}>
      {/* En-tête */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn}></button>
          <h1 className={styles.grandTitre}>File details</h1>
        </div>
        <div className={styles.headerRight}>
          <MButtonAjoutResource/>
          <MSearchBar />
        </div>
      </div>

      {/* Aperçu média */}
      <div className={styles.mediaPreview}>
        <video controls src={videoSrc} poster="/poster.jpg" />
      </div>

      {/* Titre du fichier */}
      <div className={styles.fileTitle}>
        Lesson Grammaire for A1 Lesson Grammaire for A1 Lesson Grammaire for A1
      </div>

      {/* Pied de page : profil et actions */}
      <div className={styles.footer}>
              
          <div className={styles.profile}>
          <Image
            src={photo}
            alt="Photo de profil"
            className={styles.profileImg}
            width={45}
            height={45}
          />

          <div className={styles.profileInfo}>
            <div className={styles.profileName}>
              <span>Nantenaina</span>
              <span>RAKOTONIRINA</span>
            </div>

            <div className={styles.actions}>
              <button>Record</button>
              <button>Favorites</button>
              <button>Download</button>
            </div>
          </div>
        </div>

        
        <section className={styles.resourcesSection}>
          <h3 className={styles.topResources}>Another suggestion</h3>
          <div className={`row mt-2`} style={{ marginLeft: "30px", marginRight: "30px" }}>
            {allResources.length > 0 ? (
              allResources.map((allResource, index) => (
                <div key={index} className={`col-md-4 mb-4`}>
                  <MFolderCardNa
                    fileType={allResource.fileType}
                    title={allResource.title}
                    session={allResource.session}
                    subtitle={allResource.subtitle}
                  />
                </div>
              ))
            ) : (
              <p>No resources match the selected filters.</p>
            )}
          </div>
        </section>


      </div>
    </div>
    </div>
  );
}
