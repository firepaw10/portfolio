import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {

    }

    return ( 
        <section clsasName="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6 }>
                        <img className="contactBackground" src={contactImg } alt="Contact Us"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit }>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input className="form-control" type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input className="form-control" type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input className="form-control" type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input className="form-control" type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col lg={12} className="px-1">
                                    <textarea row="6" class="form-control" id="exampleFormControlTextarea1" rows="3" type="text" value={formDetails.message} placeholder="Messge" onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button className="btn btn-dark" type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                       <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>       
        </section>
    )
}