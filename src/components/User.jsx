import {
  Button,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardImgOverlay,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import './User.css';

const User = () => {
  const [ride, setRide] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/api/v0/rides/').then((responses) => {
      const newRide = responses.data;
      setRide(newRide);
    });
  }, []);

  console.log(ride);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col sm="12" className="text-center mt-4">
          <Button color="info" tag={Link} to="/addride">
            Ajouter un nouveau ride
          </Button>
        </Col>
        <Col md="6">
          <div className=" opacity mt-4">
            <Link to="/ridemap">
              <Card inverse>
                <CardImg
                  width="100%"
                  src="https://image.newyorkcity.fr/wp-content/uploads/2012/09/Times-Square-in-New-York.jpg"
                  alt="Card image ride1"
                />
                <CardImgOverlay>
                  <CardTitle tag="h5">Ride 1</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Link>
          </div>
          <div className="mt-4">
            <Link to="/ride2map">
              <Card inverse>
                <CardImg
                  width="100%"
                  src="https://sete.toureiffel.paris/themes/custom/tour_eiffel/img/societe-d-exploitation-de-la-tour-eiffel-accueil.jpg"
                  alt="Card image ride"
                />
                <CardImgOverlay>
                  <CardTitle tag="h5">Ride 3</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Link>
          </div>
        </Col>
        <Col md="6">
          <div className="mt-4">
            <Link to="/ride2map">
              <Card inverse>
                <CardImg
                  width="100%"
                  src="https://sete.toureiffel.paris/themes/custom/tour_eiffel/img/societe-d-exploitation-de-la-tour-eiffel-accueil.jpg"
                  alt="Card image ride"
                />
                <CardImgOverlay>
                  <CardTitle tag="h5">Ride 3</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Link>
          </div>
          <div className=" opacity mt-4">
            <Link to="/ridemap">
              <Card inverse>
                <CardImg
                  width="100%"
                  src="https://image.newyorkcity.fr/wp-content/uploads/2012/09/Times-Square-in-New-York.jpg"
                  alt="Card image ride1"
                />
                <CardImgOverlay>
                  <CardTitle tag="h5">Ride 1</CardTitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </CardText>
                </CardImgOverlay>
              </Card>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
