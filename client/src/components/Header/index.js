import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav'
//import RRLogo from 'assets' 

function Header({ currentPage, setCurrentPage }) {
    const pages = [
        'Home',
        'Forum',
        'New Character/Sign In',
        'Help!'
    ];
    
    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

  return (
    <div className="flex-row px-1">
        <h2>RETRO RAIDERS</h2>
        <Nav className="flex-row px-5" /*style={{ backgroundImage: `url(${ Banner })`}}*/>
            { pages.map( link =>(
                <Nav.Link className={`${currentPage === link && 'navActive'}`} key={link}>
                    <span onClick={() => setCurrentPage(link)} >{link}</span>
                </Nav.Link>
            ))}
        </Nav>
    </div>    
  );
}

export default Header;