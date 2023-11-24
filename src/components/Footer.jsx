import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";

const contacts = [
    { id: 1, title: 'درباره ما' },
    { id: 2, title: 'تماس با ما' },
    { id: 3, title: 'کانال تلگرام' },
]

const brands = [
    { id: 1, icon: FaLinkedin },
    { id: 2, icon: FaTelegram },
    { id: 3, icon: FaYoutube },
]


function Footer() {
    return (
        <Navbar className="mt-auto border-top border-2 py-5">
            <Container className="p-3 d-flex flex-column align-items-start">
                <Nav className="d-flex pb-3 mb-3 fw-semibold">
                    {contacts.map(item => (
                        <Nav.Item key={item.id} className='ps-3'>
                            <Nav.Link>{item.title}</Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
                <Row>
                    <Col>
                        <Navbar.Text className='fw-semibold'>شبکه های اجتماعی: </Navbar.Text>
                        {brands.map(item => (
                            <Navbar.Brand key={item.id}>
                                <item.icon />
                            </Navbar.Brand>
                        ))}
                    </Col>
                </Row>
                <p className="text-center text-body-secondary pt-4">© 2023</p>
            </Container>
        </Navbar>
    )
}

export default Footer