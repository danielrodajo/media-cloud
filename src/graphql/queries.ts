// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          path
        }
        nextToken
      }
      toPetition {
        items {
          id
        }
        nextToken
      }
      fromPetition {
        items {
          id
        }
        nextToken
      }
      friends {
        items {
          id
          name
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
    }
  }
`;
export const getFriend = /* GraphQL */ `
  query GetFriend($id: ID!) {
    getFriend(id: $id) {
      id
      name
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
      }
    }
  }
`;
export const listFriends = /* GraphQL */ `
  query ListFriends(
    $filter: ModelFriendFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        user {
          id
          name
        }
      }
      nextToken
    }
  }
`;
export const getFriendRequest = /* GraphQL */ `
  query GetFriendRequest($id: ID!) {
    getFriendRequest(id: $id) {
      id
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
      }
    }
  }
`;
export const listFriendRequests = /* GraphQL */ `
  query ListFriendRequests(
    $filter: ModelFriendRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFriendRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        to {
          id
          name
        }
        from {
          id
          name
        }
      }
      nextToken
    }
  }
`;
export const getSharedFile = /* GraphQL */ `
  query GetSharedFile($id: ID!) {
    getSharedFile(id: $id) {
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
export const listSharedFiles = /* GraphQL */ `
  query ListSharedFiles(
    $filter: ModelSharedFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSharedFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        path
        owner {
          id
          name
        }
        Sharers {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSharedFileToUser = /* GraphQL */ `
  query GetSharedFileToUser($id: ID!) {
    getSharedFileToUser(id: $id) {
      id
      sharedFile {
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
      }
    }
  }
`;
export const listSharedFileToUsers = /* GraphQL */ `
  query ListSharedFileToUsers(
    $filter: ModelSharedFileToUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSharedFileToUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        sharedFile {
          path
        }
        sharer {
          id
          name
        }
      }
      nextToken
    }
  }
`;
