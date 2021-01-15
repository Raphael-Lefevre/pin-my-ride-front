import axios from 'axios';
import { useState, useContext } from 'react';
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
import { API_URL } from '../env';
import UserContext from '../UserContext';

const initialValues = {
  label: '',
  summary: '',
  lat: '',
  long: '',
  user_id: '',
};

const AddRide = () => {
  const [values, setValues] = useState(initialValues);
  const { user } = useContext(UserContext);

  console.log(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log({ setValues });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URL}/rides`, { setValues })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <Row>
        <Col sm="12" className="d-flex justify-content-center mt-4">
          <h1>Pin My Ride!</h1>
        </Col>
        <Col sm="12" md={{ size: 8, offset: 2 }} className="mt-4">
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Créer un nouveau ride</CardTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="exampleRideLabel">Nom</Label>
                  <Input
                    type="Label"
                    name="label"
                    id="exampleRideLabel"
                    placeholder=""
                    value={values.label}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Description</Label>
                  <Input
                    type="textarea"
                    name="summary"
                    id="exampleText"
                    value={values.summary}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleSelect">Ville de départ</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </FormGroup>
                <hr className="my-2" />
                <FormGroup>
                  <Button color="info">Créer</Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddRide;
