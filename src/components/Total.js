import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Col, Row, Statistic, Typography } from 'antd';

function Total() {
    const [total, setTotal] = useState([]);

    const { Title } = Typography;

    useEffect(() => {
        const covidURLtotal = `https://covidtracking.com/api/v1/us/current.json`
        const fetchData = async () => {
            try {
                const response = await axios.get(covidURLtotal)
                const data = response.data[0]
                setTotal(data)
            } catch (error) {
                console.error(error)
                
            }
        }
        fetchData()
    }, [])

    const {positive, recovered, death} = total

    return (
        
        <div className="site-card-border-less-wrapper">
        <Title>Covid-19 Stats (USA)</Title>
        <Title level={4}>Updated Daily</Title>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Confirmed" bordered={false}>
        <Statistic value={positive} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Deaths" bordered={false}>
        <Statistic value={death} />
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Recovered" bordered={false}>
        <Statistic value={recovered} />
        </Card>
      </Col>
    </Row>
  </div>
    )
}

export default Total
