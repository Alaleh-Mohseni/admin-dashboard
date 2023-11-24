import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import { coursesList } from '@data/items';


function CardItems() {
    return (
        <Container className="my-5">
            <h2 className='fw-semibold fs-4 py-3'>دوره های آموزشی</h2>
            <Row>
                {coursesList.map(item => (
                    <Col key={item.id}>
                        <Card className='border-0 shadow-sm' style={{ minWidth: '18rem', margin: '20px' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title className='fw-semibold text-capitalize pb-2'>{item.title}</Card.Title>
                                <Card.Text>{item.des}</Card.Text>
                                <div className='d-flex justify-content-between align-items-center pt-5 course'>
                                    <Card.Text className='price fw-semibold'>
                                        {Number(item.price).toLocaleString('fa-IR')} تومان
                                    </Card.Text>
                                    <Card.Text>
                                        <Link>مشاهده دوره <FaArrowLeft /></Link>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default CardItems