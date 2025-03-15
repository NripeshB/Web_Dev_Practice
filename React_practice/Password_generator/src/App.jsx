import { useState, useRef, useCallback, useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numTrue, setnumTrue] = useState(false);
  const [charTrue, setcharTrue] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numTrue) {
      chars += "1234567890"
    }

    if(charTrue){
      chars += "!@#$%^&*()_+=:;,.<>{}[]"
    }

    for (let i = 1; i <= length; i++) {
      let num = Math.floor(Math.random()*chars.length+1 )
      pass += chars.charAt(num);
    }

    setPassword(pass);
  }, [length, numTrue, charTrue, setPassword])

  const passwordRef = useRef("null")
  
  const passwordCopy =useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
 useEffect(()=>{
  passwordGenerator()
 },[numTrue, charTrue, passwordGenerator, length])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-400'>
      <h1 className='text-white text-center my-3 text-2xl '>Password generator</h1>
       <div className="flex bg-white shadow rounded-lg overflow-hidden mb-4">

        <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passwordRef}
             
        />
        <button onClick={passwordCopy} className='bg-blue-700 text-white hover:bg-blue-500 p-2 cursor-pointer'>
          copy
        </button>
       </div>

       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {numTrue}
          onChange={()=> setnumTrue((prev) => !prev)}
          />

          <label >Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {charTrue}
          onChange={()=> setcharTrue((prev) => !prev)}
          />

          <label >Chars</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <button  className=' flex items-center gap-x-1 bg-blue-600 hover:bg-blue-400 text-white p-1.5 rounded-2xl  ' onClick={passwordGenerator}>Generate</button>
        </div>
        
       
        

       </div>

      </div>
      
    
    

    </>
  )
}

export default App
