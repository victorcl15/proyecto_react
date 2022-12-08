//import "../node_modules/bootstrap/scss/bootstrap";
//import {texto} from './Variables'
import './Estilos.css';
//import Listar from "./Listar";
import {NavLink} from 'react-router-dom'



function Testimonio() {
    return (
      
        <header>
        
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
             
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    
                    <NavLink id="estilo" className="nav-link active" aria-current="page" to="/welcome">Directory</NavLink>
                  </li>
                  <li className="nav-item" >
                    <NavLink id="estilo" className="nav-link active" aria-current="page" to="listar">Restaurants</NavLink>
                    
                  </li>
                  <li className="nav-item" >
                    <NavLink id="estilo" className="nav-link active" aria-current="page" to="buscar">Search</NavLink>
                  </li>
                  <li className="nav-item" >
                    <NavLink id="estilo" className="nav-link active" aria-current="page" to="nuevo">New</NavLink>
                  </li>
              
                </ul>
                </div>
                </div>
    </nav>


</header>



    );
  }

  export default Testimonio;