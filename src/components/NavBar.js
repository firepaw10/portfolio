import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (curLink) => {
        setActiveLink(curLink);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": "" }>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" id='home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('home')}}>Home</Nav.Link>
                        <Nav.Link href="#skills" id='skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('skills')} }>Skills</Nav.Link>
                        <Nav.Link href="#projects" id='projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('projects')}}>Projects</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>*/}
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a className="socials" href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className="socials" href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a className="socials" href="#linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a className="socials" href="#email"><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                        <button className="btn btn-dark" onClick={() => console.log("connect")}>
                           <span>Let's Connect</span>
                        </button>
                    </span>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
