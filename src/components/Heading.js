import React from 'react';
import {Link} from 'react-router-dom';
import {
NavBar,
Nav,
NavItem,
NavBarBrand,
Container
} from 'reactstrap';

const Heading = () => {
  return (
   <NavBar color="dark" dark>
       <Container>
           <NavBarBrand href="/">Team</NavBarBrand>
           <Nav>
               <NavItem>
                   <Link className='btn, btn-primary' to="/add">Add User</Link>
               </NavItem>
           </Nav>
       </Container>

   </NavBar>
  )
}

export default Heading
