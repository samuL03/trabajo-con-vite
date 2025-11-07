import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './HDV.css'

function hoja() {

  return (
    <>
  <body>
    <main class="container">
      <header class="header">
        <div class="header-left">
          <div class="photo">
            <img src="/public/perfil.jpg" alt="foto de mi perfil" />
          </div>
          <div>
            <h1>Samuel Rendon Loaiza</h1>
            <p>Estudiante: análisis y desarrollo de software</p>
          </div>
        </div>
        <div class="header-right">
          <p>Medellín, Colombia</p>
          <p>samuelrendonloaiza7@gmail.com · +57 300 299 3827</p>
          <p>linkedin.com/in/samuel.rendon</p>
        </div>
      </header>

      <section class="content">
        <aside class="sidebar">
          <div class="card">
            <h2>Perfil</h2>
            <p>
              Soy un estudiante en formación de análisis y desarrollo de
              software, voy en tercer trimestre, tengo conocimientos básicos en
              programación y bases de datos. Me gusta trabajar en equipo,
              aprender de mis compañeros y transmitir mis conocimientos.
            </p>
          </div>

          <div class="card">
            <h3>Habilidades</h3>
            <ul>
              <li>• HTML, CSS</li>
              <li>• SQL Server, MongoDB</li>
              <li>• Python, JavaScript</li>
            </ul>
          </div>

          <div class="card">
            <h3>Educación</h3>
            <ul>
              <li>2024: Bachillerato</li>
              <li>2025: Estudiante del SENA en proceso</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  </body>
    </>
  )
}

export default hoja
