import { gql } from '@apollo/client';

export type User = {
  _id: string;
  uid: string;
  name: string;
};

export type GetUserResponse = {
  user: User 
};

export const GET_USER_BY_UID = gql`
  query GetUser($uid: String) {
    user(uid: $uid) {
      _id
      uid
      name
    }
  }
`;

export type CreateUserResponse = {
  createUser: User;
};

export const CREATE_USER = gql`
  mutation CreateUser(
    $userInput: UserInput!,
  ) {
    createUser(
      userInput: $userInput,
    ) {
      _id
      uid
      name
    }
  }
`;

