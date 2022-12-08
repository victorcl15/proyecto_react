import './Estilos.css';

function New(){

    return (
    
        <div style={{marginLeft: "30px", marginRight: "800px", marginTop: "30px"}}>
        <form method="get" action="/nuevo">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digita el nombre del restaurante"/>
          </div>
          <div className="mb-3">
            <label  className="form-label">Descripción</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label  className="form-label">Dirección</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Digita el lugar de ubicación"/>
          </div>
    
          <label  className="form-label">Imagen URL</label>
          <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">https://www.google.com.co/imghp</span>
          <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
    </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
       
      </div>
    );
}

export default New;