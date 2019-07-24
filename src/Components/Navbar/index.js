import React from 'react';
import { Link } from 'react-router-dom'
import './style.js'
import { NavbarSection , Logo , UlList , ListItem , Anchor , Img , HomeBtn } from './style.js';



const Navbar = () => {
  return (
    <NavbarSection>
            
    <div className="container">

    <Logo>
    <Img src="images/avatar.png"/>
   </Logo>


<UlList>
    <ListItem><Anchor href="#">Home</Anchor></ListItem>
    <ListItem><Anchor href="#">About</Anchor></ListItem>
    <ListItem><Anchor href="#">Event</Anchor></ListItem>
    <ListItem><Anchor href="#">Profile</Anchor></ListItem>
    <ListItem><Anchor href="#">Contact</Anchor></ListItem>
    <ListItem><HomeBtn>Logout</HomeBtn></ListItem>
</UlList>

</div>

</NavbarSection>

  )
}

export default Navbar;
