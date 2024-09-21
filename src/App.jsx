import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className={'${styles.paddingY} relative z-50 bg-primary style'}>
        {/* Updated div with custom background */}
        <div className="bg-gradient-to-b from-indigo-600 to-purple-700 min-h-screen flex flex-col
              sm:bg-gradient-to-r sm:from-blue-500 sm:to-purple-700 sm:min-h-[50vh]
              md:bg-gradient-to-b md:from-indigo-600 md:to-purple-700 md:min-h-screen">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
