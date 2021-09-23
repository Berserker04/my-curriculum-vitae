import "./App.css";
import photo from "./assets/img/photo.jpg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <figure>
            <img src={photo} alt="" />
          </figure>
        </div>

        <div className="header__title">
          <h1>Nombre completo</h1>
          <h3>Desarrollador de Software</h3>
          <div className="header__items">
            <div>
              <p>
                <i className="fas fa-map-marker-alt icons"></i> Medellín
              </p>
              <p>
                <i className="fas fa-phone-alt icons"></i> 3116291645
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-envelope icons"></i> correoprueba@gmail.com
              </p>
              <p>
                <i className="fab fa-facebook icons"></i> fabook.com/prueba
              </p>
            </div>
          </div>
        </div>
        <div className="header__about-me">
          <div className="buttom_border-text">
            <p>Sobre Mí</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            accusantium, ducimus corrupti minima quia, iure mollitia accusamus
            ullam aut excepturi distinctio optio dicta quos dignissimos. Cumque
            ipsam blanditiis quo aspernatur.
          </p>
        </div>
      </header>

      <main>
        {/* experiencia laboral */}
        <section>
          <div className="buttom_border-text">
            <p>Experiencia laboral</p>
          </div>

          <div className="main_card">
            <div>
              <h2>Empresa en la que trabajo 1</h2>
              <h3>Cargo</h3>
              <span>Fecha desde - asta</span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                sunt odio illum, doloremque delectus minima laudantium, iusto
                placeat quidem dolorem assumenda recusandae obcaecati! Aliquam
                veniam recusandae a, ea facilis praesentium?
              </p>
              <br />
              <p>
                <strong>Jefe inmediato: </strong> Nombre del jefe
              </p>
              <p>
                <strong>Contácto: </strong> 323435437
              </p>
            </div>

            <div>
              <h2>Empresa en la que trabajo 2</h2>
              <h3>Cargo</h3>
              <span>Fecha desde - asta</span>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                sunt odio illum, doloremque delectus minima laudantium, iusto
                placeat quidem dolorem assumenda recusandae obcaecati! Aliquam
                veniam recusandae a, ea facilis praesentium?
              </p>
              <br />
              <p>
                <strong>Jefe inmediato: </strong> Nombre del jefe
              </p>
              <p>
                <strong>Contácto: </strong> 323435437
              </p>
            </div>
          </div>
        </section>

        {/* education and skills */}
        <section className="section_education_and_skills">
          {/* education */}
          <div className="main_card-education">
            <div className="buttom_border-text">
              <p>Educación</p>
            </div>
            <div className="main_card">
              <div>
                <div className="main_card-education">
                  <h3>año</h3>
                  <h3>Titulo obtenido</h3>
                  <p>Centro educativo</p>
                </div>
                <div className="main_card-education">
                  <h3>año</h3>
                  <h3>Titulo obtenido</h3>
                  <p>Centro educativo</p>
                </div>
              </div>
              <div>
                <div className="main_card-education">
                  <h3>año</h3>
                  <h3>Titulo obtenido</h3>
                  <p>Centro educativo</p>
                </div>
                <div className="main_card-education">
                  <h3>año</h3>
                  <h3>Titulo obtenido</h3>
                  <p>Centro educativo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="main_card-skill">
            <div className="buttom_border-text">
              <p>Habilidades</p>
            </div>
            <div className="main_card">
              <ul>
                <li>
                  <div className="main_skill-point"></div>
                  <div>
                    <p>Habilidad 1</p>
                  </div>
                  <div className="main_skill-bar">
                    <div className="skill sk-1"></div>
                  </div>
                </li>
                <li>
                  <div className="main_skill-point"></div>
                  <div>
                    <p>Habilidad 2</p>
                  </div>
                  <div className="main_skill-bar">
                    <div className="skill sk-2"></div>
                  </div>
                </li>
                <li>
                  <div className="main_skill-point"></div>
                  <div>
                    <p>Habilidad 3</p>
                  </div>
                  <div className="main_skill-bar">
                    <div className="skill sk-3"></div>
                  </div>
                </li>
                <li>
                  <div className="main_skill-point"></div>
                  <div>
                    <p>Habilidad 4</p>
                  </div>
                  <div className="main_skill-bar">
                    <div className="skill sk-4"></div>
                  </div>
                </li>
                <li>
                  <div className="main_skill-point"></div>
                  <div>
                    <p>Habilidad 5</p>
                  </div>
                  <div className="main_skill-bar">
                    <div className="skill sk-5"></div>
                  </div>
                </li>
                <li>
                  <div className="main_skill-point"></div>
                  <div>
                    <p>Habilidad 6</p>
                  </div>
                  <div className="main_skill-bar">
                    <div className="skill sk-6"></div>
                  </div>
                </li>
                <li>
                  <div className="main_skill-point"></div>
                  <div>
                    <p>Habilidad 7</p>
                  </div>
                  <div className="main_skill-bar">
                    <div className="skill sk-7"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
