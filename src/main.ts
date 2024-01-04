import './style.css'
//Practica 1 - Clean Code y deuda tecnica
// import './clean-code/04-homework'
// import './clean-code/05-dry'

// Practica2 - Principio de responsabilidad unica, comentarios y uniformidad
// import './clean-code/06-classes-a'
// import './clean-code/06-classes-b'
// import './clean-code/06-classes-c'
// import './clean-code/07-tarea'

// Practica3 - Code Smells y acronimo S_T_U_P_I_D
// Ejecutar en la consola el siguiente codigo
// node .\src\code-smells\01-singleton.js
// Mostrara: Misma instancia?  true
// import './code-smells/02-high-coupling'
// import './code-smells/02-low-coupling'

// Practica4 - Principios SOLID
// import './solid/01-srp'
// import './solid/02-open-close-a'
// import './solid/03-liskov-a'
import './solid/05-dependency-a'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`


