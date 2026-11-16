import { useState } from "react";

export default function CounterSection() {

 const [count, setCount] = useState(0);
function handleIncrement () {
 setCount (count +1);
}

function handleReset () {
 setCount (0);
}

  return (
    <section className="container text-center">
     <p className="display-1 text-center">{count}</p>
     <button onClick={handleIncrement} className="btn btn-primary mt-2">click me</button>
     <button onClick={handleReset} className="btn btn-secondary ms-2 mt-2">reset</button>
    </section>

  )
}