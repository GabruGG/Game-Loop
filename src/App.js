import React, { useState } from 'react';
import './App.css';

function App() {
  const [attempt,setAttempt]=useState(0);
  const[msg,setMsg]=useState("---Keep Trying---");
  const [pos,setpos]=useState([10,30]);
  console.log(pos);
  function move(){
    let x=Math.random()*95;
    let y=Math.random()*95;
    setpos([y,x]);
    setAttempt((prev)=>(prev+1));
  }
  function win(){
    setMsg("You Won!");
  }
  return (
       <>
       
       <div className='gameDiv'>
        <h2 style={{display:"flex",justifyContent:"center"}}>Loop Game</h2>
        <h3 style={{display:"flex",justifyContent:"center",color:"orangered"}}>Click on the Ball to Win the Game!</h3>
        <p style={{display:"flex",justifyContent:"center",color:"green"}}><strong>Attempts:{attempt}</strong></p>
        <p style={{display:"flex",justifyContent:"center"}}><strong>{msg}</strong></p>
        <div onClick={win} onMouseOver={move} className='ball' style={{position:"absolute",top:pos[0]+"%",left:pos[1]+"%"}}></div>
        </div>
       </>
  );
}

export default App;
