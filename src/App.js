import {BrowserRouter as Router , Routes , Route} from "react-router-dom"


//Paginas
import {Home} from './pages/home.js'
import {Reserva} from './pages/reserva.js'
import {Contactos} from './pages/contactos.js'
import {Reservaciones1} from './pages/reservaciones1.js'
import {Reservaciones2} from './pages/reservaciones2.js'
import {Reservaciones3} from './pages/reservaciones3.js'
import {Reservaciones4} from './pages/reservaciones4.js'
import {Reservaciones5} from './pages/reservaciones5.js'
import {Boleta} from './pages/boleta.js'
import './App.css';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contactos" element={<Contactos/>}/>
        <Route path="/reserva" element={<Reserva/>}/>
        <Route path="/reservaciones1" element={<Reservaciones1/>} />
        <Route path="/reservaciones2" element={<Reservaciones2/>} />
        <Route path="/reservaciones3" element={<Reservaciones3/>} />
        <Route path="/reservaciones4" element={<Reservaciones4/>} />
        <Route path="/reservaciones5" element={<Reservaciones5/>} />
        <Route path="/boleta" element={<Boleta/>} />

      </Routes>
    </Router>
  );
}

export default App;
