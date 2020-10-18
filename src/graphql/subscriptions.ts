// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateCustomFriendRequest = /* GraphQL */ `
  subscription OnCreateCustomFriendRequest {
    onCreateCustomFriendRequest {
      id
      processed
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          processed
        }
        nextToken
      }
      fromPetition {
        items {
          id
          processed
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          processed
        }
        nextToken
      }
      fromPetition {
        items {
          id
          processed
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          processed
        }
        nextToken
      }
      fromPetition {
        items {
          id
          processed
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
export const onCreateFriend = /* GraphQL */ `
  subscription OnCreateFriend {
    onCreateFriend {
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
export const onUpdateFriend = /* GraphQL */ `
  subscription OnUpdateFriend {
    onUpdateFriend {
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
export const onDeleteFriend = /* GraphQL */ `
  subscription OnDeleteFriend {
    onDeleteFriend {
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
export const onCreateFriendRequest = /* GraphQL */ `
  subscription OnCreateFriendRequest {
    onCreateFriendRequest {
      id
      processed
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
export const onUpdateFriendRequest = /* GraphQL */ `
  subscription OnUpdateFriendRequest {
    onUpdateFriendRequest {
      id
      processed
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
export const onDeleteFriendRequest = /* GraphQL */ `
  subscription OnDeleteFriendRequest {
    onDeleteFriendRequest {
      id
      processed
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
export const onCreateSharedFile = /* GraphQL */ `
  subscription OnCreateSharedFile {
    onCreateSharedFile {
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
export const onUpdateSharedFile = /* GraphQL */ `
  subscription OnUpdateSharedFile {
    onUpdateSharedFile {
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
export const onDeleteSharedFile = /* GraphQL */ `
  subscription OnDeleteSharedFile {
    onDeleteSharedFile {
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
export const onCreateSharedFileToUser = /* GraphQL */ `
  subscription OnCreateSharedFileToUser {
    onCreateSharedFileToUser {
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
export const onUpdateSharedFileToUser = /* GraphQL */ `
  subscription OnUpdateSharedFileToUser {
    onUpdateSharedFileToUser {
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
export const onDeleteSharedFileToUser = /* GraphQL */ `
  subscription OnDeleteSharedFileToUser {
    onDeleteSharedFileToUser {
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
