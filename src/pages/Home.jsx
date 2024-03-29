import React, { useState } from "react";
import "./styles.scss";
import "./home.css";

const Home = () => {
  const [selectedSection, setSelectedSection] = useState("about");

  const handleButtonClick = (section) => {
    setSelectedSection(section);
    // Puedes agregar aquí alguna lógica adicional si es necesario
  };

  return (
    <>
      <div className="buttons-container">
        <button
          className="btn btn-custom"
          onClick={() => handleButtonClick("about")}
          style={{
            color: "blue",
            width: "150px",
            height: "50px",
            margin: "2px",
            backgroundColor: "black",
            marginTop: "50px",
          }}
        >
          Acerca de
        </button>
        <button
          className="btn btn-custom"
          onClick={() => handleButtonClick("experience")}
          style={{
            color: "red",
            width: "150px",
            height: "50px",
            margin: "2px",
            backgroundColor: "black",
            marginTop: "50px",
          }}
        >
          Experiencia
        </button>
        <button
          className="btn btn-custom"
          onClick={() => handleButtonClick("education")}
          style={{
            color: "blue",
            width: "150px",
            height: "50px",
            margin: "2px",
            backgroundColor: "black",
            marginTop: "50px",
          }}
        >
          Educación
        </button>
        <button
          className="btn btn-custom"
          onClick={() => handleButtonClick("skills")}
          style={{
            color: "red",
            width: "150px",
            height: "50px",
            margin: "2px",
            backgroundColor: "black",
            marginTop: "50px",
          }}
        >
          Habilidades
        </button>
        <button
          className="btn btn-custom"
          onClick={() => handleButtonClick("interests")}
          style={{
            color: "blue",
            width: "150px",
            height: "50px",
            margin: "2px",
            backgroundColor: "black",
            marginTop: "50px",
          }}
        >
          Intereses
        </button>
      </div>

      {selectedSection === "about" && (
        <div className="about-section">
          {/* Contenido de la sección Acerca de */}
          <h2 style={{ color: "white", marginTop: "80px" }}>Acerca de Mí</h2>
          <p>
            ✓ Santiago Rivera Prada <br></br>
            Master In Coding <br></br>
            Programador Web Full Stack <br></br>
            Desarrollador Web<br></br>
            Estudie En Dev.F
          </p>

          <p>
            ✓ Me presento , mi nombre es <br></br>
            Santiago Rivera Prada y soy un Master En Coding junior ,<br></br>
            me gradue de la academia Dev.f de la ciudadad <br></br>
            de mexico el 26 de diciembre del 2023. <br></br>
            No cuento con experiencia laboral pero , <br></br>
            Cuento con mas de 200 horas de practica <br></br>
            donde desarrolle desde 0 algunos proyectos. <br></br>
            el resto de informacion y detalles de cada proyecto <br></br>y como
            fue el desarrollo de cada proyecto <br></br>
            esta en la sección de experiencia ... Continuando{" "}
          </p>
          <h2 style={{ color: "white" }}>
            Algunas caracteristicas destacables{" "}
          </h2>
          <p>✓ Soy muy autodidacta </p>
          <p>
            ✓ Me gusta asumir nuevos retos diariamente, sin importar si{" "}
            <br></br>
            estan en mis habilidades o no o por muy dificil que sea <br></br>
            siempre cumplo con ello.{" "}
          </p>
          <p>
            ✓ Ademas algo que puede destacar mucho en mi podria ser el
            compañerismo <br></br>
            ya que siempre debemos apoyarnos entre nosotros.
          </p>
          <p>
            ✓ Algo que comunmente uso son las , inteligencias artificiales , y
            no se si <br></br>
            es algo bueno o malo pero a mi punto de vista diria que es una muy
            buena herramienta <br></br>
            para cumplir con nuestro trabajo .
          </p>
          <p>
            ✓ Siempre pueden contar con mi apoyo para cualquier problema asi no
            sepa , siempre tratare <br></br>
            de dar una solución factible.
          </p>
          <p>✓ Me gusta ayudar sin importar la situación .</p>
          <p>✓ Me gusta aprender cosas nuevas sin importar la dificultad .</p>
          <p>
            ✓ Soy muy perfeccionista con mi trabajo creeria q es algo bueno para
            el desarrollo de aplicaciones web{" "}
          </p>
          <p>
            ✓ Por ultimo diria que soy muy comprometido con mi obligación como
            programador{" "}
          </p>
        </div>
      )}

      {selectedSection === "experience" && (
        <div className="experience-section">
          {/* Contenido de la sección Experiencia */}
          <h2 style={{ color: "white", marginTop: "80px" }}>
            Experiencia Laboral
          </h2>
          <p>
            ✓ Estoy recien graduado de la academia Dev.F , <br></br> Pero cuento
            con mas de 200 horas de practica <br></br>
            en el que desarrolle algunos proyectos <br></br>
            completamente y otros que quedaron casi terminados <br></br>
            si quieres conocer mis proyectos y ver <br></br>
            una breve descrpción de como lo desarrolle <br></br>
            te invito a ingresar con el siguiente boton
          </p>
          <a
            className="btn btn-custom "
            href="/P"
            style={{ color: "white", backgroundColor: "black" }}
          >
            ver
          </a>
        </div>
      )}

      {selectedSection === "education" && (
        <div className="education-section">
          {/* Contenido de la sección Educación */}
          <h2 style={{ color: "white", marginTop: "80px" }}>Educación</h2>
          <p>
            {" "}
            ✓ Primaria <br></br>
            Estudie mi primaria en una escuelita de mi zona veredal , la escuela{" "}
            <br></br>
            se llama , escuela loma de luisa , en la cual hice de prescoolar a
            quinto .
          </p>
          <p>
            ✓ Bachillerato <br></br>
            Mi bachillerato lo estudie en unas de las pocas intituciones tecncas
            indruales del pais <br></br>
            donde por medio del programa nacional de colombia Sena dan un
            tecnico en el area tecnica <br></br>
            que uno elija , en mi caso fue electricidad . El punto es que en la
            INSTITUCION EDUCATICA <br></br>
            TECNICA INDUSTRIAL SIMON BOLIVAR del guamo tolima hice todo mi
            bachillerato .<br></br>
            institución la cual es la misma titular de la escuela donde estudie
            .{" "}
          </p>
          <p>
            ✓ Tecnico En Instalciones Electricas Residenciales <br></br>
            Este tecnico lo hice en mi formacion de 10 y 11 grado en mi
            institución donde me gradue <br></br>
            como bachiller tecnico en electricidad y por parte del Sena como{" "}
            <br></br>
            Tecnico En Instalciones Electricas Residenciales{" "}
          </p>
          <p>
            ✓ Master En Coding <br></br>
            Mi master en coding , lo estudie en la academia privada de la ciudad
            de mexico desde el <br></br>
            2022 en noviembre hasta el 26 de diciembre del 2023 el cual fue el
            dia que resivi mi sertificacion como<br></br>
            MASTER EN CODING{" "}
          </p>

          <p>
            Oprime el boton para ver los sertificados que constan lo anterior
          </p>
          <a
            className="btn btn-custom "
            href="/c"
            style={{ color: "white", backgroundColor: "black" }}
          >
            ver
          </a>
        </div>
      )}

      {selectedSection === "skills" && (
        <div className="skills-section">
          {/* Contenido de la sección Habilidades */}
          <h2 style={{ color: "white", marginTop: "80px" }}>
            Habilidades de desarrollo
          </h2>
          <p>
            ✓ Html<br></br>✓ Css<br></br>✓ Javascript <br></br>✓ GitHub{" "}
          </p>

          <p>
            ✓ ES6+ y POO para trabajar con estructuras de datos, algoritmos de
            búsqueda y algoritmos de ordenamiento.
          </p>

          <p>
            ✓ Usar Node.js y trabajar conceptos avanzados de JS como Async y
            EventLoop.
          </p>

          <p>✓ Instalación y utilizaciób de paquetes de NPM</p>

          <p>✓ Consumir APIs mediante peticiones HTTP</p>

          <p>
            ✓ Frontend <br></br>- React.js para crear aplicaciones robustas del
            lado del cliente. <br></br>- Trabajar con React Funcional, Hooks y
            técnicas avanzadas como Higher Order Components, Context API, manejo
            de token de sesión, buenas prácticas y testing.<br></br>
          </p>

          <p>
            ✓ Backend <br></br>- Arquitectura MVC, manejo de errores, testing,
            autenticación usando JWT y manejo básico de MongoDB, y cómo
            funcionan las bases de datos el lenguaje de consulta SQL para
            conectar el CRUD de una REST API - Técnicas avanzadas de backend
            como arquitectura MVC, manejo de errores, testing, autenticación
            usando JWT y manejo básico de MongoDB, + el uso de NoSQL
          </p>
          <p>
            ✓ DevOps <br></br>- Bases de la utilización de docker en un proyecto
            y configurar un proceso de integración continua CI
          </p>

          <h2 style={{ color: "white", marginTop: "80px" }}>
            Habilidades de desarrollo que desarrolle de manera autodidacta
          </h2>
          <p>✓ Implementacion de estilos SCSS</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      )}

      {selectedSection === "interests" && (
        <div className="interests-section">
          {/* Contenido de la sección Intereses */}
          <h2 style={{ color: "white", marginTop: "80px" }}>Intereses</h2>
          <p>✓ Trabajo remoto</p>
          <p>✓ Tener una vida comoda y un buen trabajo</p>
          <p>✓ Trabajar comodamente</p>
          <p>✓ Aprender muchas cosas nuevas mediante mi trabajo</p>
          <p>✓ Cumplir mis metas dia a dia </p>
        </div>
      )}
    </>
  );
};

export default Home;
