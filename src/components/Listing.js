import React from 'react';
import List from './List';
import { Row, Col } from 'antd';

function Listing({ covidResults }) {
  return (
    <Row>
      <Col span={24}>
        {covidResults.map((res, index) => (
          <List key={index} res={res} />
        ))}
      </Col>
    </Row>
  );
}

export default Listing;
