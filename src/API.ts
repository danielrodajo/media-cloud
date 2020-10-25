/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateFriendInput = {
  id?: string | null,
  name: string,
  originalId: string,
  friendUserId: string,
};

export type ModelFriendConditionInput = {
  name?: ModelStringInput | null,
  originalId?: ModelStringInput | null,
  and?: Array< ModelFriendConditionInput | null > | null,
  or?: Array< ModelFriendConditionInput | null > | null,
  not?: ModelFriendConditionInput | null,
};

export type UpdateFriendInput = {
  id: string,
  name?: string | null,
  originalId?: string | null,
  friendUserId?: string | null,
};

export type DeleteFriendInput = {
  id?: string | null,
};

export type CreateFriendRequestInput = {
  id?: string | null,
  friendRequestToId: string,
  friendRequestFromId: string,
};

export type ModelFriendRequestConditionInput = {
  and?: Array< ModelFriendRequestConditionInput | null > | null,
  or?: Array< ModelFriendRequestConditionInput | null > | null,
  not?: ModelFriendRequestConditionInput | null,
};

export type UpdateFriendRequestInput = {
  id: string,
  friendRequestToId?: string | null,
  friendRequestFromId?: string | null,
};

export type DeleteFriendRequestInput = {
  id?: string | null,
};

export type CreateSharedFileInput = {
  id?: string | null,
  path: string,
  sharedFileOwnerId: string,
};

export type ModelSharedFileConditionInput = {
  path?: ModelStringInput | null,
  and?: Array< ModelSharedFileConditionInput | null > | null,
  or?: Array< ModelSharedFileConditionInput | null > | null,
  not?: ModelSharedFileConditionInput | null,
};

export type UpdateSharedFileInput = {
  id: string,
  path?: string | null,
  sharedFileOwnerId?: string | null,
};

export type DeleteSharedFileInput = {
  id?: string | null,
};

export type CreateSharedFileToUserInput = {
  id?: string | null,
  sharedFileToUserSharedFileId: string,
  sharedFileToUserSharerId: string,
};

export type ModelSharedFileToUserConditionInput = {
  and?: Array< ModelSharedFileToUserConditionInput | null > | null,
  or?: Array< ModelSharedFileToUserConditionInput | null > | null,
  not?: ModelSharedFileToUserConditionInput | null,
};

export type UpdateSharedFileToUserInput = {
  id: string,
  sharedFileToUserSharedFileId?: string | null,
  sharedFileToUserSharerId?: string | null,
};

export type DeleteSharedFileToUserInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFriendFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  originalId?: ModelStringInput | null,
  and?: Array< ModelFriendFilterInput | null > | null,
  or?: Array< ModelFriendFilterInput | null > | null,
  not?: ModelFriendFilterInput | null,
};

export type ModelFriendRequestFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelFriendRequestFilterInput | null > | null,
  or?: Array< ModelFriendRequestFilterInput | null > | null,
  not?: ModelFriendRequestFilterInput | null,
};

export type ModelSharedFileFilterInput = {
  id?: ModelIDInput | null,
  path?: ModelStringInput | null,
  and?: Array< ModelSharedFileFilterInput | null > | null,
  or?: Array< ModelSharedFileFilterInput | null > | null,
  not?: ModelSharedFileFilterInput | null,
};

export type ModelSharedFileToUserFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelSharedFileToUserFilterInput | null > | null,
  or?: Array< ModelSharedFileToUserFilterInput | null > | null,
  not?: ModelSharedFileToUserFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    sharedFiles:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    mySharedFiles:  {
      __typename: "ModelSharedFileConnection",
      items:  Array< {
        __typename: "SharedFile",
        id: string,
        path: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fromPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        name: string,
        originalId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    sharedFiles:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    mySharedFiles:  {
      __typename: "ModelSharedFileConnection",
      items:  Array< {
        __typename: "SharedFile",
        id: string,
        path: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fromPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        name: string,
        originalId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    sharedFiles:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    mySharedFiles:  {
      __typename: "ModelSharedFileConnection",
      items:  Array< {
        __typename: "SharedFile",
        id: string,
        path: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fromPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        name: string,
        originalId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateFriendMutationVariables = {
  input: CreateFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type CreateFriendMutation = {
  createFriend:  {
    __typename: "Friend",
    id: string,
    name: string,
    originalId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateFriendMutationVariables = {
  input: UpdateFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type UpdateFriendMutation = {
  updateFriend:  {
    __typename: "Friend",
    id: string,
    name: string,
    originalId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteFriendMutationVariables = {
  input: DeleteFriendInput,
  condition?: ModelFriendConditionInput | null,
};

export type DeleteFriendMutation = {
  deleteFriend:  {
    __typename: "Friend",
    id: string,
    name: string,
    originalId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateFriendRequestMutationVariables = {
  input: CreateFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type CreateFriendRequestMutation = {
  createFriendRequest:  {
    __typename: "FriendRequest",
    id: string,
    to:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    from:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateFriendRequestMutationVariables = {
  input: UpdateFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type UpdateFriendRequestMutation = {
  updateFriendRequest:  {
    __typename: "FriendRequest",
    id: string,
    to:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    from:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteFriendRequestMutationVariables = {
  input: DeleteFriendRequestInput,
  condition?: ModelFriendRequestConditionInput | null,
};

export type DeleteFriendRequestMutation = {
  deleteFriendRequest:  {
    __typename: "FriendRequest",
    id: string,
    to:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    from:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateSharedFileMutationVariables = {
  input: CreateSharedFileInput,
  condition?: ModelSharedFileConditionInput | null,
};

export type CreateSharedFileMutation = {
  createSharedFile:  {
    __typename: "SharedFile",
    id: string,
    path: string,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    Sharers:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateSharedFileMutationVariables = {
  input: UpdateSharedFileInput,
  condition?: ModelSharedFileConditionInput | null,
};

export type UpdateSharedFileMutation = {
  updateSharedFile:  {
    __typename: "SharedFile",
    id: string,
    path: string,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    Sharers:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteSharedFileMutationVariables = {
  input: DeleteSharedFileInput,
  condition?: ModelSharedFileConditionInput | null,
};

export type DeleteSharedFileMutation = {
  deleteSharedFile:  {
    __typename: "SharedFile",
    id: string,
    path: string,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    Sharers:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateSharedFileToUserMutationVariables = {
  input: CreateSharedFileToUserInput,
  condition?: ModelSharedFileToUserConditionInput | null,
};

export type CreateSharedFileToUserMutation = {
  createSharedFileToUser:  {
    __typename: "SharedFileToUser",
    id: string,
    sharedFile:  {
      __typename: "SharedFile",
      id: string,
      path: string,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
      },
      Sharers:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
    },
    sharer:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateSharedFileToUserMutationVariables = {
  input: UpdateSharedFileToUserInput,
  condition?: ModelSharedFileToUserConditionInput | null,
};

export type UpdateSharedFileToUserMutation = {
  updateSharedFileToUser:  {
    __typename: "SharedFileToUser",
    id: string,
    sharedFile:  {
      __typename: "SharedFile",
      id: string,
      path: string,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
      },
      Sharers:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
    },
    sharer:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteSharedFileToUserMutationVariables = {
  input: DeleteSharedFileToUserInput,
  condition?: ModelSharedFileToUserConditionInput | null,
};

export type DeleteSharedFileToUserMutation = {
  deleteSharedFileToUser:  {
    __typename: "SharedFileToUser",
    id: string,
    sharedFile:  {
      __typename: "SharedFile",
      id: string,
      path: string,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
      },
      Sharers:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
    },
    sharer:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    sharedFiles:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    mySharedFiles:  {
      __typename: "ModelSharedFileConnection",
      items:  Array< {
        __typename: "SharedFile",
        id: string,
        path: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fromPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        name: string,
        originalId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFriendQueryVariables = {
  id: string,
};

export type GetFriendQuery = {
  getFriend:  {
    __typename: "Friend",
    id: string,
    name: string,
    originalId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListFriendsQueryVariables = {
  filter?: ModelFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendsQuery = {
  listFriends:  {
    __typename: "ModelFriendConnection",
    items:  Array< {
      __typename: "Friend",
      id: string,
      name: string,
      originalId: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFriendRequestQueryVariables = {
  id: string,
};

export type GetFriendRequestQuery = {
  getFriendRequest:  {
    __typename: "FriendRequest",
    id: string,
    to:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    from:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListFriendRequestsQueryVariables = {
  filter?: ModelFriendRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFriendRequestsQuery = {
  listFriendRequests:  {
    __typename: "ModelFriendRequestConnection",
    items:  Array< {
      __typename: "FriendRequest",
      id: string,
      to:  {
        __typename: "User",
        id: string,
        name: string,
      },
      from:  {
        __typename: "User",
        id: string,
        name: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSharedFileQueryVariables = {
  id: string,
};

export type GetSharedFileQuery = {
  getSharedFile:  {
    __typename: "SharedFile",
    id: string,
    path: string,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    Sharers:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListSharedFilesQueryVariables = {
  filter?: ModelSharedFileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSharedFilesQuery = {
  listSharedFiles:  {
    __typename: "ModelSharedFileConnection",
    items:  Array< {
      __typename: "SharedFile",
      id: string,
      path: string,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
      },
      Sharers:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSharedFileToUserQueryVariables = {
  id: string,
};

export type GetSharedFileToUserQuery = {
  getSharedFileToUser:  {
    __typename: "SharedFileToUser",
    id: string,
    sharedFile:  {
      __typename: "SharedFile",
      id: string,
      path: string,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
      },
      Sharers:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
    },
    sharer:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type ListSharedFileToUsersQueryVariables = {
  filter?: ModelSharedFileToUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSharedFileToUsersQuery = {
  listSharedFileToUsers:  {
    __typename: "ModelSharedFileToUserConnection",
    items:  Array< {
      __typename: "SharedFileToUser",
      id: string,
      sharedFile:  {
        __typename: "SharedFile",
        id: string,
        path: string,
      },
      sharer:  {
        __typename: "User",
        id: string,
        name: string,
      },
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    sharedFiles:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    mySharedFiles:  {
      __typename: "ModelSharedFileConnection",
      items:  Array< {
        __typename: "SharedFile",
        id: string,
        path: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fromPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        name: string,
        originalId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    sharedFiles:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    mySharedFiles:  {
      __typename: "ModelSharedFileConnection",
      items:  Array< {
        __typename: "SharedFile",
        id: string,
        path: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fromPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        name: string,
        originalId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    sharedFiles:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    mySharedFiles:  {
      __typename: "ModelSharedFileConnection",
      items:  Array< {
        __typename: "SharedFile",
        id: string,
        path: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    toPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    fromPetition:  {
      __typename: "ModelFriendRequestConnection",
      items:  Array< {
        __typename: "FriendRequest",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    friends:  {
      __typename: "ModelFriendConnection",
      items:  Array< {
        __typename: "Friend",
        id: string,
        name: string,
        originalId: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateFriendSubscription = {
  onCreateFriend:  {
    __typename: "Friend",
    id: string,
    name: string,
    originalId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateFriendSubscription = {
  onUpdateFriend:  {
    __typename: "Friend",
    id: string,
    name: string,
    originalId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteFriendSubscription = {
  onDeleteFriend:  {
    __typename: "Friend",
    id: string,
    name: string,
    originalId: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateFriendRequestSubscription = {
  onCreateFriendRequest:  {
    __typename: "FriendRequest",
    id: string,
    to:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    from:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateFriendRequestSubscription = {
  onUpdateFriendRequest:  {
    __typename: "FriendRequest",
    id: string,
    to:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    from:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteFriendRequestSubscription = {
  onDeleteFriendRequest:  {
    __typename: "FriendRequest",
    id: string,
    to:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    from:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateSharedFileSubscription = {
  onCreateSharedFile:  {
    __typename: "SharedFile",
    id: string,
    path: string,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    Sharers:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateSharedFileSubscription = {
  onUpdateSharedFile:  {
    __typename: "SharedFile",
    id: string,
    path: string,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    Sharers:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteSharedFileSubscription = {
  onDeleteSharedFile:  {
    __typename: "SharedFile",
    id: string,
    path: string,
    owner:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
    Sharers:  {
      __typename: "ModelSharedFileToUserConnection",
      items:  Array< {
        __typename: "SharedFileToUser",
        id: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateSharedFileToUserSubscription = {
  onCreateSharedFileToUser:  {
    __typename: "SharedFileToUser",
    id: string,
    sharedFile:  {
      __typename: "SharedFile",
      id: string,
      path: string,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
      },
      Sharers:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
    },
    sharer:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateSharedFileToUserSubscription = {
  onUpdateSharedFileToUser:  {
    __typename: "SharedFileToUser",
    id: string,
    sharedFile:  {
      __typename: "SharedFile",
      id: string,
      path: string,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
      },
      Sharers:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
    },
    sharer:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteSharedFileToUserSubscription = {
  onDeleteSharedFileToUser:  {
    __typename: "SharedFileToUser",
    id: string,
    sharedFile:  {
      __typename: "SharedFile",
      id: string,
      path: string,
      owner:  {
        __typename: "User",
        id: string,
        name: string,
      },
      Sharers:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
    },
    sharer:  {
      __typename: "User",
      id: string,
      name: string,
      sharedFiles:  {
        __typename: "ModelSharedFileToUserConnection",
        nextToken: string | null,
      } | null,
      mySharedFiles:  {
        __typename: "ModelSharedFileConnection",
        nextToken: string | null,
      } | null,
      toPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      fromPetition:  {
        __typename: "ModelFriendRequestConnection",
        nextToken: string | null,
      } | null,
      friends:  {
        __typename: "ModelFriendConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};
