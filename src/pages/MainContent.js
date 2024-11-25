import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import img1 from '../img/img (1).jpeg'
import img2 from '../img/img (2).jpeg'
import img3 from '../img/img (3).jpeg'
import img4 from '../img/img (4).jpeg'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 

const MainContent = () => (
  <>
    {/* Hero Section */}
    <section className="text-center p-5 text-light hero">
      <Container>
        <h1 className="hero-header">
          <b>Tamil Nadu's</b> Number 1<br />
          <b>Luxury & Wellness Destination</b>
        </h1>
        <p className="hero-para">Welcome to THE BOYZ...</p>
      </Container>
    </section>

    {/* Services Section */}
    <section className="text-center my-5 mx-2">
      <Container>
        <h2 className="mb-4">Our Services</h2>
        <Row className="mt-4">
          {/* Service 1 */}
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img src={img1} alt="Hotel" />
              <Card.Body>
                <Card.Title>Hotel</Card.Title>
                <Link to="/RoomSearch">
                  <Button variant="danger">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 2 */}
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img src={img2} alt="Spa" />
              <Card.Body>
                <Card.Title>Spa</Card.Title>
                <Link to="/SpaDetails">
                  <Button variant="danger">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 3 */}
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img src={img3} alt="Gym" />
              <Card.Body>
                <Card.Title>Gym</Card.Title>
                <Link to="/GymDetails">
                  <Button variant="danger">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Service 4 */}
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img src={img4} alt="Salon" />
              <Card.Body>
                <Card.Title>Salon</Card.Title>
                <Link to="/SalonDetails">
                  <Button variant="danger">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  </>
)

export default MainContent
