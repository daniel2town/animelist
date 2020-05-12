import React from "react";

import { Card, Col, Row } from "antd";
import ReadMoreReact from "read-more-react";

function card({ data }) {
  return (
    <div className="cards">
      <Row gutter={[16, 16]}>
        {data &&
          data.map((anime) => (
            <Col span={4}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="anime" src={anime.image_url} />}
                title={anime.title}
              >
                <ReadMoreReact
                  text={anime.synopsis}
                  min={80}
                  ideal={100}
                  max={200}
                  readMoreText="Read more..."
                />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default card;
