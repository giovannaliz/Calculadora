import { useState } from 'react';
import './Calculadora.css';


function somar(){

}

function subtrair(){

}

function dividir(){

}

function multiplicar(){

}


function Calculadora() {

  const [num, setNum] = useState(0);

  return (

    <div className='main'>

      {/* <input type="text" value={resultado} /> */}

      <div className='teclado'>
       <button>0</button> 
       <button>1</button>
       <button>2</button>
       <button>3</button>
       <button>4</button>
       <button>5</button>
       <button>6</button>
       <button>7</button>
       <button>8</button>
       <button>9</button>
       <button>C</button>
       <button>=</button>
       <button>+</button>
       <button>-</button>
       <button>*</button>
       <button>/</button>
       </div>
    </div>
  );
}

export default Calculadora;


//eval('10+20')
//resultado = 30