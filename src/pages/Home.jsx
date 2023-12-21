import React, { useEffect, useState } from 'react'
import MemeCard from '../components/MemeCard'
import { getAllMemes } from '../Api/Memes'
import "./memecardstyle.css"
const Home=()=> {
const[data, setData]=useState([]);
   useEffect(() => {
       getAllMemes().then((memes) => setData(memes.data.memes))
       console.log(data)
   })

  return (
    <div className='meme-card-style mx-4'>
    {data.map((element, index)=>(
        <MemeCard img={element.url} title={element.name}/>
        ))}
    </div>
  )
}

export default Home