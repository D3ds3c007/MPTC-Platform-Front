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
    <div className={styles.mainContent}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Welcome back, Professor</h1>
        <p>Exam Folders</p>
        <div className={styles.profile}>
          <span>Princy Robs</span>
          <div className={styles.avatar}></div>
        </div>
      </header>

      {/* Filters Section */}
      <div className={styles.filtersSection}>
        <div className={styles.filtersHeader}>
          <h2>All resources</h2>
          {/* Search Bar aligned to the right */}
          <MSearchBar />
        </div>
        <div className={styles.filters}>
          <MDropdownsFilter selector="Level" data={levels} />
          <MDropdownsFilter selector="Type of resource" data={types} />
          <MDropdownsFilter selector="Category" data={categories} />
          <MDropdownsFilter selector="Years" data={years} />
          <MButton variant="primary">Valider</MButton>
        </div>
      </div>

      {/* Resources Section */}
      <section className={styles.resourcesSection}>
        <h3>Top 5 resources</h3>
        <div className={styles.resourcesGrid}>
          <MFolderCard level="A1" title="Lesson A1" session="OCT 2024" variant="blue" />
          <MFolderCard level="A1" title="Exam A1" session="OCT 2024" variant="lightblue" />
          <MFolderCard level="A1" title="Lesson A1" session="OCT 2024" variant="purple" />
          <MFolderCard level="A1" title="Exercice A1" session="OCT 2024" variant="red" />
          <MFolderCard level="A1" title="Lesson A1" session="OCT 2024" variant="yellow" />
        </div>
      </section>
    </div>
  );
}
