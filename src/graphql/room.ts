import { gql } from '@apollo/client';

export type RoomStatusType = 'wait' | 'playing' | 'end';
export type Room = {
  _id: string;
  name: string;
  status: string;
  ownerUid: string;
  users: [];
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

export type CreateRoomResponse = {
  createRoom: Room
};

export const CREATE_ROOM = gql`
  mutation CreateRoom(
    $roomInput: RoomInput!,
  ) {
    createRoom(
      roomInput: $roomInput
    ) {
      _id
      name
      status
      ownerUid
    }
  }
`;