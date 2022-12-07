//import "../node_modules/bootstrap/scss/bootstrap";
//import {texto} from './Variables'
import './Estilos.css';
//import Listar from "./Listar";
import {Link, Navigate, NavLink} from 'react-router-dom'



function Testimonio() {
    return (
      
        <header>
        
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
             
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    
                    <NavLink id="estilo" className="nav-link active" aria-current="page" exact to="/welcome" activeClassName='point'>Directory</NavLink>
                  </li>
                  <li className="nav-item" >
                    <NavLink id="estilo" className="nav-link active" aria-current="page" exact to="listar" activeClassName='point'>Restaurants</NavLink>
                    
                  </li>
                  <li className="nav-item" >
                    <NavLink id="estilo" className="nav-link active" aria-current="page" exact to="buscar" activeClassName='point'>Search</NavLink>
                  </li>
                  <li className="nav-item" >
                    <NavLink id="estilo" className="nav-link active" aria-current="page" exact to="nuevo" activeClassName="point">New</NavLink>
                  </li>
              
                </ul>
                </div>
                </div>
    </nav>


</header>



    );
  }

  export default Testimonio;