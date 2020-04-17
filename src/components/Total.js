import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Col, Row, Statistic, Typography } from 'antd';

function Total() {
    const [total, setTotal] = useState([]);
    const [cardLoading, setCardLoading] = useState(false)

    const { Title } = Typography;

    useEffect(() => {
        const covidURLtotal = `https://covidtracking.com/api/v1/us/current.json`
        const fetchData = async () => {
            try {
                setCardLoading(true)
                const response = await axios.get(covidURLtotal)
                const data = response.data[0]
                setTotal(data)
            } catch (error) {
                console.error(error)
                
            } finally {
                setCardLoading(false)
            }
        }
        fetchData()
    }, [])

    const {positive, recovered, death} = total

    return (
        
        <div className="site-card-border-less-wrapper">
        <Title>Covid-19 Stats (USA)</Title>
        <Title level={4}>Updated Daily</Title>
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Card title="Confirmed" bordered={false} hoverable={true} headStyle={{color: 'blue'}} loading={cardLoading}>
        <Statistic value={positive} />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Card title="Deaths" bordered={false} hoverable={true} headStyle={{color: 'red'}} loading={cardLoading}>
        <Statistic value={death} />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8}>
        <Card title="Recovered" bordered={false} hoverable={true} headStyle={{color: 'green'}} loading={cardLoading}>
        <Statistic value={recovered} />
        </Card>
      </Col>
    </Row>
  </div>
    )
}

export default Total
