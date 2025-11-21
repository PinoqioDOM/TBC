import About from './components/About';
import Hero from './components/Hero';
import Filters from './components/Filters';

export default function Home() {
  return (
    <div className="relative bg-blue-900 min-h-screen">
      
      <div className="absolute top-0 w-full z-20"> 
          <About />
      </div>
      
      <Hero />
      <Filters />
    </div>
  );
}