import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { BrowserRouter } from "react-router-dom";
import NewExperience from "./NewComponents/NewExperience";
import NewTechs from "./NewComponents/NewTechs";
const App = () =>{
 

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <NewExperience/>
      {/* <Experience /> */}
      {/* <Tech /> */}
      <NewTechs/>
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
