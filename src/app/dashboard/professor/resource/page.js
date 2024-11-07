import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MButton } from "@/app/components/ui/Button/MButton";
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MDropdownsFilter } from "@/app/components/ui/DropdownsFilter/MDropdownsFilter";
import { MListe } from "@/app/components/ui/Liste/MListe";
import styles from './page.module.css';

export default function ExamFoldersPage() {
  // Données pour les filtres
  const years = ["2024", "2023", "2022"];
  const levels = ["A1", "A2", "B1"];
  const types = ["Lesson", "Exam", "Exercise"];
  const categories = ["Grammar", "Vocabulary", "Listening"];

  // Données pour les MFolderCard (ces données pourraient aussi venir d'une API ou d'une base de données)
  const resources = [
    { level: "A1", title: "Lesson A1", session: "OCT 2024", variant: "dark" },
    { level: "A1", title: "Exam A1", session: "OCT 2024", variant: "purple" },
    { level: "A1", title: "Lesson A1", session: "OCT 2024", variant: "secondary" },
    { level: "A1", title: "Exercise A1", session: "OCT 2024", variant: "primary" },
    { level: "A1", title: "Lesson A1", session: "OCT 2024", variant: "yellow" },
  ];

  // Données pour les fichiers récents dans MListe
  const recentFiles = [
    { fileName: "Lesson A1", session: "OCT 2024", size: "5.265 kB", fileType: "lesson" },
    { fileName: "Exercise A1", session: "OCT 2024", size: "5.265 kB", fileType: "exercise" },
    { fileName: "Exam A1", session: "OCT 2024", size: "5.265 kB", fileType: "exam" },
    { fileName: "Lesson A1", session: "OCT 2024", size: "5.265 kB", fileType: "lesson" },
  ];

  return (
    <div className={`container mt-4`}>
      {/* Titre principal */}
      <div className="d-flex justify-content-between align-items-center">
        <h1>Exam Folders</h1>
        <span>Welcome back, Professor</span>
      </div>

      {/* Fond blanc pour le contenu principal */}
      <div className={`bg-white p-4 rounded shadow`}>

        {/* Section de la barre de recherche */}
        <section className={styles.searchSection}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className={styles.allResources}>All resource</h2>
            <MSearchBar placeholder="Search" />
          </div>
        </section>

        {/* Section des filtres */}
        <section className={styles.filtersSection}>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <MDropdownsFilter selector="Level" data={levels} />
            <MDropdownsFilter selector="Type of resource" data={types} />
            <MDropdownsFilter selector="Category" data={categories} />
            <MDropdownsFilter selector="Years" data={years} />
            <MButton variant="primary" className={styles.validateButton}>Valider</MButton>
          </div>
        </section>

        {/* Section des ressources principales */}
        <section className={styles.resourcesSection}>
          <h3 className={styles.topResources}>Top 5 of resource</h3>
          <div className={`row mt-2`} style={{ marginLeft: '30px', marginRight: '30px' }}>
            {resources.map((resource, index) => (
              <div key={index} className={`col-md-4 mb-4`}>
                <MFolderCard 
                  level={resource.level} 
                  title={resource.title} 
                  session={resource.session} 
                  variant={resource.variant} 
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section des fichiers récents */}
        <section className={styles.fileListSection}>
          <h3 className={styles.topResources}>Add recently</h3>
          <div className={`row mt-2`} style={{ marginLeft: '30px', marginRight: '30px' }}>
            {recentFiles.map((file, index) => (
              <div key={index} className={`col-md-12 mb-4`}>
                <MListe
                  fileName={file.fileName}
                  session={file.session}
                  size={file.size}
                  fileType={file.fileType}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
