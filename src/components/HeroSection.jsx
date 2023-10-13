import { Container, Row, Col, Button } from "react-bootstrap";
import { FaAngleLeft, FaPencilAlt, FaWallet, FaVideo, FaPhone } from "react-icons/fa";
import heroImg from "../assets/images/girl-laptop.png";

const HeroSection = () => {
    return (
        <div className="hero-section py-5">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero-section__content">
                            <h1 className="hero-section__h1">
                                داستان برنامه‌نویس شدنت از اینجا شروع میشه!
                            </h1>
                            <p className="hero-section__p">
                                برنامه نویسی را به ساده‌ترین زبان ممکن یاد بگیرید.
                            </p>

                            <Button variant='primary' className="btn-lg mb-3">
                                شروع یادگیری برنامه‌نویسی <FaAngleLeft />
                            </Button>

                            <Row className="my-5 introduction gy-4">
                                <Col lg={6} md={4} class="d-flex align-items-center">
                                    <FaPencilAlt />
                                    <span class="fw-bold">یادگیری با تمرین و آزمون</span>
                                </Col>
                                <Col lg={6} md={4} class="d-flex align-items-center">
                                    <FaWallet/>
                                    <span class="fw-bold mb-3">ضمانت بازگشت وجه</span>
                                </Col>
                                <Col lg={6} md={4} class="d-flex align-items-center">
                                    <FaPhone/>
                                    <span class="fw-bold">پشتیبانی دوره ها</span>
                                </Col>
                                <Col lg={6} md={4} class="d-flex align-items-center">
                                    <FaVideo/>
                                    <span class="fw-bold">به روز رسانی رایگان</span>
                                </Col>
                            </Row>

                        </div>
                    </Col>

                    <Col lg={6} md={6}>
                        <div className="hero-section__img">
                            <img src={heroImg} alt="nft hero" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;