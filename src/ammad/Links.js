import React from 'react'
import { Link } from 'react-router-dom';

const Links = ({zz,text}) => {
  return (
    <div>
      
      <div class="forgot-pass"><Link to={zz}>{text}</Link></div>
    </div>
  )
}

export default Links
