import gql from 'graphql-tag';

export const REGISTER_USER = gql`
  mutation createUser(
    $username: String!
    $email: String!
    $mobile: String!
    $password: String
  ) {
    createUser(
      input: {
        username: $username
        email: $email
        mobile: $mobile
        password: $password
      }
    ) {
      id
      username
      email
      mobile
    }
  }
`;
