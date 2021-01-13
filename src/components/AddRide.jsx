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

const AddRide = () => {
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
              <Form>
                <FormGroup>
                  <Label for="exampleRideLabel">Nom</Label>
                  <Input
                    type="RideLabel"
                    name="RideLabel"
                    id="exampleRideLabel"
                    placeholder=""
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleText">Description</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Date de début</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleDate">Date de fin</Label>
                  <Input
                    type="date"
                    name="date"
                    id="exampleDate"
                    placeholder="date placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleCoordinates">
                    Coordonnées géo de départ
                  </Label>
                  <Input
                    type="Coordinates"
                    name="Coordinates"
                    id="exampleCoordinates"
                    placeholder=""
                  />
                </FormGroup>
                <hr className="my-2" />
                <FormGroup>
                  <Button tag={Link} to="/user" color="info">
                    Créer
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

export default AddRide;
