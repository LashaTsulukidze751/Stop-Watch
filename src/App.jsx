import { useEffect, useState} from "react";

function App() {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if(start){
      interval = setInterval(()=>{
        setTime((prevTime)=>prevTime+10)
      },10)
    }else{
      clearInterval(interval);
    }
      return ()=>clearInterval(interval); 
  }, [start]);
  

  return (
    <div className="flex justify-center items-center bg-sky-500  w-full min-h-screen ">
      <div className="flex justify-center items-center rounded-lg flex-col bg-sky-600 w-80 h-44 font-mono p-4">
        <h2 className=" text-white font-bold text-3xl tracking-widest">TIMER</h2>
        <div className="flex text-white  text-5xl">
          <div className="m-2 w-1/3 flex justify-center flex-col items-center">
            <span className=" bg-sky-600  text-center ">{("0"+Math.floor((time/60_000) % 60)).slice(-2)}</span>
            <p className=" text-base">Minute</p>
          </div>
          <div className="m-2 w-1/3 flex justify-center flex-col items-center">
            <span className=" bg-sky-600  text-center">{("0"+Math.floor((time/1_000) % 60)).slice(-2)}</span>
            <p className=" text-base">Second</p>
          </div>
          <div className="m-2 w-1/3 flex justify-center flex-col items-center">
            <span className=" text-center border-0">{("0"+Math.floor((time/10) % 100)).slice(-2)}</span>
            <p className=" text-base">Ms</p>
          </div>
          
         
        </div>
        {!start && time===0 &&(<button className="text-white border border-white rounded w-16 hover:text-sky-600 hover:bg-white m-2 font-bold" onClick={() => setStart(true)}>START</button>)}

        {start && <button onClick={() => setStart(false)} className="text-white border border-white rounded w-16 hover:text-sky-600 hover:bg-white m-2 font-bold">PAUSE</button>}
        <div>
          {!start && time!==0 && (<button onClick={() => setStart(true)} className="text-white border border-white rounded w-16 hover:text-sky-600 hover:bg-white m-2 font-bold">RESUME</button>)}

          {!start && time!==0 && (<button onClick={() => { setTime(0) }} className="text-white border border-white rounded w-16 hover:text-sky-600 hover:bg-white m-2 font-bold">  RESTART  </button>)}
        </div>
        
      </div>
    </div>
  );
}

export default App;
