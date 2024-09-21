import {BrowserRouter} from 'react-router-dom';
import{About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas}from './components';
const App=()=> {

  return (
  <BrowserRouter>
    <div className= {'${styles.paddingY} relative z-50 bg-primary style'}>
    <div className="bg-gray-800 bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen flex flex-col
            sm:bg-contain sm:min-h-[50vh]
            md:bg-cover md:min-h-screen">
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
  )
}

export default App;
