// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      darkMode
      friends {
        items {
          id
          name
        }
        nextToken
      }
      sharedFiles {
        items {
          id
        }
        nextToken
      }
      mySharedFiles {
        items {
          path
        }
        nextToken
      }
      toPetition {
        id
        processed
        to {
          id
          name
          darkMode
        }
        from {
          id
          name
          darkMode
        }
      }
      fromPetition {
        id
        processed
        to {
          id
          name
          darkMode
        }
        from {
          id
          name
          darkMode
        }
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      darkMode
      friends {
        items {
          id
          name
        }
        nextToken
      }
      sharedFiles {
        items {
          id
        }
        nextToken
      }
      mySharedFiles {
        items {
          path
        }
        nextToken
      }
      toPetition {
        id
        processed
        to {
          id
          name
          darkMode
        }
        from {
          id
          name
          darkMode
        }
      }
      fromPetition {
        id
        processed
        to {
          id
          name
          darkMode
        }
        from {
          id
          name
          darkMode
        }
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      darkMode
      friends {
        items {
          id
          name
        }
        nextToken
      }
      sharedFiles {
        items {
          id
        }
        nextToken
      }
      mySharedFiles {
        items {
          path
        }
        nextToken
      }
      toPetition {
        id
        processed
        to {
          id
          name
          darkMode
        }
        from {
          id
          name
          darkMode
        }
      }
      fromPetition {
        id
        processed
        to {
          id
          name
          darkMode
        }
        from {
          id
          name
          darkMode
        }
      }
    }
  }
`;
export const createFriend = /* GraphQL */ `
  mutation CreateFriend(
    $input: CreateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    createFriend(input: $input, condition: $condition) {
      id
      name
    }
  }
`;
export const updateFriend = /* GraphQL */ `
  mutation UpdateFriend(
    $input: UpdateFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    updateFriend(input: $input, condition: $condition) {
      id
      name
    }
  }
`;
export const deleteFriend = /* GraphQL */ `
  mutation DeleteFriend(
    $input: DeleteFriendInput!
    $condition: ModelFriendConditionInput
  ) {
    deleteFriend(input: $input, condition: $condition) {
      id
      name
    }
  }
`;
export const createFriendRequest = /* GraphQL */ `
  mutation CreateFriendRequest(
    $input: CreateFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    createFriendRequest(input: $input, condition: $condition) {
      id
      processed
      to {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
      from {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
    }
  }
`;
export const updateFriendRequest = /* GraphQL */ `
  mutation UpdateFriendRequest(
    $input: UpdateFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    updateFriendRequest(input: $input, condition: $condition) {
      id
      processed
      to {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
      from {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
    }
  }
`;
export const deleteFriendRequest = /* GraphQL */ `
  mutation DeleteFriendRequest(
    $input: DeleteFriendRequestInput!
    $condition: ModelFriendRequestConditionInput
  ) {
    deleteFriendRequest(input: $input, condition: $condition) {
      id
      processed
      to {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
      from {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
    }
  }
`;
export const createSharedFile = /* GraphQL */ `
  mutation CreateSharedFile(
    $input: CreateSharedFileInput!
    $condition: ModelSharedFileConditionInput
  ) {
    createSharedFile(input: $input, condition: $condition) {
      path
      owner {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
      Sharers {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const updateSharedFile = /* GraphQL */ `
  mutation UpdateSharedFile(
    $input: UpdateSharedFileInput!
    $condition: ModelSharedFileConditionInput
  ) {
    updateSharedFile(input: $input, condition: $condition) {
      path
      owner {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
      Sharers {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const deleteSharedFile = /* GraphQL */ `
  mutation DeleteSharedFile(
    $input: DeleteSharedFileInput!
    $condition: ModelSharedFileConditionInput
  ) {
    deleteSharedFile(input: $input, condition: $condition) {
      path
      owner {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
      Sharers {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const createSharedFileToUser = /* GraphQL */ `
  mutation CreateSharedFileToUser(
    $input: CreateSharedFileToUserInput!
    $condition: ModelSharedFileToUserConditionInput
  ) {
    createSharedFileToUser(input: $input, condition: $condition) {
      id
      sharedFile {
        path
        owner {
          id
          name
          darkMode
        }
        Sharers {
          nextToken
        }
      }
      sharer {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
    }
  }
`;
export const updateSharedFileToUser = /* GraphQL */ `
  mutation UpdateSharedFileToUser(
    $input: UpdateSharedFileToUserInput!
    $condition: ModelSharedFileToUserConditionInput
  ) {
    updateSharedFileToUser(input: $input, condition: $condition) {
      id
      sharedFile {
        path
        owner {
          id
          name
          darkMode
        }
        Sharers {
          nextToken
        }
      }
      sharer {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
    }
  }
`;
export const deleteSharedFileToUser = /* GraphQL */ `
  mutation DeleteSharedFileToUser(
    $input: DeleteSharedFileToUserInput!
    $condition: ModelSharedFileToUserConditionInput
  ) {
    deleteSharedFileToUser(input: $input, condition: $condition) {
      id
      sharedFile {
        path
        owner {
          id
          name
          darkMode
        }
        Sharers {
          nextToken
        }
      }
      sharer {
        id
        name
        darkMode
        friends {
          nextToken
        }
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          id
          processed
        }
        fromPetition {
          id
          processed
        }
      }
    }
  }
`;
