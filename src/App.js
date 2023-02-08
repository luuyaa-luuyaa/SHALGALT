import Navbar from "./Navbar";
import About from "./pages/about";
import Pricing from "./pages/pricing";
import Home from "./pages/home";
import { Route, Routes } from "react-router-dom"


function App() {
  
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App;
