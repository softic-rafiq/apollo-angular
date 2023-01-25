import gql from 'graphql-tag';

export const GET_USERS = gql`
  query {
    getAllUsers {
      id
      username
      mobile
      email
    }
  }
`;
