import React from 'react'
import Axios from './components/axios'
import Blog from './components/blogs/Blog'
import CommingSoon from './components/commingSoon/CommingSoon'
import Data  from './components/Data'
import Owners from './components/owners/Owners'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import IMAGE from './assets/sample.png'


const App = () => {
  const blogs = [ 
    {
      id:1,
      image:'./assets/sample.png',
      date:'JANUARY 4, 2022 . FEATURED ARTICLE . AFFILATE',
      heading:'12 Popup Use Cases To Increase Conversions',
      body:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id:2,
      image:{IMAGE},
      date:'MAY 6, 2021 . FEATURED ARTICLE . AFFILATE',
      heading:'2 Popup Use Cases To Increase Conversions',
      body:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id:3,
      image:{IMAGE},
      date:'APRIL 23, 2021 . FEATURED ARTICLE . AFFILATE',
      heading:'30 Popup Use Cases To Increase Conversions',
      body:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id:4,
      image:{IMAGE},
      date:'MARCH 15, 2021 . FEATURED ARTICLE . AFFILATE',
      heading:'929 Popup Use Cases To Increase Conversions',
      body:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id:5,
      image:{IMAGE},
      date:'OCTOBER 8, 2021 . FEATURED ARTICLE . AFFILATE',
      heading:'122 Popup Use Cases To Increase Conversions',
      body:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
    {
      id:6,
      image:{IMAGE},
      date:'FEBUARY 21, 2021 . FEATURED ARTICLE . AFFILATE',
      heading:'12 Popup Use Cases To Increase Conversions',
      body:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
    },
  ]
  return (
   <Router>
      <>
      <Routes>
        <Route exact path='/' element={<CommingSoon/>}/>       

        <Route exact path='/owners' element={<Owners/>}/> 
          
        <Route exact path='/blog' element={<Blog Blogs={blogs} />}/>

      </Routes>
      </>
    </Router>
    
  )
}

export default App
