// pages/file-list.js

import { MListe } from "@/app/components/ui/Liste/MListe";



export default function FileListPage() {
    return (
        <div className="container mt-4">
            <h1>File List</h1>
            <MListe></MListe>
            {/* Tu peux ajouter plusieurs composants MFileListItem ici si nécessaire */}
        </div>
    );
}
