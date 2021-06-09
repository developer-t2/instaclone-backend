import { gql } from 'apollo-server';

export default gql`
  type UpdateProfileResult {
    result: Boolean!
    error: String
  }

  type Mutation {
    updateProfile(
      firstName: String
      lastName: String
      userName: String
      email: String
      password: String
    ): UpdateProfileResult
  }
`;
