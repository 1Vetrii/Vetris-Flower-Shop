import React from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Link} from "@nextui-org/react"
const NavBar = () => {
  return (
    <Navbar>
        <NavbarContent className='absolute right-0'>
            <NavbarItem isActive>
                <Link href='#' color="foreground">Home</Link>
            </NavbarItem>
            <NavbarItem>●</NavbarItem>
            <NavbarItem>
                <Link href="" color="foreground">Order</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default NavBar