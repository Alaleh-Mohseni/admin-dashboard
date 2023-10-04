import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <Navbar className="mt-auto border-top border-2 py-5">
            <Container className="p-3 d-flex flex-column align-items-start">
                <Nav className="d-flex pb-3 mb-3 fw-semibold">
                    <Nav.Item>
                        <Nav.Link>درباره ما</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='px-5'>
                        <Nav.Link>تماس با ما</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>کانال تلگرام</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Row>
                    <Col>
                        <Navbar.Text className='fw-semibold'>شبکه های اجتماعی: </Navbar.Text>
                        <Navbar.Brand>
                            <FaLinkedin />
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <FaTelegram />
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <FaYoutube />
                        </Navbar.Brand>
                    </Col>
                </Row>
                <p className="text-center text-body-secondary pt-4">© 2023</p>
            </Container>
        </Navbar>
    )
}

export default Footer