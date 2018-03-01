import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div>    
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/User'}>User</Link>
      </li>      
      <li>
        <Link to={'/UserList'}>UserList</Link>
      </li>
    </ul>
  </div>
)
export default Navigation;