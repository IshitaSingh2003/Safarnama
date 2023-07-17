import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const App = () => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [transferWithinCity, setTransferWithinCity] = useState('');
  const [transferToDestination, setTransferToDestination] = useState('');
  const [stayDays, setStayDays] = useState('');
  const [purpose, setPurpose] = useState('');
  const [interests, setInterests] = useState('');
  const [foodChoices, setFoodChoices] = useState('');
  const [localGuide, setLocalGuide] = useState('');
  const [localGuideContact, setLocalGuideContact] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process form submission and handle the user inputs
    // ...
  };

  return (
    <Container>
      <h1>Travel Planner</h1>
      <Form onSubmit={handleFormSubmit}>
        {/* From City */}
        <Form.Group controlId="fromCity">
          <Form.Label>From City</Form.Label>
          <Form.Control
            as="select"
            value={fromCity}
            onChange={(e) => setFromCity(e.target.value)}
            required
          >
            <option value="">Select From City</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Agra">Agra</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Ahemdabad">Ahemdabad</option>
            <option value="Pune">Pune</option>
            <option value="Goa">Goa</option>
            <option value="Darjling">Darjling</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mahabalipuram">Mahabalipuram</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Mysore">Mysore</option>
            <option value="Bangalore">Bangalore</option>
          </Form.Control>
        </Form.Group>

        {/* To City */}
        <Form.Group controlId="toCity">
          <Form.Label>To City</Form.Label>
          <Form.Control
            as="select"
            value={toCity}
            onChange={(e) => setToCity(e.target.value)}
            required
          >
            <option value="">Select To City</option>
            <option value="Udaipur">Udaipur</option>
            <option value="Jaisalmer">Jaisalmer</option>
            <option value="Delhi">Delhi</option>
            <option value="Agra">Agra</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Goa">Goa</option>
            <option value="Darjeeling">Darjeeling</option>
            <option value="Puri">Puri</option>
            <option value="Mahabalipuram">Mahabalipuram</option>
            <option value="Pondicherry">Pondicherry</option>
            <option value="Mysore">Mysore</option>
          </Form.Control>
        </Form.Group>

        {/* Mode of Transfer Within City */}
        <Form.Group controlId="transferWithinCity">
          <Form.Label>Mode of Transfer Within City</Form.Label>
          <Form.Control
            as="select"
            value={transferWithinCity}
            onChange={(e) => setTransferWithinCity(e.target.value)}
            required
          >
            <option value="">Select Mode of Transfer</option>
            <option value="metro">Metro</option>
            <option value="local">Local</option>
            <option value="car">Car</option>
          </Form.Control>
        </Form.Group>

        {/* Mode of Transfer to Destination */}
        <Form.Group controlId="transferToDestination">
          <Form.Label>Mode of Transfer to Destination</Form.Label>
          <Form.Control
            as="select"
            value={transferToDestination}
            onChange={(e) => setTransferToDestination(e.target.value)}
            required
          >
            <option value="">Select Mode of Transfer</option>
            <option value="flight">Flight</option>
            <option value="train">Train</option>
            <option value="car">Car</option>
            <option value="bus">Bus</option>
          </Form.Control>
        </Form.Group>

        {/* No. of Stay Days */}
        <Form.Group controlId="stayDays">
          <Form.Label>No. of Stay Days</Form.Label>
          <Form.Control
            type="number"
            value={stayDays}
            onChange={(e) => setStayDays(e.target.value)}
            required
          />
        </Form.Group>

        {/* Purpose */}
        <Form.Group controlId="purpose">
          <Form.Label>Purpose</Form.Label>
          <Form.Control
            as="select"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            required
          >
            <option value="">Select Purpose</option>
            <option value="business">Business</option>
            <option value="vacation">Vacation</option>
          </Form.Control>
        </Form.Group>

        {/* Interests */}
        <Form.Group controlId="interests">
          <Form.Label>Interests</Form.Label>
          <Form.Control
            as="select"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          >
            <option value="">Select Interests</option>
            <option value="historical">Historical</option>
            <option value="art">Art</option>
            <option value="religious">Religious</option>
            <option value="adventure">Adventure</option>
          </Form.Control>
        </Form.Group>

        {/* Food Choices */}
        <Form.Group controlId="foodChoices">
          <Form.Label>Food Choices</Form.Label>
          <Form.Control
            as="select"
            value={foodChoices}
            onChange={(e) => setFoodChoices(e.target.value)}
            required
          >
            <option value="">Select Food Choices</option>
            <option value="local">Local</option>
            <option value="street">Street</option>
            <option value="5-star">5 Star Restaurant</option>
          </Form.Control>
        </Form.Group>

        {/* Local Guide */}
        <Form.Group controlId="localGuide">
          <Form.Label>Local // ...

{/* Local Guide */}
<Form.Group controlId="localGuide">
  <Form.Label>Local Guide</Form.Label>
  <Form.Control
    as="select"
    value={localGuide}
    onChange={(e) => setLocalGuide(e.target.value)}
    required
  >
    <option value="">Select Local Guide</option>
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </Form.Control>
</Form.Group>

{/* Local Guide Contact */}
{localGuide === 'yes' && (
  <Form.Group controlId="localGuideContact">
    <Form.Label>Local Guide Contact</Form.Label>
    <Form.Control
      type="text"
      value={localGuideContact}
      onChange={(e) => setLocalGuideContact(e.target.value)}
      required
    />
  </Form.Group>
)}

{/* Submit Button */}
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
</Container>
);
};

export default App;

