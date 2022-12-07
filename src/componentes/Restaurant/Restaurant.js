

function Restaurant (props){
    return (
        
              <div id="masivo" className="card" style={{width: "18rem", animationDuration: "1.2s", display: "inline-block", marginLeft: "20px", }}>
                    <img src={props.url} className="card-img-top" alt=""></img>
                    <div className="card-body">
                    <h5 id="titulo" className="card-title">{props.nombre}</h5>
                    <p id="desb" className="card-text">{props.descrip}</p>
                    <a className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
       

    )
}  

export default Restaurant;