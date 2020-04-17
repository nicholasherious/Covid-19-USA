import React from 'react';
import { Descriptions } from 'antd';
import { Row, Col } from 'antd';

function List({ res }) {
  return (
    <Row gutter={[2, 26]}>
      <Col span={24}>
      <Descriptions bordered title={res.state}>
          <Descriptions.Item label="Confirmed">{res.positive}</Descriptions.Item>
          <Descriptions.Item label="Deaths">{res.death}</Descriptions.Item>
          <Descriptions.Item label="Recovered">{res.recovered}</Descriptions.Item>
          <Descriptions.Item label="Hospitalized">{res.hospitalized}</Descriptions.Item>
          <Descriptions.Item label="Tested">{res.total}</Descriptions.Item>
          <Descriptions.Item label="Date">{res.dateModified}</Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  );
}

export default List;
