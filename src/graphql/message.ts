import { gql } from '@apollo/client';

export const MESSAGE_SUBSCRIPTION = gql`
  subscription SubMessage {
    subMindMessage {
      _id
      emoji
    }
  }
`;

export const MESSAGE_PUBLISH = gql`
  subscription PublishMessage($_id: String!, $emoji: String!) {
    pubMindMessage {
      _id
      emoji
    }
  }
`;
