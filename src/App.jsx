import { About, Contact, Feedbacks, Hero, Navbar, Works } from "./components";
import { BrowserRouter } from "react-router-dom";
import NewExperience from "./NewComponents/NewExperience";
import NewTechs from "./NewComponents/NewTechs";
import ConnectWithMe from "./NewComponents/ConnectWithMe";
const App = () => {


  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <NewExperience />
        <NewTechs />
        <Works />
        <Feedbacks />
        <ConnectWithMe />
        <div className='relative z-0'>
          <Contact />
          
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
