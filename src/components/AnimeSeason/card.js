import React from 'react';

import { Card, Col, Row } from 'antd';

const { Meta } = Card;

function card() {

  return (
    <div className="cards">
        <Row gutter={[16, 16]}>
            <Col span={4}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
            </Col>
        </Row>
    </div>
  );
}

export default card;