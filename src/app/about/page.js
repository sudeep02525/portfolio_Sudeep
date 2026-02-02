import About from '../../components/About';
import LearningJourney from '../../components/LearningJourney';
import Navbar from '../../components/Navbar';
import CursorEffect from '../../components/CursorEffect';

export default function AboutPage() {
  return (
    <>
      <CursorEffect />
      <Navbar />
      <main>
        <About />
        <LearningJourney />
      </main>
    </>
  );
}