import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Owner from './owner/Owner'

function Owners() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc')
        .then((res) => {
            setPosts(res.data.items)
            console.log(res.data.items)
        })
        .catch((err) => {
            console.log(err)
        })
        
},[])



  return (
    <div>
        {
          posts.map( data => {
            const {id, name, description,open_issues_count,stargazers_count} = data;
            const { avatar_url,login} = data.owner
            return(
                <Owner key={id} 
                    name={name} 
                    description={description} 
                    avatar_image={avatar_url}
                    issues={open_issues_count}
                    stars={stargazers_count}
                    avatar_name={login}
                    
                    />
            )})}
    </div>
  )
}

export default Owners