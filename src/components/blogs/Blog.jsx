import React from 'react'
import './blog.css'
import Head from './head/Head'
import IMAGE from '../../assets/sample.png'

function Blog({Blogs}) {
  return (
    <>
    <Head/>
      <div className='blog-container'>
        <div className="article-news">
          <div className="back-fade"></div>
          <div className="article-blur"></div>

          <div className="article">
            <div id='blog'>
              <div className='line'></div>
            <p>BLOG</p>
            </div>
            <h1>Articles and News</h1>

          </div>


        </div>
        <div className="body">
          <div className="latest-search">
            <div className="latest">
              <h1>Latest From The Blog</h1>
              <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</h4>
            </div>            
              <div className="search">
                <input type="text" placeholder='Search here' />
              </div>
          </div>

          <div className="articles-container">

            {
              Blogs.map(blog => (
                <article key={blog.id}>
                  <img src={IMAGE} alt="" />
                  <div className="date">{blog.date}</div>
                  <div className="heading">{blog.heading}</div>
                  <div className="article-body">{blog.body}</div>
                  <div className="more">
                  <div className="article-line"></div>
                  <h5>READ MORE</h5>
                  </div>
                </article>)
              )
            }
          


          </div>

          

        </div>


      </div>
    </>
    
  )
}

export default Blog