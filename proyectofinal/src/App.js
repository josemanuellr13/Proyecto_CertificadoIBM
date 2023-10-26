import './App.css';
import Nav from './componentes/nav/Nav'
import Footer from './componentes/footer/Footer'
import Landing from './paginas/landing/Landing'
import Registro from './paginas/registro/Registro'
import Login from './paginas/login/Login'
import Services from './paginas/services/Services'
import Blog from './paginas/blog/Blog'

import { BrowserRouter as Router, Route, Routes , Link, useLocation} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
      <div className="flex flex-col min-h-screen h-auto">
        <Nav></Nav> 
        <main className={`my-auto grow flex flex-col mx-auto px-12 2xl:px-0 w-full `}>

          
              <Routes>
                  <Route path="" element={<Landing/>} />
                  <Route path="register" element={<Registro/>} />
                  <Route path="login" element={<Login/>} />
                  <Route path="services" element={<Services/>} />
                  <Route path="blog" element={<Blog/>} />

              </Routes>
          
        </main>
        <Footer></Footer>
      </div>
      </Router>
    </div>
  );
}

export default App;
