import Data from "./meusComponentes/Data";
import Contador from "./meusComponentes/Contador";
import { useState }from "react";


function App() {
  const [count, setCount] = useState(0);

  function incrementa() {
    setCount(count + 1);
  }

  function decrementa() {
    setCount(count - 1);
  }

  return (
    <div className="App">
        {/* <Data texto="Data e hora atuais: " timeZone={-3.00}/>
        <Data texto="Data e hora em Londres: " timeZone={1.00}/>
        <Data texto="Data e hora em Nova York:" timeZone={-4.00}/> */}
        <h1>{count}</h1>
        <button onClick={incrementa}>
            +
        </button>
        <button onClick={decrementa}>
            -
        </button>  
    </div>
  );
}

export default App;
