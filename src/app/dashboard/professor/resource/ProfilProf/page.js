
import { MFolderCardNa } from "@/app/components/ui/FolderCardNa/MFolderCardNa";
import { MButton } from "@/app/components/ui/Button/MButton";
import { MSearchBar } from "@/app/components/ui/SearchBar/MSearchBar";
import { MDropdownsFilter } from "@/app/components/ui/DropdownsFilter/MDropdownsFilter";
import { MListe } from "@/app/components/ui/Liste/MListe";
import { MButtonAjout } from "@/app/components/ui/ButtonAjout/MButtonAjout";
import { MButtonProfilProf } from "@/app/components/ui/ButtonProfilProf/MButtonProfilProf";
import styles from './page.module.css';

export default function ExamFoldersPage() {
  // Données pour les filtres
  const years = ["2024", "2023", "2022"];
  const levels = ["A1", "A2", "B1"];
  const types = ["Lesson", "Exam", "Exercise"];
  const categories = ["Grammar", "Vocabulary", "Listening"];

  // Données pour les MFolderCard (ces données pourraient aussi venir d'une API ou d'une base de données)
  const resources = [
    { level: "A1", title: "Lesson A1", session: "OCT 2024", variant: "dark", subtitle: "Top 10 grammar lessons Top 10 grammar lessons Top 10 grammar lessons" },
    { level: "A1", title: "Exam A1", session: "OCT 2024", variant: "purple", subtitle: "Mock test for beginners" },
    { level: "A1", title: "Lesson A1", session: "OCT 2024", variant: "secondary", subtitle: "Key vocabulary tips" },
    { level: "A1", title: "Exercise A1", session: "OCT 2024", variant: "primary", subtitle: "Listening practice 101" },
    { level: "A1", title: "Lesson A1", session: "OCT 2024", variant: "rouge", subtitle: "Speaking activities" },
  ];
  
  const recentFiles = [
    { fileName: 'Exam A1', session: 'OCT 2024', size: '5.265 KB', fileType: 'pdf' },
    { fileName: 'Exam B2', session: 'JUL 2023', size: '3.512 KB', fileType: 'word' },
    { fileName: 'Exam C1', session: 'SEP 2022', size: '4.789 KB', fileType: 'image' },
    { fileName: 'Exam D1', session: 'DEC 2021', size: '6.100 KB', fileType: 'video' },
    { fileName: 'Link to Resource', session: 'N/A', size: 'N/A', fileType: 'lien' }
];

  return (
    <div className={`container mt-4`}>
      {/* Titre principal */}
      <div className="d-flex justify-content-between align-items-center">
        <h1 className={styles.grandTitre}>Exam Folders</h1>
      </div>

      {/* Fond blanc pour le contenu principal */}
      <div className={`bg-white p-4 rounded `}>

        {/* Section de la barre de recherche */}
        <section className={styles.searchSection}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2 className={styles.allResources}>All resources</h2>
            <MSearchBar placeholder="Search" />
          </div>
        </section>

        {/* Section des filtres */}
        <section className={styles.filtersSection}>
          <div className="d-flex flex-wrap gap-4 mb-4">
            <MDropdownsFilter selector="Level" data={levels} />
            <MDropdownsFilter selector="Type of resource" data={types} />
            <MDropdownsFilter selector="Category" data={categories} />
            <MDropdownsFilter selector="Years" data={years} />
            <MButton variant="primary" className={styles.validateButton}>Valider</MButton>
          </div>
        </section>

        {/* Section des ressources principales */}
        <section className={styles.resourcesSection}>
          <h3 className={styles.topResources}>My recently added resources</h3>
          <div className={`row mt-2`} style={{ marginLeft: '30px', marginRight: '30px' }}>
            {resources.map((resource, index) => (
              <div key={index} className={`col-md-4 mb-4`}>
                <MFolderCardNa 
                  level={resource.level} 
                  title={resource.title} 
                  session={resource.session} 
                  variant={resource.variant} 
                  subtitle={resource.subtitle} // Pass the subtitle here
                />
              </div>
            ))}
            <section className={styles.boutonAjout}>
                <MButtonAjout />
            </section>
          </div>
        </section>
        
        </div>

        {/* Section des fichiers récents */}
        <section className={styles.fileListSection}>
          <h3 className={styles.topResources}>List of my resources</h3>
          <div className={`row mt-2`} style={{marginRight: '30px' }}>
            {recentFiles.map((file, index) => (
              <div key={index} className={`col-md-12 mb-1`}>
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

        <section className={styles.BoutonProfil}>
          <MButtonProfilProf variant="secondary">Add resource</MButtonProfilProf>
          <MButtonProfilProf variant="primary">See entire list</MButtonProfilProf>
    
        </section>
      
    </div>
  );
}