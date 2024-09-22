import {BrowserRouter} from 'react-router-dom';
import{About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas}from './components';
const App=()=> {

  return (
  <BrowserRouter>
    <div className= {'${styles.paddingY} relative z-50 bg-primary style'}>
  
            
    <Navbar />
    <Hero />



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
