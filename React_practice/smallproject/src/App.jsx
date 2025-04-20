import React , { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import auth from "./Appwrite/auth.js"
import {login, logout} from "./Store/authSlice.js"
import {Header, Footer} from "./Components/Index.js"
import './App.css'

function App() {
  const[loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=> {
    auth.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      } else{
        dispatch(logout());
      }
    })
    .finally(()=>{
      setLoading(false)
    })

  }, [])
  


  return !loading ? (<div className='min-h-sc flex flex-wrap content-between bg-gray-300   '>
    <div className=' w-full block'>
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
    </div>): null
}

export default App
