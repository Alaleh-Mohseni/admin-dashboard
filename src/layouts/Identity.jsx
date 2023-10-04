import { Col, Row, Container, Card } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function IdentityLayout() {
  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <div className="m-sm-4">
                <Outlet />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IdentityLayout