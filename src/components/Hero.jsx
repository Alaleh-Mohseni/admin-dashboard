import { Container, Row, Col, Button } from "react-bootstrap";
import { FaAngleLeft, FaPencilAlt, FaWallet, FaVideo, FaPhone } from "react-icons/fa";
import heroImg from "@assets/images/LnBuZw.png";

const introduction = [
    {
        id: 1,
        title: 'یادگیری با تمرین و آزمون',
        icon: FaPencilAlt
    },
    {
        id: 2,
        title: 'ضمانت بازگشت وجه',
        icon: FaWallet
    },
    {
        id: 3,
        title: 'پشتیبانی دوره ها',
        icon: FaPhone
    },
    {
        id: 4,
        title: 'به روز رسانی رایگان',
        icon: FaVideo
    },
]

function Hero() {
    return (
        <div className="hero py-5">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero-content">
                            <h1 className="hero-h1">
                                داستان برنامه‌نویس شدنت از اینجا شروع میشه!
                            </h1>
                            <p className="hero-p">
                                برنامه نویسی را به ساده‌ترین زبان ممکن یاد بگیرید.
                            </p>

                            <Button variant='primary' className="btn-lg mb-3">
                                شروع یادگیری برنامه‌نویسی <FaAngleLeft />
                            </Button>

                            <Row className="my-5 introduction gy-4">
                                {introduction.map(item => (
                                    <Col lg={6} md={4} key={item.id} className="d-flex align-items-center">
                                        <item.icon />
                                        <span className="fw-bold">{item.title}</span>
                                    </Col>
                                ))}
                            </Row>

                        </div>
                    </Col>

                    <Col lg={6} md={6}>
                        <div className="hero-img">
                            <img src={heroImg} alt="nft hero" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hero;