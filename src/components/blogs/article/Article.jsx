import React from 'react'

function Article({image}) {
  return (
    <div className='articles-container'>
        <article>
            <img src={image} alt="" />
            <div className="date">SEPTEMBER 6, 2021 . FEATURED ARTICLE . AFFILATE</div>
            <div className="heading">12 Popup Use Cases To Increase Conversions</div>
            <div className="article-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</div>
            <div className="more">
              <div className="article-line"></div>
              <h5>READ MORE</h5>
            </div>
          </article>
    </div>
  )
}

export default Article