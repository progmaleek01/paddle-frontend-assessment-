import React from 'react'
import './owner.css'


function Owner(props) {
    const {name,avatar_image,description, issues, stars, avatar_name, ...others } = props
  return (
    <div className='container'>
        <div className="avatar">
            <img src={avatar_image} alt="" />
        </div>
        <div className="avatar-details">
            <h1>{name}</h1>
            <h3>{description}</h3>
            <div className="stars-issues">
                <p className='star'>{`Starts: ${stars}`}</p>
                <p className='issue'>{`Issues: ${issues}`}</p>
                <p className='date'>{`Submitted 30 days ago by ${avatar_name}`}</p>
            </div>
        </div> 
    </div>
  )
}

export default Owner