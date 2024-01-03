import './style.css'
//Practica 1
// import './clean-code/04-homework'
// import './clean-code/05-dry'

// Practica2
// import './clean-code/06-classes-a'
// import './clean-code/06-classes-b'
// import './clean-code/06-classes-c'
// import './clean-code/07-tarea'

// Practica3
// Ejecutar en la consola el siguiente codigo
// node .\src\code-smells\01-singleton.js
// Mostrara: Misma instancia?  true
import './code-smells/02-high-coupling'
import './code-smells/02-low-coupling'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`


