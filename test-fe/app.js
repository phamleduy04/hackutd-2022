import react from 'react'

import {useState, useEffect} from 'react'

funtion GetData(){
  const [data, setData] = useState({})

  useEffect(() =>{
    fetch("/listItems")
    .then(res => res.json())
    .then(data => setData(data))
  },[])

  return{
    <div>{data.items[0].Name}</div>
    <div>{data.items[0].Price}</div>
  }
}
