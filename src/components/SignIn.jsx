import {
  Container,
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

const SignIn = () => {
  return (
    <Container>
      <Row>
        <Col sm="12" className="d-flex justify-content-center mt-4">
          <h1>Pin My Ride!</h1>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }} className="mt-4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">S&apos;INSCRIRE</CardTitle>
              <Form>
                <FormGroup>
                  <Label for="exampleUserFirstname">Prénom</Label>
                  <Input
                    type="UserFirstname"
                    name="UserFirstname"
                    id="exampleUserFirstname"
                    placeholder=""
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleUserLastname">Nom</Label>
                  <Input
                    type="UserLastname"
                    name="UserLastname"
                    id="exampleUserLastname"
                    placeholder=""
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder=""
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Nous ne partagerons votre e-mail avec personne.
                  </small>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Mot de passe</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder=""
                  />
                  <small
                    id="passwordHelpBlock"
                    className="form-text text-muted"
                  >
                    Votre mot de passe doit contenir entre 8 et 20 caractères et
                    contenir des lettres et les nombres.
                  </small>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Confirmation mot de passe</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder=""
                  />
                </FormGroup>
                <hr className="my-2" />
                <FormGroup>
                  <Button tag={Link} to="/user" color="info">
                    S&apos;inscrire
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
