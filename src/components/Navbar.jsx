import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResponsiveNavbar = () => {
    return (
        <div className='mt-5'>
            <Container>
                <Navbar expand="lg">
                    <div className='container-fluid'>
                        <Navbar.Toggle aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="align-items-center fw-semibold">
                                <Nav.Item >
                                    <Button variant='primary'>
                                        <Link className='text-white' to="/login">حساب کاربری</Link>
                                    </Button>
                                </Nav.Item>
                                <Nav.Item className='px-5'>دوره های آموزشی</Nav.Item>
                                <Nav.Item >صفحه اصلی</Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Brand href="/">پلتفرم آموزش آنلاین</Navbar.Brand>
                    </div>
                </Navbar>
            </Container>
        </div>
    )
}

export default ResponsiveNavbar