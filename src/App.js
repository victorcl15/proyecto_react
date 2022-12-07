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
    <Route exact path="/" element={<Welcome/>}/>
    <Route exact path="/welcome" element={<Welcome/>}/>
    <Route exact path="/listar" element={<Listar/>}/>
    <Route exact path="/buscar" element={<Buscar/>}/>
    <Route exact path="/nuevo" element={<Nuevo/>}/>

    

    

    </Routes>
   
    </div>
  );
}



export default App;


