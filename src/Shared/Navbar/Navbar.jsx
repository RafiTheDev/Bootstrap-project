
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-primary">
          <Container>
            <Navbar.Brand href="#home"className='text-light fw-bold'>Product-Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto  ">
                <Nav.Link href="#features" className='text-light'>Home</Nav.Link>
                <Nav.Link href="#pricing" className='text-light' >About</Nav.Link>
                <Nav.Link href="#features"className='text-light'>Products</Nav.Link>
                <Nav.Link href="#pricing"className='text-light'>Contacts</Nav.Link>
                
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                <Button variant="info">Dashboard</Button>

                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <Button variant="light">Log In</Button>

                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
    
}

export default Navigation