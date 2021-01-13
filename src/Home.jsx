import {
  Container,
  CardText,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm="12" className="d-flex justify-content-center mt-4">
          <h1>Pin My Ride!</h1>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }} className="mt-4">
          <Card>
            <CardBody>
              <CardTitle tag="h5">S&apos;IDENTIFIER</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder=""
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Mot de passe</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder=""
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Se souvenir de moi
                  </Label>
                </FormGroup>
                <hr className="my-2" />
                <FormGroup>
                  <Button tag={Link} to="/user" color="info">
                    S&apos;identifier
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }} className="mt-4">
          <Card body>
            <CardText>
              Vous n&apos;avez pas encore de compte? N&apos;attendez plus,
              créez-le vôtre!
            </CardText>
            <p>
              <a href="/signin">Se connecter</a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
