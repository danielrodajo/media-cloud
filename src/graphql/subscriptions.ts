// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
    }
  }
`;
export const onCreateFriend = /* GraphQL */ `
  subscription OnCreateFriend {
    onCreateFriend {
      id
      name
      friend {
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
      }
    }
  }
`;
export const onUpdateFriend = /* GraphQL */ `
  subscription OnUpdateFriend {
    onUpdateFriend {
      id
      name
      friend {
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
      }
    }
  }
`;
export const onDeleteFriend = /* GraphQL */ `
  subscription OnDeleteFriend {
    onDeleteFriend {
      id
      name
      friend {
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
      }
    }
  }
`;
