import React from 'react';
import { MButtonProfilProf } from "@/app/components/ui/ButtonProfilProf/MButtonProfilProf";

const App = () => {
  return (
    <div className="button-container">
      <MButtonProfilProf variant="secondary">Add resource</MButtonProfilProf>
      <MButtonProfilProf variant="primary">See entire list</MButtonProfilProf>
      
    </div>
  );
};

export default App;
