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
import './App.css';

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
              <CardTitle tag="h5">LOGIN</CardTitle>
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
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder=""
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Remember me
                  </Label>
                </FormGroup>
                <hr className="my-2" />
                <FormGroup>
                  <Button color="info">Log in</Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }} className="mt-4">
          <Card body>
            <CardText>
              Vous n&apos;avez pas encore de compte? N&apos;attendez plus
              créez-le vôtre!
            </CardText>
            <p>
              <a href="/">Sign in</a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
