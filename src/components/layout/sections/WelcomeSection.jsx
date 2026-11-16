// Visualizza un messaggio di benvenuto che si aggiorni in tempo reale scegliendo tra diverse lingue tramite una serie di bottoni dedicati

import { useState } from "react"



export default function WelcomeSection() {
 const [translate, setTranslate] = useState('Ciao! Come ti chiami?')

 function handleTranslate (testoTradotto) {
  setTranslate(testoTradotto)

 }





  return (
   <section className="text-center">
    <h2>WelcomeSection</h2>
    <h3>{translate}</h3>
    <div className="btn-group-divider">
    <button className="btn btn-primary" onClick= {() =>  handleTranslate ('Ciao! Come ti chiami?')}>Italiano</button>
    <button className="btn btn-primary" onClick={() => handleTranslate ('Hello! What is your name?')}>Inglese</button>
    <button className="btn btn-primary" onClick={() => handleTranslate('Ciao! Qual e seu nome?')}>Portoghese</button>
    </div>



   </section>
  )
}