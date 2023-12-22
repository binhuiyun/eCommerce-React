import React from 'react';
import { Row, Col } from 'antd';

const ResponsiveFlexExample = () => {
  return (
    <div>
      <h1>Responsive Flex Example</h1>
      <Row gutter={16}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: '#69c0ff', padding: '16px', marginBottom: '16px' }}>
            Content 1
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: '#40a9ff', padding: '16px', marginBottom: '16px' }}>
            Content 2
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: '#1890ff', padding: '16px', marginBottom: '16px' }}>
            Content 3
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <div style={{ backgroundColor: '#096dd9', padding: '16px', marginBottom: '16px' }}>
            Content 4
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResponsiveFlexExample;
