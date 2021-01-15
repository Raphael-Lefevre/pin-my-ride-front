/* eslint-disable no-console */
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
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
import { API_URL } from '../env';
import UserContext from '../UserContext';

function Login() {
  const [password, setPassword] = useState('');
  const { tokenJwt, setTokenJwt, email, setEmail } = useContext(UserContext);
  console.log(tokenJwt);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setTokenJwt(localStorage.getItem('token'));
    }
  }, []);

  const handleSubmit = (e) => {
    const datas = {
      email,
      password,
    };
    console.log(email);

    e.preventDefault();
    axios
      .post(`${API_URL}/login`, datas)
      .then((response) => {
        setTokenJwt(response.data.token);
        localStorage.setItem('token', response.data.token);
        axios.interceptors.request.use(
          (config) => {
            const { origin } = new URL(config.url);
            const allowedOrigins = ['http://localhost:5000'];
            const token = localStorage.getItem('token');
            if (allowedOrigins.includes(origin)) {
              // eslint-disable-next-line no-param-reassign
              config.headers.authorization = `Bearer ${token}`;
            }
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              <Form method="post" onSubmit={(e) => handleSubmit(e)}>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" /> Se souvenir de moi
                  </Label>
                </FormGroup>
                <hr className="my-2" />
                <FormGroup>
                  <Button type="submit" color="info">
                    S&apos;identifier
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }} className="mt-4">
          <Card body className="mb-4">
            <CardText>
              Vous n&apos;avez pas encore de compte? N&apos;attendez plus,
              créez-le vôtre!
            </CardText>
            <p>
              <a href="/signin">S&apos;inscrire</a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
