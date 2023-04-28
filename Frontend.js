import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const TravelForm = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('low');
  const [transportMode, setTransportMode] = useState('car');
  const [accommodationType, setAccommodationType] = useState('hotel');
  const [travelPurpose, setTravelPurpose] = useState('vacation');
  const [foodChoices, setFoodChoices] = useState([]);
  const [culturalInterests, setCulturalInterests] = useState([]);
  const [makeLocalFriends, setMakeLocalFriends] = useState(false);
  const [needTravelBuddy, setNeedTravelBuddy] = useState(false);
  const [plans, setPlans] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      startDate,
      endDate,
      budget,
      transportMode,
      accommodationType,
      travelPurpose,
      foodChoices,
      culturalInterests,
      makeLocalFriends,
      needTravelBuddy,
    };
    axios.post('/api/travel-plans', data)
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="startDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="endDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="budget">
        <Form.Label>Budget</Form.Label>
        <Form.Control
          as="select"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
        >
          <option value="low">Low</option>
          <option value="average">Average</option>
          <option value="high">High</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="transportMode">
        <Form.Label>Transport Mode</Form.Label>
        <Form.Control
          as="select"
          value={transportMode}
          onChange={(event) => setTransportMode(event.target.value)}
        >
          <option value="car">Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="plane">Plane</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="accommodationType">
        <Form.Label>Accommodation Type</Form.Label>
        <Form.Control
          as="select"
          value={accommodationType}
          onChange={(event) => setAccommodationType(event.target.value)}
        >
          <option value="hotel">Hotel</option>
          <option value="apartment">Apartment</option>
          <option value="hostel">Hostel
          <option value="camping">Camping</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="travelPurpose">
    <Form.Label>Travel Purpose</Form.Label>
    <Form.Control
      as="select"
      value={travelPurpose}
      onChange={(event) => setTravelPurpose(event.target.value)}
    >
      <option value="vacation">Vacation</option>
      <option value="business">Business</option>
      <option value="education">Education</option>
      <option value="adventure">Adventure</option>
      <option value="romance">Romance</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="foodChoices">
    <Form.Label>Food Choices</Form.Label>
    <Form.Check
      type="checkbox"
      label="Vegetarian"
      checked={foodChoices.includes('vegetarian')}
      onChange={(event) => {
        if (event.target.checked) {
          setFoodChoices([...foodChoices, 'vegetarian']);
        } else {
          setFoodChoices(foodChoices.filter((choice) => choice !== 'vegetarian'));
        }
      }}
    />
    <Form.Check
      type="checkbox"
      label="Vegan"
      checked={foodChoices.includes('vegan')}
      onChange={(event) => {
        if (event.target.checked) {
          setFoodChoices([...foodChoices, 'vegan']);
        } else {
          setFoodChoices(foodChoices.filter((choice) => choice !== 'vegan'));
        }
      }}
    />
    <Form.Check
      type="checkbox"
      label="Gluten-free"
      checked={foodChoices.includes('gluten-free')}
      onChange={(event) => {
        if (event.target.checked) {
          setFoodChoices([...foodChoices, 'gluten-free']);
        } else {
          setFoodChoices(foodChoices.filter((choice) => choice !== 'gluten-free'));
        }
      }}
    />
  </Form.Group>
  <Form.Group controlId="culturalInterests">
    <Form.Label>Cultural Interests</Form.Label>
    <Form.Check
      type="checkbox"
      label="Museums"
      checked={culturalInterests.includes('museums')}
      onChange={(event) => {
        if (event.target.checked) {
          setCulturalInterests([...culturalInterests, 'museums']);
        } else {
          setCulturalInterests(culturalInterests.filter((interest) => interest !== 'museums'));
        }
      }}
    />
    <Form.Check
      type="checkbox"
      label="Historical Sites"
      checked={culturalInterests.includes('historical-sites')}
      onChange={(event) => {
        if (event.target.checked) {
          setCulturalInterests([...culturalInterests, 'historical-sites']);
        } else {
          setCulturalInterests(culturalInterests.filter((interest) => interest !== 'historical-sites'));
        }
      }}
    />
    <Form.Check
      type="checkbox"
      label="Art Galleries"
      checked={culturalInterests.includes('art-galleries')}
      onChange={(event) => {
        if (event.target.checked) {
          setCulturalInterests([...culturalInterests, 'art-galleries']);
        } else {
          setCulturalInterests(culturalInterests.filter((interest) => interest !== 'art-galleries'));
        }
      }}
    />
  </Form.Group>
  <Form.Group controlId="makeLocalFriends">
    <Form.Check
      type="checkbox"
      label="Make Local Friends"
      checked={makeLocalFriends}
      onChange={(event) => setMakeLocalFriends(event.target.checked)}
        />
      </Form.Group>
      <Form.Group controlId="needTravelBuddy">
        <Form.Check
          type="checkbox"
          label="Need Travel Buddy"
          checked={needTravelBuddy}
          onChange={(event) => setNeedTravelBuddy(event.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TravelForm; 

// In the main component, you can render the form and handle the submission as follows:

import React, { useState } from 'react';
import TravelForm from './TravelForm';

const MainComponent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('low');
  const [transportationMode, setTransportationMode] = useState('flight');
  const [accommodationType, setAccommodationType] = useState('hotel');
  const [travelPurpose, setTravelPurpose] = useState('vacation');
  const [foodChoices, setFoodChoices] = useState([]);
  const [culturalInterests, setCulturalInterests] = useState([]);
  const [makeLocalFriends, setMakeLocalFriends] = useState(false);
  const [needTravelBuddy, setNeedTravelBuddy] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can make an API call to your backend server and pass the form data
    // to get the suggested travel plans
    console.log('Form submitted');
  };

  return (
    <div>
      <h1>Travel Planner</h1>
      <TravelForm
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        budget={budget}
        setBudget={setBudget}
        transportationMode={transportationMode}
        setTransportationMode={setTransportationMode}
        accommodationType={accommodationType}
        setAccommodationType={setAccommodationType}
        travelPurpose={travelPurpose}
        setTravelPurpose={setTravelPurpose}
        foodChoices={foodChoices}
        setFoodChoices={setFoodChoices}
        culturalInterests={culturalInterests}
        setCulturalInterests={setCulturalInterests}
        makeLocalFriends={makeLocalFriends}
        setMakeLocalFriends={setMakeLocalFriends}
        needTravelBuddy={needTravelBuddy}
        setNeedTravelBuddy={setNeedTravelBuddy}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MainComponent; 

// After receiving the suggested travel plans from the backend, you can render them in a new component as follows:

import React from 'react';

const TravelPlans = ({ plans }) => {
  return (
    <div>
      <h2>Travel Plans</h2>
      {plans.map((plan) => (
        <div key={plan.id}>
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
          <ul>
            {plan.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <p>Price: {plan.price}</p>
          <button>Select Plan</button>
        </div>
      ))}
    </div>
  );
};

export default TravelPlans;
// In the MainComponent, you can render the TravelPlans component after receiving the suggested plans as follows:

import React, { useState } from 'react';
import TravelForm from './TravelForm';
import TravelPlans from './TravelPlans';

const MainComponent = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('low');
  const [transportationMode, setTransportationMode] = useState('flight');
  const [accommodationType, setAccommodationType] = useState('hotel');
  const [travelPurpose, setTravelPurpose] = useState('vacation');
  const [foodChoices, setFoodChoices] = useState([]);
  const [culturalInterests, setCulturalInterests] = useState([]);
  const [makeLocalFriends, setMakeLocalFriends] = useState(false);
  const [needTravelBuddy, setNeedTravelBuddy] = useState(false);
  const [suggestedPlans, setSuggestedPlans] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can make an API call to your backend server and pass the form data
    // to get the suggested travel plans
    // Example API call using fetch:
    fetch('/api/travel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate,
        endDate,
        budget,
        transportationMode,
        accommodationType,
        travelPurpose,
        foodChoices,
        culturalInterests,
        makeLocalFriends,
        needTravelBuddy,
      }),
    })
      .then((response) => response.json())
      .then((data) => setSuggestedPlans(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Travel Planner</h1>
      <TravelForm
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        budget={budget}
        setBudget={setBudget}
        transportationMode={transportationMode}
        setTransportationMode={setTransportationMode}
        accommodationType={accommodationType}
        setAccommodationType={setAccommodationType}
        travelPurpose={travelPurpose}
        setTravelPurpose={setTravelPurpose}
        foodChoices={foodChoices}
        setFoodChoices={setFoodChoices}
        culturalInterests={culturalInterests}
        setCulturalInterests={setCulturalInterests}
        makeLocalFriends={makeLocalFriends}
        setMakeLocalFriends={setMakeLocalFriends}
        needTravelBuddy={needTravelBuddy}
        setNeedTravelBuddy={setNeedTravelBuddy}
        handleSubmit={handleSubmit}
      />
      {suggestedPlans.length > 0 && <TravelPlans plans={suggestedPlans} />}
    </div>
  );
};

export default MainComponent; 

