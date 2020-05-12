import React from "react";

import { Card, Col, Row, Typography } from "antd";

const { Paragraph } = Typography

function card({ data }) {
  return (
    <div className="cards">
      <Row gutter={[16, 16]}>
        {data.map((anime) => (
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="anime" src={anime.image_url} />}
                title={anime.title}
              >
                <Paragraph ellipsis={{ row: 3, expandable: 'true' }}>
                  {anime.synopsis}
                </Paragraph>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default card;
