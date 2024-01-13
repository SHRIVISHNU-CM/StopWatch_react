import { useState,useEffect } from "react";
import "./App.css"


function StopWatch(){
  const [data,setData] = useState(0);
  const[start,setStart] = useState(false);
  useEffect(()=>{
    let interval;
    if(start){
      interval = setInterval(()=>{
        setData((prev)=>prev+10)
      },10);
    }else if(!start){
      clearInterval(interval);
    }
    return ()=>clearInterval(interval)
  },[start])

    return (
      <div className="container">
      <div className="container-wrapper">
          <h1>Stop Watch</h1>
          <div className="content">
            <span>
              {("0" + Math.floor((data / 60000) % 60)).slice(-2)}:
            </span>
            <sapn>
            {('0' + Math.floor((data / 1000) % 60)).slice(-2)}:
            </sapn>
            <span>
              {('0' + ((data / 10) % 100)).slice(-2)}
            </span>
          </div>
          
      </div>
      <div className="btn">
        <button onClick={()=>{setStart(true)}}>Start</button>
          <button onClick={()=>{setStart(false)}}>Stop</button>
          <button onClick={()=>{setData(0)}}>Reset</button>
      </div>
        
      </div>
    )
}

export default StopWatch;