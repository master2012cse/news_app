import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {


const API_KEY = "ce5f84f1fe194e0d9eeb606b2b6bb0ae";
const [search,setSearch] = useState("india")
const [newsData,setNewsData] = useState(null)


const getData=async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const jsonData = await response.json()
    console.log(jsonData.articles)
    setNewsData(jsonData.articles)

}

useEffect(()=>{
    getData()
},[])



const handleInput=(e)=>{
    console.log(e.target.value)
    setSearch(e.target.value)
}

const userInput=(event)=>{
    setSearch(event.target.value)
}



  return (
    <div>
     <nav>
        <div>
            <h1>Trending<span>N</span>ews</h1>
        </div>
        <ul>
            <a>All News</a>
            <a>All News</a>
        </ul>
        <div className='searchBar'>
            <input type='text' placeholder='Search News'
            value={search}
            onChange={handleInput}
            />
            <button onClick={getData}>Search</button>
        </div>

     </nav>

<div className='head'>
    <p>Stay Updated with TrendingNews</p>
</div>


     <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
     </div>

    <div>
    {newsData?  <Card data={newsData}/> : null}
    </div>


    </div>
  )
}

export default Newsapp
