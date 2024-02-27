import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faRightLong } from '@fortawesome/free-solid-svg-icons'
import headerImg from "../assets/img/header-img.svg";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(0);
    const toRotate = ["Web Developer", "Software Engineer", "Back End Programmer", "Cyber Security Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(350);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <span className="tagline">Welcome to my Portfolio.</span>
                        <h1>{`Hi! My name is Grant. I'm a `}<span className="wrap">{text}</span></h1>
                        <p>About me and how great I am...</p>
                        <button className="btn btn-dark" onClick={() => { console.log('test') }}>Let's Connect <FontAwesomeIcon icon={faRightLong }></FontAwesomeIcon></button>
                    </Col>
                    <Col md={6}><img className="banner-col2" src={headerImg }></img></Col>
                </Row>
            </Container>
        </section>
    )
}