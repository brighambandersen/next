import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <nav className='p-3'>
      <NavLink href='/'>Home</NavLink>
      <NavLink href='/about'>About</NavLink>
      <NavLink href='/games'>Games</NavLink>
    </nav>
  );
};

export default Navbar;
