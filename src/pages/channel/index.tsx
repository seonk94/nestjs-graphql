import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoomCard from 'src/components/atoms/RoomCard';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  color: cyan;
  font-size: 3em;
  letter-spacing: 0.1em;
`;
function Channel() {
  const arr = Array.from({ length: 20 }, (_, i) => i);
  return (
    <Container>
      <Title>Select Room</Title>
      <Row>
        {arr.map((i) => (
          <Col key={i} xs={6} md={4}>
            <RoomCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Channel;
