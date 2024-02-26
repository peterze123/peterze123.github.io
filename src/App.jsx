import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Projects } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-secondary'>
        <div className=' bg-cover bg-no-repeat bg-center '>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
