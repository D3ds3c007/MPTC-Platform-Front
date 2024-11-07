// pages/file-list.js

import { MListe } from "@/app/components/ui/Liste/MListe";

const files = [
    { fileName: 'Exam A1', session: 'OCT 2024', size: '5.265 KB', fileType: 'pdf' },
    { fileName: 'Exam B2', session: 'JUL 2023', size: '3.512 KB', fileType: 'word' },
    { fileName: 'Exam C1', session: 'SEP 2022', size: '4.789 KB', fileType: 'image' },
    { fileName: 'Exam D1', session: 'DEC 2021', size: '6.100 KB', fileType: 'video' },
    { fileName: 'Link to Resource', session: 'N/A', size: 'N/A', fileType: 'lien' }
];

export default function FileListPage() {
    return (
        <div>
        <h1>Test de MListe</h1>
        {files.map((file, index) => (
          <MListe
            key={index}
            fileName={file.fileName}
            session={file.session}
            size={file.size}
            fileType={file.fileType}
          />
        ))}
      </div>
    );
}


