// Creare un componente con tre pulsanti ed un paragrafo. Creare una variabile di stato reattiva per gestire l’allineamento del paragrafo. Per ogni pulsante, impostare l’evento onClick e impostare l’allineamento in base al pulsante cliccato

import { useState } from "react"

export default function SectionTabs() {
 const [alignment, setAlignment] = useState('text-start')

 function handleAlignment (alignClass) {
  setAlignment(alignClass)
 }


  return (
   <section className="p-4">
    <h2 className="text-center">SectionTabs</h2>
    <p className={alignment}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates placeat, similique numquam nostrum eligendi facere, eum ipsam sunt facilis dolorum magni asperiores dolorem, necessitatibus porro autem? Ipsum modi sit repudiandae.</p>
    <div className="btn-group-divider btn-primary text-center">
    <button className=" btn btn-primary" onClick={() => handleAlignment('text-start')}>Left</button>
    <button className="btn btn-primary" onClick={() => handleAlignment('text-center')}>Center</button>
    <button className="btn btn-primary" onClick={() => handleAlignment('text-end')}>Right</button>

    </div>


   </section>
  )
}