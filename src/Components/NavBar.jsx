import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link className='nav'to={'/'}> Accueil</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link className='nav' to={'./genre'}>Genre</Link>
            <Link className='nav' to={'./actors'}>Acteurs</Link>
            <Link className='nav' to={'./genre'}>Genre</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
};

 
export default NavBar;