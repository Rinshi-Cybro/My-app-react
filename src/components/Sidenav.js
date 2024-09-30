import React from 'react'
import './Sidenav.css'


function Sidenav() {
  return (
    <div>
      <nav className='side-nav'>
        <ul>
          <li><a href='#home'>Home </a></li>
          <li><a href='#about'> About </a> </li>
          <li><a href='#contact'> Contact </a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidenav