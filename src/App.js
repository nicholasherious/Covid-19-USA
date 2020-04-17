import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Listing from './components/Listing';
import { Row, Col } from 'antd';
import Total from './components/Total';

function App() {
  const [covidResults, setCovidResults] = useState([]);

  useEffect(() => {
    const covidAPI = `https://covidtracking.com/api/v1/states/current.json`;
    const fetchData = async () => {
      try {
        const response = await axios.get(covidAPI);
        setCovidResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Row>
    <Col xs={2} sm={2} md={2} lg={2} xl={2}>
      
    </Col>
    <Col xs={20} sm={20} md={20} lg={20} xl={20}>
        <Total />
        <br />
        <Listing covidResults={covidResults} />
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2}>
      
    </Col>
    </Row>
  );
}

export default App;
