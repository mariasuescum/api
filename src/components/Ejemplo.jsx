const Ejemplo = (props) => {
  
  const { nombre, edad, apellido } = props

  return(

    edad <= 15 ? <h1>Es joven </h1> : edad <= 17 ? <h1>Es un adolescente</h1> :    
    <div class="datos">
      <h1>nombre: {nombre}</h1>
      <p>edad: {edad}</p>
      <p>apellido: {apellido}</p>
    </div>

  )
}

export default Ejemplo