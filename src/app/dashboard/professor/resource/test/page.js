import Image from 'next/image';
import profil from './profil.jpg';
import couverture from './couverture.JPG';
import MProfil from "@/app/components/ui/Profil/MProfil";

const fakeUserProfile = {
  name: "Sarah Dupont",
  profilePicture: profil,
  coverImage: couverture,
};

export default function TestPage() {
  return (
    <main>
      <MProfil userProfile={fakeUserProfile} />
    </main>
  );
}
