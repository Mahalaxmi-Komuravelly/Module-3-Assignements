import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
function App(){

  return(
    <>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/todos" element={<Todos/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      
    </>

    
  )
}

export default App;