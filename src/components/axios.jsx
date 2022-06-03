import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [posts, setPosts] = useState([])
    

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                // res = res.data.items;
                setPosts(res.data)
                console.log(res)
            // console.log(res.data.items)
            })
            .catch((err) => {
                console.log(err)
            })
            
    },[])

    
  return (
    <div>

        <h1>{posts}</h1>

        
            {
                posts.forEach( data => (
                    // const {id, full_name} = post;

                    <div key={data.id}>{data.title}</div>
                ))
            }
        
        
    </div>
  )
}

export default Axios