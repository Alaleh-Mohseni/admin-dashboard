import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@contexts/auth-provider';
import { auth } from '@config/firebase';
import { Container, Row, Col } from "react-bootstrap";
import { FaSignOutAlt, FaVideo, FaUserCircle } from "react-icons/fa";
import '@styles/profile.css'

function Profile() {
    const { logout, currentUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout(auth)
        navigate('/')
    }


    return (
        <div className="profile py-5">
            <Container className='pt-5'>
                <Row>
                    <Col lg="4" md="6">
                        <div>
                            <Row className="gy-4 ps-5">
                                <Col lg={12} md={4} className="profile-details">
                                    <FaVideo className='fs-2' />
                                    <span className="profile-details__text">دانلودها</span>
                                </Col>
                                <Col lg={12} md={4} className="profile-details">
                                    <FaUserCircle className='fs-2' />
                                    <span className="profile-details__text">جزئیات حساب</span>
                                </Col>
                                <Col lg={12} md={4} className="profile-details">
                                    <FaSignOutAlt onClick={handleLogout} className='fs-2' />
                                    <span className="profile-details__text">خروج از سیستم</span>
                                </Col>
                            </Row>

                        </div>
                    </Col>

                    <Col lg={8} md={6} className="bg-white rounded-2 px-2">
                        <div className="p-4">
                            <p>
                                سلام{' '}
                                <strong>{currentUser?.email}</strong>
                            </p>
                            <p>فایل‌های دوره‌هایی که ثبت نام کرده‌اید در قسمت دانلودها قرار دارد.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Profile