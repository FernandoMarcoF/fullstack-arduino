
export const PanelCuenta = () => {
  return (
      <div id="content-page" className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Objetivo General de Proyecto - CRV - </h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p><b>Complejo Residencial a Vecinos:</b> Innovación y Comunidad
                    En nuestro proyecto de Sistemas Embebidos, hemos creado un complejo residencial diseñado específicamente para fomentar la convivencia, la seguridad y la comodidad de sus habitantes. Permíteme presentarte los aspectos clave de este emocionante proyecto:</p>
                  <div className="bd-example">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="/src/assets/images/crv-control.jpg" className="d-block w-100" alt="#" />
                          <div className="carousel-caption d-none d-md-block">
                            <h4 className="text-white">Viviendas Inteligentes</h4>
                            <p>Cada vivienda está equipada con sistemas embebidos avanzados.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img src="/src/assets/images/arduino.png" className="d-block w-100" alt="#" />
                          <div className="carousel-caption d-none d-md-block">
                            <h4 className="text-white">Bienvenida Personalizada</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img src="/src/assets/images/react-nodejs.png" className="d-block w-100" alt="#" />
                          <div className="carousel-caption d-none d-md-block">
                            <h4 className="text-white"> Seguridad Integral</h4>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </div>
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                  <p>
                  </p><h5>1. Viviendas Inteligentes</h5>
                  Cada vivienda está equipada con sistemas embebidos avanzados. Desde control de acceso hasta automatización del hogar, nuestras viviendas inteligentes hacen que la vida sea más sencilla y eficiente.
                  Sensores de temperatura, iluminación y seguridad garantizan una experiencia de vida conectada.
                  2. Acceso Controlado
                  Utilizamos tecnología RFID para gestionar el acceso al complejo. Los vecinos y usuarios autorizados pueden ingresar de manera segura y sin complicaciones.
                  La detección de tarjetas RFID y la verificación de identidad son parte integral de nuestro sistema.
                  <h5>3. Comunidad Interactiva</h5>
                  Nuestro complejo no es solo un lugar para vivir; es una comunidad activa. Los vecinos pueden comunicarse a través de una aplicación móvil dedicada.
                  Desde anuncios comunitarios hasta eventos sociales, mantenemos a todos informados y conectados.
                  <h5>4. Seguridad Integral</h5>
                  Cámaras de vigilancia, alarmas y sistemas de emergencia garantizan la seguridad de los residentes.
                  El acceso restringido y la monitorización constante son esenciales para la tranquilidad de todos.
                  <h5>5. Bienvenida Personalizada</h5>
                  Cuando un vecino o usuario autorizado ingresa al complejo, nuestro sistema embebido reconoce su tarjeta RFID.
                  Una pantalla LCD muestra un mensaje de bienvenida personalizado, y las luces y puertas se activan automáticamente.
                  En resumen, nuestro Complejo Residencial a Vecinos es una combinación perfecta de tecnología, comunidad y confort. ¡Bienvenidos a un nuevo estándar de vida residencial! 🏡🌟<p />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Equipo de desarrollo</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <p>una descripción de cada uno de los miembros de nuestro equipo en el proyecto Complejo Residencial a Vecinos:</p>
                  <div className="media mb-3">
                    <img src="/src/assets/images/page-img/16.jpg" className="mr-3" alt="#" />
                    <div className="media-body">
                      <h5 className="mt-0">Miguel</h5>
                      <h5 className="mt-0">Manager de Proyecto</h5>
                      El líder del proyecto es responsable de la gestión general.
                    </div>
                  </div>
                  <div className="media mb-3">
                    <img src="/src/assets/images/page-img/15.jpg" className="mr-3" alt="#" />
                    <div className="media-body">
                      <h5 className="mt-0">Valadar</h5>
                      <h6 className="mt-0">Técnico Arduino</h6>
                      Construir el circuito necesario para la detección de tarjetas RFID.
                    </div>
                  </div>
                  <div className="media mb-3">
                    <img src="/src/assets/images/page-img/16.jpg" className="mr-3" alt="#" />
                    <div className="media-body">
                      <h5 className="mt-0">Mounir Karim</h5>
                      <h6 className="mt-0">Responsable de Firebase</h6>
                      Este rol se encarga de la gestión de la base de datos en Firebase.
                    </div>
                  </div>
                  <div className="media mb-3">
                    <img src="/src/assets/images/page-img/16.jpg" className="mr-3" alt="#" />
                    <div className="media-body">
                      <h5 className="mt-0">Fernando</h5>
                      <h6 className="mt-0">Programador Node.js</h6>
                      Este miembro se especializa en Node.js y Expres.js, un entorno de ejecución de JavaScript/TypeScript en el servidor.
                    </div>
                  </div>
                  <div className="media mb-3">
                    <img src="/src/assets/images/page-img/16.jpg" className="mr-3" alt="#" />
                    <div className="media-body">
                      <h5 className="mt-0">Ridal toufiq</h5>
                      <h6 className="mt-0">Programador React</h6>
                      El programador React se encarga de la parte de front-end de nuestra aplicación.
                    </div>
                  </div>
                  <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                      <div className="iq-header-title">
                        <h4 className="card-title">Nuestro Agencias.</h4>
                      </div>
                    </div>
                    <div className="iq-card-body">
                      <p>CRV, una agencia especializada en control de acceso y seguridad en  España.</p>
                      <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Madrid
                          <span className="badge badge-primary badge-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Pamplona
                          <span className="badge badge-success badge-pill">3</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Barcelona
                          <span className="badge badge-danger badge-pill">11</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Granada
                          <span className="badge badge-primary badge-pill">4</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Bilbao
                          <span className="badge badge-success badge-pill">8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          Malaga
                          <span className="badge badge-danger badge-pill">6</span>
                        </li><li className="list-group-item d-flex justify-content-between align-items-center">
                          Sevilla
                          <span className="badge badge-primary badge-pill">5</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Herramientas</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <p>En este proyecto, utilizamos varias tecnologías para lograr nuestros objetivos.</p>
              <img src="/src/assets/images/firbase-logo.png" height="150px" width="150px" className="rounded ml-3" alt="Responsive image" />
              <img src="/src/assets/images/react.png" height="150px" width="150px" className="rounded ml-3" alt="Responsive image" />
              <img src="/src/assets/images/arduino-logo.png" height="150px" width="150px" className="rounded ml-3" alt="Responsive image" />
              <img src="/src/assets/images/nodejs.png" height="150px" width="150px" className="rounded ml-3" alt="Responsive image" />
              <img src="/src/assets/images/boostrap.png" height="150px" width="150px" className="rounded ml-3" alt="Responsive image" />
              <img src="/src/assets/images/typscript.png" height="150px" width="150px" className="rounded ml-3" alt="Responsive image" />
              <img src="/src/assets/images/expresjs.png" height="150px" width="150px" className="rounded ml-3" alt="Responsive image" />
            </div>
          </div>
        </div>
      </div>
  )
}
