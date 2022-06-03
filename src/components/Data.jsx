import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Data() {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    axios.get('https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc')
        .then((res) => {
            // res = res.data.items;
            setPosts(res.data.items)
            console.log(res.data.items)
        // console.log(res.data.items)
        })
        .catch((err) => {
            console.log(err)
        })
        
},[])

  return (
    <div>
      {
          posts.map( data => {
            const {id, name, description, ...others} = data;
            const { avatar_url} = data.owner
            // const image = avatar_url.blob()
            return(
              <div key={id}>{name}-----{description} <img src={avatar_url} others={others} alt="" /></div>
            )})}
    </div>
  )
}

export default Data