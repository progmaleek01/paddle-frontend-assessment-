import React from 'react'
import Axios from './components/axios'
import Blog from './components/blogs/Blog'
import CommingSoon from './components/commingSoon/CommingSoon'
import Data  from './components/Data'
import Owners from './components/owners/Owners'

const App = () => {
  return (
    <div>
      {/* <Axios /> */}
      {/* <Data/> */}
      {/* <Owners/> */}
      {/* <Header/> */}
      {/* <CommingSoon/> */}
      <Blog/>
    </div>
  )
}

export default App