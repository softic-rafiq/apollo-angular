import gql from 'graphql-tag';

export const REGISTER_USER = gql`
  mutation userRegister($username: String!, $email: String!, $mobile: String!) {
    createUser(
      userData: { username: $username, email: $email, mobile: $mobile }
    ) {
      user {
        id
        username
        email
        mobile
      }
    }
  }
`;
