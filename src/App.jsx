import {BrowserRouter} from 'react-router-dom';
import{About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas}from './components';
const App=()=> {

  return (
  <BrowserRouter>
    <div className= {'${styles.paddingY} relative z-50 bg-primary style'}>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen sm:min-h-[50vh]">
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

export default App
