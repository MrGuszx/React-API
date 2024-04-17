import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Fotos from "./pages/Fotos";
import Posts from "./pages/Posts";
import Usuarios from "./pages/Usuarios";
import Footer from "./Components/Footer";

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path = "/" element = {<Posts/>}/>
          <Route path = "/usuarios" element = {<Usuarios/>}/>
          <Route path = "/fotos" element = {<Fotos/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App


