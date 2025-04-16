import "./NavBar.css";

const TiposDePlantas = () => {
    return (
      <div className="plantas-container">
        <div className="galeria">

          <h1 className="planta">Suculentas</h1>
        <section className="card">
          <img className="img-card" src="/Suculentas1.jpg"/>
          <p>Mix de suculentas</p>
          </section>
          <section className="card">
          <img className="img-card" src="/Suculentas2.jpg" />
          <p>Suculentas de interior</p>
          </section>
          <section className="card">
          <img className="img-card" src="/Suculentas3.jpg" />
          <p>Suculentas de exterior</p>
          </section>
          <span className="span">
          <button className="btn-agregar">Agregar al carrito</button>
          </span>
        </div>
  
        <div className="galeria">

          <h2 className="planta"> Florales</h2>
          <section className="card">
          <img className="img-card" src="/Florales1.jpg" />
          <p>Santa Rita 
            $1100
          </p>
          </section>
          <section className="card">
          <img className="img-card" src="/Florales2.jpg" />
          <p>Zinias $800</p>
          </section>
          <section className="card">
          <img className="img-card" src="/Florales3.jpg" />
          <p>Mariposa Azul $950</p>
          </section>
      <span className="span">
          <button className="btn-agregar">Agregar al carrito</button>
      </span>
        </div>
  
        <div className="galeria">

          <h3 className="planta">Interior</h3>
          <section className="card">
          <img className="img-card" src="/Interior1.jpg" />
          <p>Espada de San Jorge $1200</p>
          </section>
          <section className="card">
          <img className="img-card" src="/Interior2.jpg" />
          <p>Monstera $1700</p>
          </section>
          <section className="card">
          <img className="img-card" src="/Interior5.jpg" />
          <p>Tronco de Brasil $1900</p>
          </section>
          <span className="span">
            <button className="btn-agregar">Agregar al carrito</button>
          </span>
        </div>
      </div>
    );
  };
  export default TiposDePlantas