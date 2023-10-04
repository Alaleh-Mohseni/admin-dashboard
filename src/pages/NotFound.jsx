import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <Container>
            <Row className="vh-100 d-flex flex-column justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <div>
                        <div className="text-center">
                            <h3 className="display-1 fw-bold text-info">
                                404
                            </h3>
                            <p className="fs-5 fw-semibold parag">صفحه مورد نظر یافت نشد</p>
                            <p className="fs-5 fw-normal mt-3 mb-4 parag">
                                صفحه ای که در جستجوی آن هستید وجود
                                ندارد.{" "}
                            </p>
                            <Link
                                to="/"
                                className="btn btn-primary"
                            >
                                بازگشت به صفحه اصلی
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound