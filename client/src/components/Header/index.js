import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import * as Icon from 'react-bootstrap-icons';

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

    //when user clicks on controller, timer begins to enter konami code, if successful, toast pops up and sends pre-filled out message to Dev Team
  return (
        <Navbar bg="dark" variant="dark">
            <Nav className="navbox">
                <Icon.Controller size={50} />
                <Navbar.Brand href="/">RETRO RAID</Navbar.Brand>
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