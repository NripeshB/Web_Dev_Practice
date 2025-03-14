import { useState } from 'react'


function App() {
  const [color , setColor] = useState("black")

  return (
    <div className='w-full h-screen ' style={{backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 px-3 py-2 bg-amber-50 rounded-2xl'> 
          <button onClick={ ()=> {setColor("Red")}} className='px-3.5 py-1.5 border-none rounded-2xl'
          style={{backgroundColor: "Red"}}>
            Red
          </button>
          <button onClick={ ()=> {setColor("Green")}} className='px-3.5 py-1.5 border-none rounded-2xl'
          style={{backgroundColor: "Green"}}>
            Green
          </button>
          <button onClick={ ()=> {setColor("Blue")}} className='px-3.5 py-1.5 border-none rounded-2xl'
          style={{backgroundColor: "Blue"}}>
            Blue
          </button>
          <button onClick={ ()=> {setColor("Cyan")}} className='px-3.5 py-1.5 border-none rounded-2xl'
          style={{backgroundColor: "Cyan"}}>
            Cyan
          </button>
          <button onClick={ ()=> {setColor("Olive")}} className='px-3.5 py-1.5 border-none rounded-2xl'
          style={{backgroundColor: "Olive"}}>
            Olive
          </button>
          <button onClick={ ()=> {setColor("Pink")}} className='px-3.5 py-1.5 border-none rounded-2xl'
          style={{backgroundColor: "Pink"}}>
            Pink
          </button>
          <button onClick={ ()=> {setColor("Lavender")}} className='px-3.5 py-1.5 border-none rounded-2xl'
          style={{backgroundColor: "Lavender"}}>
            Lavender
          </button>
          <button onClick={ ()=> {setColor("Magenta")}} className='px-3.5 py-1.5 border-none rounded-2xl'
          style={{backgroundColor: "Magenta"}}>
           Magenta
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
