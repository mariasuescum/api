import { Link } from 'react-router-dom'
import styles from "./Character.module.css"

export const Character = (props) => {
  const { id, name, status, species, gender, image } = props

  return(
    <Link to={`/characters/${id}`}>
      <section className= {styles.cardCharacter}>
        <h2 className={styles.text}>{name}</h2>
        <img src={image} alt={name} />
      </section>
  
    </Link>
  )
}