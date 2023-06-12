import { useState } from "react";
import "./App.css";

function App() {
  
  const[count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count-1);
  }
  function increaseHandler() {
    setCount(count+1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
  <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-r from-green-500 via-purple-500 to-orange-400 flex-col gap-10">
    
    <div className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-black to-black font-medium text-2xl">Increment & Decrement</div>

    <div className="bg-white flex justify-center gap-12 py-3 rounded-md text-[25px] text-[#344151]">

      <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
        -
      </button>
      
      <div className="font-bold gap-12 text-5xl">
        {count}
      </div>

      <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
        +
      </button>

    </div>

    <button onClick={resetHandler} className="text-white px-5 py-2 rounded-md text-lg bg-sky-500 hover:bg-sky-700">
      Reset
    </button>

  </div>
  );
}

export default App;
