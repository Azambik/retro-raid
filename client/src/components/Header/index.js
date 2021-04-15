import React, { useEffect, useState, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import * as Icon from 'react-bootstrap-icons';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';


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

    const [show, setShow] = useState(false);
    const target = useRef(null);

    //when user clicks on controller, timer begins to enter konami code, if successful, toast pops up and sends pre-filled out message to Dev Team
  return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Nav className="navbox">
                <Icon.Controller className='navActive' ref={target} onClick={() => setShow(!show)} size={50} />
                <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>Konami!</Tooltip>
                    )}
                </Overlay>
                <Navbar.Brand href="/">RETRO RAID</Navbar.Brand>
                { pages.map( link =>(
                    <Nav.Link className={`${currentPage === link && 'navActive'}`}  key={link}>
                        <span onClick={() => setCurrentPage(link)} >{link}</span>
                    </Nav.Link>
                ))}
            </Nav>
        </Navbar>       
  );
}

export default Header;