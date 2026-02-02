import Contact from '../../components/Contact';
import Navbar from '../../components/Navbar';
import CursorEffect from '../../components/CursorEffect';

export default function ContactPage() {
  return (
    <>
      <CursorEffect />
      <Navbar />
      <main>
        <Contact />
      </main>
    </>
  );
}