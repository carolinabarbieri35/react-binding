// Crea un bottone che alterni la propria classe stilistica (es. da primary a success) ad ogni click, mutandone dinamicamente l'aspetto grafico

import { useState } from "react"

export default function ButtonSection() {

 const [isActive,setIsActive] = useState(true)

 function handleChangeButton (){
  setIsActive (!isActive)

 }
  return (
   <section className="container text-center">
    <h2>Button Section</h2>
    <button className={`btn ${isActive ? 'btn-primary' : 'btn-success'}`} onClick={handleChangeButton}>Change me!</button>
   </section>
    
  )
}