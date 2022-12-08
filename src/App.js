import logo from './logo.svg';
import {Route, Routes} from "react-router-dom";

import './App.css';
import Testimonio from "./componentes/Testimonio";
import Listar from "./componentes/Listar";
import Buscar from "./componentes/Buscar";
import Nuevo from "./componentes/Nuevo";
import Welcome from './componentes/Welcome';
import Navegar from './componentes/Navegar';



function App() {
  return (
    <div>

      
      <Testimonio/>
    <Routes>
    <Route path="/" element={<Welcome/>}/>
    <Route path="/welcome" element={<Welcome/>}/>
    <Route path="/listar" element={<Listar/>}/>
    <Route path="/buscar" element={<Buscar/>}/>
    <Route path="/nuevo" element={<Nuevo/>}/>

    

    

    </Routes>
   
    </div>
  );
}



export default App;


