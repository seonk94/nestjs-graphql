import { useQuery } from '@apollo/client';
import React from 'react';
import {
  Container, Row, Col, 
} from 'react-bootstrap';
import RoomCard from 'src/components/atoms/RoomCard';
import { GET_ROOMS, GetRoomsResponse } from 'src/graphql/room';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  color: cyan;
  font-size: 3em;
  letter-spacing: 0.1em;
`;
function Channel() {
  const { data } = useQuery<GetRoomsResponse>(GET_ROOMS);
  

  return (
    <Container>
      <Title>Select Room</Title>
      <Row>
        {data?.rooms.map((room) => (
          <Col key={room._id} xs={6} md={4}>
            <RoomCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default Channel;
