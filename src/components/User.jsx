import {
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
import mountains from '../images/mountains.jpg';
// import './User.css';

const User = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md="6">
          <div className=" opacity mt-4">
            <Link to="/ride">
              <Card inverse>
                <CardImg width="100%" src={mountains} alt="Card image ride1" />
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
          <div className="mt-3">
            <Link to="/ride">
              <Card inverse>
                <CardImg width="100%" src={mountains} alt="Card image ride2" />
                <CardImgOverlay>
                  <CardTitle tag="h5">Ride 2</CardTitle>
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
            <Link to="/ride">
              <Card inverse>
                <CardImg width="100%" src={mountains} alt="Card image ride" />
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
          <div className="mt-3">
            <Link to="/ride">
              <Card inverse>
                <CardImg width="100%" src={mountains} alt="Card image ride" />
                <CardImgOverlay>
                  <CardTitle tag="h5">Ride 4</CardTitle>
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
