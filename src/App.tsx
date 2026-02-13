import { LanguageProvider } from './context/LanguageContext';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Video from './sections/Video';
import Advantages from './sections/Advantages';
import Solutions from './sections/Solutions';
import Clients from './sections/Clients';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Products />
          <Video />
          <Advantages />
          <Solutions />
          <Clients />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
