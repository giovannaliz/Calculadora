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

  function inputNum(e){
    var input = e.target.value
    setNum(input);
  }

  return (

    <div className='main'>

      {/* <input type="text" value={resultado} /> */}

      <div className='teclado'>
       <button>0 onClick={inputNum} value = {0}</button> 
       <button>1 onClick={inputNum} value = {1}</button>
       <button>2 onClick={inputNum} value = {2}</button>
       <button>3 onClick={inputNum} value = {3}</button>
       <button>4 onClick={inputNum} value = {4}</button>
       <button>5 onClick={inputNum} value = {5}</button>
       <button>6 onClick={inputNum} value = {6}</button>
       <button>7 onClick={inputNum} value = {7}</button>
       <button>8 onClick={inputNum} value = {8}</button>
       <button>9 onClick={inputNum} value = {9}</button>
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