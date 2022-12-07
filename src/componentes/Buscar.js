import {restaurantes} from "./Variables"
import './Estilos.css';
import {useState} from "react";

function Buscar(){

    //const boton = document.getElementById("boton")
    const [valores, setValores] = useState({})
    const {nombre =""} = valores
    const [resultado, setResultado] = useState([]);
    
    //const boton = document.getElementById("boton")

    //boton.addEventListener("click", buscador);
    //let nombre = document.getElementById('search').value;
    
    const handleOnChange = (e) => {

      setValores({ ...valores, [e.target.name]: e.target.value})
    }


    const buscador = (e) => {
      e.preventDefault();
      const filtro = restaurantes.
      filter(filtrar => filtrar.nombre.toUpperCase().includes(nombre.toUpperCase()));
      setResultado(filtro);
    }


    return (
    
        <div style= {{margin: "30px"}}>
  <form method="get" action="#">
    <div  className="mb-3">
      <label className="form-label" style={{fontSize: "50px", textAlign: "center"}}>Buscador</label>
      <input id="search" type="text" name="nombre" value={nombre} className="form-control"
      onChange={(e)=> {handleOnChange(e)}}
      placeholder="Escribe el restaurante"/>
    </div>
   
<button  id="boton" onClick={buscador} type="submit" className="btn btn-primary">Buscar</button>
  </form>
 
  <div id="conjunto" style={{marginTop: "30px"}}>
    
  </div>

{
    resultado.map(iterar=> {

      return (
        <div key={iterar.id} id="masivo" className="card" style={{width: "20rem", animationDuration: "1.2s", display: "inline-block", marginLeft: "20px", }}>
                    <img src={iterar.url} className="card-img-top" alt=""></img>
                    <div className="card-body">
                    <h5 id="titulo" className="card-title">{iterar.nombre}</h5>
                    <p id="desb" className="card-text">{iterar.descrip}</p>
                    <a className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

      )
    })
}

  </div>


   
    );
}

export default Buscar;