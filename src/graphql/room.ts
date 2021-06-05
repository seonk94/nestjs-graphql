import { gql } from '@apollo/client';

export type Room = {
  _id: string;
  name: string;
};

export type GetRoomsResponse = {
  rooms: Room[];
};

export const GET_ROOMS = gql`
  query GetRooms {
    rooms {
      _id
      name
    }
  }
`;