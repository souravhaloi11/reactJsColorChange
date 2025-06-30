import React from 'react'
import { useState } from 'react'


const App = () => {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex felx-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{background:"red"}}>Red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{background:"green"}}>Green</button>
          <button onClick={()=> setColor("yellow")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{background:"yellow"}}>yellow</button>
          <button onClick={()=> setColor("purple")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{background:"purple"}}>purple</button>
          <button onClick={()=>setColor("olive")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{background:"olive"}}>olive</button>
          <button onClick={()=>setColor("lavender")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{background:"lavendar"}}>lavender</button>
          <button onClick={()=> setColor("orange")} className='outline-none px-4 py-2 rounded-full text-white shadow-lg' style={{background:"orange"}}>orange</button>
        </div>

      </div>
      
      </div>
    </>
    
  )
}

export default App