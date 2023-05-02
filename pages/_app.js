import '@/styles/globals.css'
import React, { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  //this is done to start the api server 
  useEffect(() => {
    fetch('https://heart-i5bb.onrender.com/heart_prediction')
    fetch('https://diabetes-nhpg.onrender.com/diabetes_prediction')
  },);

  return (
    <div className='h-screen w-full'>
      <Component {...pageProps} />
    </div>
  )
}