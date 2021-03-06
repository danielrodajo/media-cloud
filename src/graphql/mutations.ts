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
      sharedFiles {
        items {
          id
        }
        nextToken
      }
      mySharedFiles {
        items {
          id
          path
        }
        nextToken
      }
      toPetition {
        items {
          id
          type
          createdOn
        }
        nextToken
      }
      fromPetition {
        items {
          id
          type
          createdOn
        }
        nextToken
      }
      friends {
        items {
          id
        }
        nextToken
      }
      originalFriends {
        items {
          id
        }
        nextToken
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
      sharedFiles {
        items {
          id
        }
        nextToken
      }
      mySharedFiles {
        items {
          id
          path
        }
        nextToken
      }
      toPetition {
        items {
          id
          type
          createdOn
        }
        nextToken
      }
      fromPetition {
        items {
          id
          type
          createdOn
        }
        nextToken
      }
      friends {
        items {
          id
        }
        nextToken
      }
      originalFriends {
        items {
          id
        }
        nextToken
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
      sharedFiles {
        items {
          id
        }
        nextToken
      }
      mySharedFiles {
        items {
          id
          path
        }
        nextToken
      }
      toPetition {
        items {
          id
          type
          createdOn
        }
        nextToken
      }
      fromPetition {
        items {
          id
          type
          createdOn
        }
        nextToken
      }
      friends {
        items {
          id
        }
        nextToken
      }
      originalFriends {
        items {
          id
        }
        nextToken
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
      originalUser {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
      user {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
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
      originalUser {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
      user {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
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
      originalUser {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
      user {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
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
      type
      createdOn
      to {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
      from {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
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
      type
      createdOn
      to {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
      from {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
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
      type
      createdOn
      to {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
      from {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
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
      id
      path
      owner {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
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
      id
      path
      owner {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
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
      id
      path
      owner {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
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
        id
        path
        owner {
          id
          name
        }
        Sharers {
          nextToken
        }
      }
      sharer {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
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
        id
        path
        owner {
          id
          name
        }
        Sharers {
          nextToken
        }
      }
      sharer {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
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
        id
        path
        owner {
          id
          name
        }
        Sharers {
          nextToken
        }
      }
      sharer {
        id
        name
        sharedFiles {
          nextToken
        }
        mySharedFiles {
          nextToken
        }
        toPetition {
          nextToken
        }
        fromPetition {
          nextToken
        }
        friends {
          nextToken
        }
        originalFriends {
          nextToken
        }
      }
    }
  }
`;
