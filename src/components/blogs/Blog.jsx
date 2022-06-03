import React from 'react'
import './blog.css'
import Head from './head/Head'

function Blog() {
  return (
    <>
    <Head/>
      <div className='blog-container'>
        <div className="article-news">
          <div className="back-fade"></div>
          <div className="article-blur"></div>
        </div>
      </div>
    </>
    
  )
}

export default Blog