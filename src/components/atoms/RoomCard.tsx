import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';

const CustomCard = styled(Card)`
  margin: 8px 0px;
`;

function RoomCard() {
  return (
    <CustomCard>
      <Card.Body>
        <Card.Title>room name</Card.Title>
        <Card.Text>room onwer</Card.Text>
        <Button variant="primary">Enter</Button>
      </Card.Body>
    </CustomCard>
  );
}
export default RoomCard;
