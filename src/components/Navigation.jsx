import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation(){
    return (
        <div className='my-4 border-bottom border-2'>
            <Container className='mb-3'>
                <Navbar expand="lg">
                    <div className='container-fluid'>
                        <Navbar.Toggle aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="align-items-center fw-semibold">
                                <Nav.Item >
                                    <Button variant='primary'>
                                        <Link className='text-white' to="/login">ورود  |  عضویت</Link>
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

export default Navigation