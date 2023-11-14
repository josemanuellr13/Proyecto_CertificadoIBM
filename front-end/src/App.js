import './App.css';
import Nav from './componentes/nav/Nav'
import Footer from './componentes/footer/Footer'
import Landing from './paginas/landing/Landing'
import Registro from './paginas/registro/Registro'
import Login from './paginas/login/Login'
import Profile from './paginas/profile/Profile'
import Block from './componentes/block/Block'
import Services from './paginas/services/Services'
import Blog from './paginas/blog/Blog'
import Reports from './paginas/reports/Reports';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Appointments from './paginas/appointments/Appointments';
import InstantConsultation from './paginas/instantconsultation/InstantConsultation';
import { AuthProvider } from "./context/AuthContext";
import Loading from './componentes/loading/Loading'; 
import { LoadingProvider} from "./context/LoadingContext";
import Checkups from './paginas/checkups/Checkups';
function App() {

  return (
    <AuthProvider>
    <LoadingProvider>
    
      <Loading/>
    <div className="App">
      <Block></Block>
      <Router>
      <div className="flex flex-col min-h-screen h-auto">
        <Nav></Nav> 
        <main className={`my-auto grow flex flex-col mx-auto xpx-12 2xl:px-0 w-full `}>
          
              <Routes>
                  <Route path="" element={<Landing/>} />
                  <Route path="profile" element={<Profile/>} />
                  <Route path="register" element={<Registro/>} />
                  <Route path="login" element={<Login/>} />
                  <Route path="services" element={<Services/>} />
                  <Route path="blog" element={<Blog/>} />
                  <Route path="appointments" element={<Appointments/>} />
                  <Route path="reports" element={<Reports/>} />
                  <Route path="selfcheckup" element={<Checkups/>} />
                  <Route path="instantconsultation" element={<InstantConsultation/>} />
              </Routes>
          
        </main>
        <Footer></Footer>
      </div>
      </Router>
    </div>
    
    </LoadingProvider>
    </AuthProvider>
  );
}

export default App;
