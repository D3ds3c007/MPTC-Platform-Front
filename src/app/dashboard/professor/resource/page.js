import { MFolderCard } from "@/app/components/ui/FolderCard/MFolderCard";
import { MButton } from "@/app/components/ui/Button/MButton";
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MDropdownsFilter } from "@/app/components/ui/DropdownsFilter/MDropdownsFilter";

import styles from './page.module.css';

export default function ExamFoldersPage() {
  // Données pour les filtres
  const years = ["2024", "2023", "2022"];
  const levels = ["A1", "A2", "B1"];
  const types = ["Lesson", "Exam", "Exercise"];
  const categories = ["Grammar", "Vocabulary", "Listening"];

  return (
    <div className={`container mt-4`}>
      {/* Fond blanc pour le contenu principal */}
      <div className={`bg-white p-4 rounded shadow`}>
        
        {/* Section de la barre de recherche */}
        <section className={styles.searchSection}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className={styles.allResources}>All resources</h2>
            <MSearchBar />
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

        {/* Section des ressources */}
        <section className={styles.resourcesSection}>
          <h3 className={styles.topResources}>Top 5 resources</h3>
          <div className={`row mt-2`} style={{ marginLeft: '30px', marginRight: '30px' }}>
            <div className={`col-md-4 mb-4`}>
              <MFolderCard level="A1" title="Lesson A1" session="OCT 2024" variant="dark" />
            </div>
            <div className={`col-md-4 mb-4`}>
              <MFolderCard level="A1" title="Exam A1" session="OCT 2024" variant="purple" />
            </div>
            <div className={`col-md-4 mb-4`}>
              <MFolderCard level="A1" title="Lesson A1" session="OCT 2024" variant="secondary" />
            </div>
            <div className={`col-md-4 mb-4`}>
              <MFolderCard level="A1" title="Exercice A1" session="OCT 2024" variant="primary" />
            </div>
            <div className={`col-md-4 mb-4`}>
              <MFolderCard level="A1" title="Lesson A1" session="OCT 2024" variant="purple" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
