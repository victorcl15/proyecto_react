import './Estilos.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import {restaurantes} from "./Variables";
import Restaurant from './Restaurant/Restaurant';
//import {restaurantes} from "./Variables";


//import Vic from "./Testimonio";



function Listar(){

    const [restaurants, setRestaurants] = useState([
        {
            id: "1",
            nombre: "Pacifico mar",
            descrip: `Av. 85 Nro. 45 - 85 
             Barranquilla 
             Deliciosa comida de mar`,
            url: require(`./imagenes/restaurant1.jpg`)
        },
        {
            id: "2",
            nombre: "Italiano 65",
            descrip: "Av 45 Nro 1 - 85 Medellín \n Deliciosa comida italiana",
            url: require(`./imagenes/restaurant2.jpg`)
        },
        {
            id: "3",
            nombre: "Fritos y Más",
            descrip: "Calle 45 Medellín \n Comida rápida",
            url: require(`./imagenes/restaurant3.jpg`)
        },
        {
            id: "4",
            nombre: "Pollo Frito",
            descrip: "Cr 32 # 56 - 89 \n Lo mejor del pollo frito",
            url: require(`./imagenes/restaurant4.jpg`)
        }
    ])

    return (
    <div style={{display: "inline-flex", marginTop: "20px", align: "align"}}>
        
        

        {restaurants.map(restau => {
            
            return (
                
              <Restaurant key={restau.id} nombre={restau.nombre} url={restau.url} descrip={restau.descrip} />

               
            )
        })}

    </div>
   
    );
}

export default Listar;