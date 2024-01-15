
'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://goshopkey.com/wp-content/uploads/2023/08/penyetan-cok.png" width={"50px"} height={"50px"} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Puedessee cok</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://goshopkey.com/wp-content/uploads/2023/08/penyetan-cok.png" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
      {/* <NavLink to="/" className={({isActive}) => `$ {isActive ? "text-pink-500" : "text-pink-400"}hover.text-pink-500`}> Beranda</NavLink>
      <NavLink to="/order-history" className={({isActive}) => `$ {isActive ? "text-pink-500" : "text-pink-400"}hover.text-pink-500`}> Order History</NavLink>
  

        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
      
        <Navbar.Link href="#">History</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}

        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Component;