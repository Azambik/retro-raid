import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import RRLogo from 'assets' 

function Header({ currentPage, setCurrentPage }) {
    const pages = [
        'Home',
        'Forum',
        'New Character',
        'Sign In',
        'Help!'
    ];
    
    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

  return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="/">RETRO RAID</Navbar.Brand>
            <Nav className="mr-auto">
                { pages.map( link =>(
                    <Nav.Link className={`${currentPage === link && 'navActive'}`} key={link}>
                        <span onClick={() => setCurrentPage(link)} >{link}</span>
                    </Nav.Link>
                ))}
            </Nav>
        </Navbar>       
  );
}

export default Header;