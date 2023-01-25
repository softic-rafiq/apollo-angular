import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
  query CountryQuery {
    countries {
      code
      name
      phone
      currency
      capital
    }
  }
`;
