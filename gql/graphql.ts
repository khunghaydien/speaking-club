/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int']['output'];
};

export type Chapter = {
  __typename?: 'Chapter';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  exercises?: Maybe<Array<Exercise>>;
  explanations?: Maybe<Array<Explanation>>;
  id: Scalars['String']['output'];
  level: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId?: Maybe<Scalars['String']['output']>;
  viewed?: Maybe<Scalars['Float']['output']>;
};

export type Chapters = {
  __typename?: 'Chapters';
  chapters: Array<Chapter>;
  pagination: Pagination;
};

export type Chat = {
  __typename?: 'Chat';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  messages?: Maybe<Array<Message>>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userChat?: Maybe<Array<UserChat>>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  mediaLinks?: Maybe<Scalars['String']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateChapterDto = {
  description: Scalars['String']['input'];
  level: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateExerciseDto = {
  construction: Scalars['String']['input'];
  difficulty: Scalars['String']['input'];
  name: Scalars['String']['input'];
  questions: Array<CreateQuestionDto>;
  type: Scalars['String']['input'];
};

export type CreateMessageDto = {
  chatId: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostDto = {
  audience: Scalars['String']['input'];
  content: Scalars['String']['input'];
  excludeUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  mediaLinks?: InputMaybe<Scalars['String']['input']>;
  mediaType?: InputMaybe<Scalars['String']['input']>;
  specificUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  tagUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  type: Scalars['String']['input'];
};

export type CreateQuestionDto = {
  answer: Scalars['String']['input'];
  explanation: Scalars['String']['input'];
  question: Scalars['String']['input'];
};

export type CreateSpeakingRoomDto = {
  language: Scalars['String']['input'];
  level: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type ExcludeUser = {
  __typename?: 'ExcludeUser';
  id: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Exercise = {
  __typename?: 'Exercise';
  chapter?: Maybe<Chapter>;
  chapterId: Scalars['String']['output'];
  construction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  difficulty: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  questions?: Maybe<Array<Question>>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Exercises = {
  __typename?: 'Exercises';
  exercises: Array<Exercise>;
  pagination: Pagination;
};

export type ExistedChapterDto = {
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Explanation = {
  __typename?: 'Explanation';
  chapter: Chapter;
  chapterId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FilterChapterDto = {
  creatorId?: InputMaybe<Array<Scalars['String']['input']>>;
  level?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FilterExerciseDto = {
  chapterId?: InputMaybe<Scalars['String']['input']>;
  chapterType?: InputMaybe<Array<Scalars['String']['input']>>;
  creatorId?: InputMaybe<Array<Scalars['String']['input']>>;
  difficulty?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FilterMessageDto = {
  chatId: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUserDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ForgotPassword = {
  __typename?: 'ForgotPassword';
  expireIn?: Maybe<Scalars['Float']['output']>;
};

export type ForgotPasswordDto = {
  email: Scalars['String']['input'];
};

export type GetChatDto = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Login = {
  __typename?: 'Login';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  chat?: Maybe<Chat>;
  chatId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Messages = {
  __typename?: 'Messages';
  messages: Array<Message>;
  pagination: Pagination;
};

export type Messenger = {
  __typename?: 'Messenger';
  messenger: Array<Message>;
  pagination: Pagination;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChapter?: Maybe<Chapter>;
  createChapters?: Maybe<BatchPayload>;
  createExercise?: Maybe<Exercise>;
  createMessage?: Maybe<Message>;
  createPost?: Maybe<Post>;
  createSpeakingRoom?: Maybe<SpeakingRoom>;
  deleteChapter?: Maybe<Chapter>;
  deleteExercise?: Maybe<Exercise>;
  deleteQuestion?: Maybe<Question>;
  deleteUser: User;
  forgotPassword: ForgotPassword;
  getChat?: Maybe<Chat>;
  login: Login;
  logout: Scalars['String']['output'];
  logoutAllDevices?: Maybe<Scalars['String']['output']>;
  refreshToken: Scalars['String']['output'];
  resetPassword: User;
  sendSignalingMessage: Scalars['Boolean']['output'];
  signUp: User;
  updateChapter?: Maybe<Chapter>;
  updateExercise?: Maybe<Exercise>;
  updateUser: User;
  verifyUser: User;
};


export type MutationCreateChapterArgs = {
  createChapterDto: CreateChapterDto;
};


export type MutationCreateChaptersArgs = {
  createChapterDto: Array<CreateChapterDto>;
};


export type MutationCreateExerciseArgs = {
  chapterId: Scalars['String']['input'];
  createExerciseDto: CreateExerciseDto;
};


export type MutationCreateMessageArgs = {
  createMessageDto: CreateMessageDto;
};


export type MutationCreatePostArgs = {
  createPostDto: CreatePostDto;
};


export type MutationCreateSpeakingRoomArgs = {
  createSpeakingRoomDto: CreateSpeakingRoomDto;
};


export type MutationDeleteChapterArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteExerciseArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordDto: ForgotPasswordDto;
};


export type MutationGetChatArgs = {
  getChatDto: GetChatDto;
};


export type MutationLoginArgs = {
  loginInput: LoginDto;
};


export type MutationLogoutAllDevicesArgs = {
  userId: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  resetPasswordDto: ResetPasswordDto;
};


export type MutationSendSignalingMessageArgs = {
  message: SignalingInput;
  peerId: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  signUpDto: SignUpDto;
};


export type MutationUpdateChapterArgs = {
  id: Scalars['String']['input'];
  updateChapterDto: UpdateChapterDto;
};


export type MutationUpdateExerciseArgs = {
  exerciseId: Scalars['String']['input'];
  updateExerciseDto: UpdateExerciseDto;
};


export type MutationUpdateUserArgs = {
  updateUserDto: UpdateUserDto;
};


export type MutationVerifyUserArgs = {
  verifyUserDto?: InputMaybe<VerifyUserDto>;
};

export type OrderByDto = {
  field?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalElements: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type PaginationDto = {
  initial?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
};

export type Peer = {
  __typename?: 'Peer';
  id: Scalars['String']['output'];
};

export type Post = {
  __typename?: 'Post';
  audience: Scalars['String']['output'];
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Comment>>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  excludeUsers?: Maybe<Array<ExcludeUser>>;
  id: Scalars['String']['output'];
  mediaLinks?: Maybe<Scalars['String']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  reactions?: Maybe<Array<Reaction>>;
  specificUsers?: Maybe<Array<SpecificUser>>;
  tagUsers?: Maybe<Array<TagUser>>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  countUnseenChat?: Maybe<Scalars['Float']['output']>;
  getChapters?: Maybe<Chapters>;
  getExerciseAuthenticated?: Maybe<Exercise>;
  getExerciseById?: Maybe<Exercise>;
  getExercises?: Maybe<Exercises>;
  getMessages?: Maybe<Messages>;
  getMessenger?: Maybe<Messenger>;
  getPeer: Array<Peer>;
  getSearchs?: Maybe<Searchs>;
  getUserById?: Maybe<User>;
  getUsers: Users;
  hello: Scalars['String']['output'];
  isExistedChapter?: Maybe<Scalars['Boolean']['output']>;
};


export type QueryGetChaptersArgs = {
  filterChapterDto?: InputMaybe<FilterChapterDto>;
  orderByDto?: InputMaybe<OrderByDto>;
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryGetExerciseAuthenticatedArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetExerciseByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetExercisesArgs = {
  filterExerciseDto?: InputMaybe<FilterExerciseDto>;
  orderByDto?: InputMaybe<OrderByDto>;
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryGetMessagesArgs = {
  filterMessageDto: FilterMessageDto;
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryGetMessengerArgs = {
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryGetSearchsArgs = {
  paginationDto?: InputMaybe<PaginationDto>;
  searchFilterDto?: InputMaybe<SearchFilterDto>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUsersArgs = {
  filterUserDto?: InputMaybe<FilterUserDto>;
  orderByDto?: InputMaybe<OrderByDto>;
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryIsExistedChapterArgs = {
  existedChapterDto: ExistedChapterDto;
};

export type Question = {
  __typename?: 'Question';
  answer: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  exercise?: Maybe<Exercise>;
  exerciseId: Scalars['String']['output'];
  explanation: Scalars['String']['output'];
  id: Scalars['String']['output'];
  question: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Reaction = {
  __typename?: 'Reaction';
  author?: Maybe<User>;
  authorId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  postId: Scalars['String']['output'];
  reaction: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ResetPasswordDto = {
  password: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
};

export type Search = {
  __typename?: 'Search';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  relativeId?: Maybe<Scalars['String']['output']>;
  sourceValues: Scalars['JSONObject']['output'];
  target: Scalars['String']['output'];
};

export type SearchFilterDto = {
  name?: InputMaybe<Scalars['String']['input']>;
  sourceValues?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
};

export type Searchs = {
  __typename?: 'Searchs';
  pagination: Pagination;
  searchs: Array<Search>;
};

export type SignUpDto = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type SignalingInput = {
  candidate?: InputMaybe<Scalars['String']['input']>;
  sdp?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type SignalingMessage = {
  __typename?: 'SignalingMessage';
  candidate?: Maybe<Scalars['String']['output']>;
  sdp?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SpeakingRoom = {
  __typename?: 'SpeakingRoom';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  host?: Maybe<User>;
  hostId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userSpeakingRoom?: Maybe<Array<UserSpeakingRoom>>;
};

export type SpecificUser = {
  __typename?: 'SpecificUser';
  id: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messengerAdd?: Maybe<Message>;
  signalingMessage: SignalingMessage;
};


export type SubscriptionMessengerAddArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionSignalingMessageArgs = {
  peerId: Scalars['String']['input'];
};

export type TagUser = {
  __typename?: 'TagUser';
  id: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UpdateChapterDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateExerciseDto = {
  construction?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<UpdateQuestionDto>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateQuestionDto = {
  answer?: InputMaybe<Scalars['String']['input']>;
  explanation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  id: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  resume?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserChat = {
  __typename?: 'UserChat';
  chat?: Maybe<Chat>;
  chatId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  seen: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserSpeakingRoom = {
  __typename?: 'UserSpeakingRoom';
  id: Scalars['String']['output'];
  participant?: Maybe<User>;
  participantId?: Maybe<Scalars['String']['output']>;
  speakingRoom?: Maybe<SpeakingRoom>;
  speakingRoomId?: Maybe<Scalars['String']['output']>;
};

export type Users = {
  __typename?: 'Users';
  pagination: Pagination;
  users: Array<User>;
};

export type VerifyUserDto = {
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type SignUpMutationVariables = Exact<{
  signUpDto: SignUpDto;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, name?: string | null, email?: string | null, image?: string | null } };

export type CreateSpeakingRoomMutationVariables = Exact<{
  createSpeakingRoomDto: CreateSpeakingRoomDto;
}>;


export type CreateSpeakingRoomMutation = { __typename?: 'Mutation', createSpeakingRoom?: { __typename?: 'SpeakingRoom', id: string, name?: string | null, level?: string | null, language?: string | null, hostId?: string | null } | null };


export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signUpDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signUpDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const CreateSpeakingRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSpeakingRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createSpeakingRoomDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateSpeakingRoomDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSpeakingRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createSpeakingRoomDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createSpeakingRoomDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"hostId"}}]}}]}}]} as unknown as DocumentNode<CreateSpeakingRoomMutation, CreateSpeakingRoomMutationVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int']['output'];
};

export type Chapter = {
  __typename?: 'Chapter';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  exercises?: Maybe<Array<Exercise>>;
  explanations?: Maybe<Array<Explanation>>;
  id: Scalars['String']['output'];
  level: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId?: Maybe<Scalars['String']['output']>;
  viewed?: Maybe<Scalars['Float']['output']>;
};

export type Chapters = {
  __typename?: 'Chapters';
  chapters: Array<Chapter>;
  pagination: Pagination;
};

export type Chat = {
  __typename?: 'Chat';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  messages?: Maybe<Array<Message>>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userChat?: Maybe<Array<UserChat>>;
};

export type Comment = {
  __typename?: 'Comment';
  author: User;
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  mediaLinks?: Maybe<Scalars['String']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  postId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateChapterDto = {
  description: Scalars['String']['input'];
  level: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateExerciseDto = {
  construction: Scalars['String']['input'];
  difficulty: Scalars['String']['input'];
  name: Scalars['String']['input'];
  questions: Array<CreateQuestionDto>;
  type: Scalars['String']['input'];
};

export type CreateMessageDto = {
  chatId: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostDto = {
  audience: Scalars['String']['input'];
  content: Scalars['String']['input'];
  excludeUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  mediaLinks?: InputMaybe<Scalars['String']['input']>;
  mediaType?: InputMaybe<Scalars['String']['input']>;
  specificUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  tagUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  type: Scalars['String']['input'];
};

export type CreateQuestionDto = {
  answer: Scalars['String']['input'];
  explanation: Scalars['String']['input'];
  question: Scalars['String']['input'];
};

export type CreateSpeakingRoomDto = {
  language: Scalars['String']['input'];
  level: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
};

export type ExcludeUser = {
  __typename?: 'ExcludeUser';
  id: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Exercise = {
  __typename?: 'Exercise';
  chapter?: Maybe<Chapter>;
  chapterId: Scalars['String']['output'];
  construction: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  difficulty: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  questions?: Maybe<Array<Question>>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Exercises = {
  __typename?: 'Exercises';
  exercises: Array<Exercise>;
  pagination: Pagination;
};

export type ExistedChapterDto = {
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Explanation = {
  __typename?: 'Explanation';
  chapter: Chapter;
  chapterId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type FilterChapterDto = {
  creatorId?: InputMaybe<Array<Scalars['String']['input']>>;
  level?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<Scalars['String']['input']>>;
  type?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FilterExerciseDto = {
  chapterId?: InputMaybe<Scalars['String']['input']>;
  chapterType?: InputMaybe<Array<Scalars['String']['input']>>;
  creatorId?: InputMaybe<Array<Scalars['String']['input']>>;
  difficulty?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type FilterMessageDto = {
  chatId: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type FilterUserDto = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ForgotPassword = {
  __typename?: 'ForgotPassword';
  expireIn?: Maybe<Scalars['Float']['output']>;
};

export type ForgotPasswordDto = {
  email: Scalars['String']['input'];
};

export type GetChatDto = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Login = {
  __typename?: 'Login';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type LoginDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Message = {
  __typename?: 'Message';
  chat?: Maybe<Chat>;
  chatId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type Messages = {
  __typename?: 'Messages';
  messages: Array<Message>;
  pagination: Pagination;
};

export type Messenger = {
  __typename?: 'Messenger';
  messenger: Array<Message>;
  pagination: Pagination;
};

export type Mutation = {
  __typename?: 'Mutation';
  createChapter?: Maybe<Chapter>;
  createChapters?: Maybe<BatchPayload>;
  createExercise?: Maybe<Exercise>;
  createMessage?: Maybe<Message>;
  createPost?: Maybe<Post>;
  createSpeakingRoom?: Maybe<SpeakingRoom>;
  deleteChapter?: Maybe<Chapter>;
  deleteExercise?: Maybe<Exercise>;
  deleteQuestion?: Maybe<Question>;
  deleteUser: User;
  forgotPassword: ForgotPassword;
  getChat?: Maybe<Chat>;
  login: Login;
  logout: Scalars['String']['output'];
  logoutAllDevices?: Maybe<Scalars['String']['output']>;
  refreshToken: Scalars['String']['output'];
  resetPassword: User;
  sendSignalingMessage: Scalars['Boolean']['output'];
  signUp: User;
  updateChapter?: Maybe<Chapter>;
  updateExercise?: Maybe<Exercise>;
  updateUser: User;
  verifyUser: User;
};


export type MutationCreateChapterArgs = {
  createChapterDto: CreateChapterDto;
};


export type MutationCreateChaptersArgs = {
  createChapterDto: Array<CreateChapterDto>;
};


export type MutationCreateExerciseArgs = {
  chapterId: Scalars['String']['input'];
  createExerciseDto: CreateExerciseDto;
};


export type MutationCreateMessageArgs = {
  createMessageDto: CreateMessageDto;
};


export type MutationCreatePostArgs = {
  createPostDto: CreatePostDto;
};


export type MutationCreateSpeakingRoomArgs = {
  createSpeakingRoomDto: CreateSpeakingRoomDto;
};


export type MutationDeleteChapterArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteExerciseArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteQuestionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  forgotPasswordDto: ForgotPasswordDto;
};


export type MutationGetChatArgs = {
  getChatDto: GetChatDto;
};


export type MutationLoginArgs = {
  loginInput: LoginDto;
};


export type MutationLogoutAllDevicesArgs = {
  userId: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  resetPasswordDto: ResetPasswordDto;
};


export type MutationSendSignalingMessageArgs = {
  message: SignalingInput;
  peerId: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  signUpDto: SignUpDto;
};


export type MutationUpdateChapterArgs = {
  id: Scalars['String']['input'];
  updateChapterDto: UpdateChapterDto;
};


export type MutationUpdateExerciseArgs = {
  exerciseId: Scalars['String']['input'];
  updateExerciseDto: UpdateExerciseDto;
};


export type MutationUpdateUserArgs = {
  updateUserDto: UpdateUserDto;
};


export type MutationVerifyUserArgs = {
  verifyUserDto?: InputMaybe<VerifyUserDto>;
};

export type OrderByDto = {
  field?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  currentPage: Scalars['Float']['output'];
  pageSize: Scalars['Float']['output'];
  totalElements: Scalars['Float']['output'];
  totalPages: Scalars['Float']['output'];
};

export type PaginationDto = {
  initial?: InputMaybe<Scalars['Float']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  pageSize?: InputMaybe<Scalars['Float']['input']>;
};

export type Peer = {
  __typename?: 'Peer';
  id: Scalars['String']['output'];
};

export type Post = {
  __typename?: 'Post';
  audience: Scalars['String']['output'];
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Array<Comment>>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  excludeUsers?: Maybe<Array<ExcludeUser>>;
  id: Scalars['String']['output'];
  mediaLinks?: Maybe<Scalars['String']['output']>;
  mediaType?: Maybe<Scalars['String']['output']>;
  reactions?: Maybe<Array<Reaction>>;
  specificUsers?: Maybe<Array<SpecificUser>>;
  tagUsers?: Maybe<Array<TagUser>>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Query = {
  __typename?: 'Query';
  countUnseenChat?: Maybe<Scalars['Float']['output']>;
  getChapters?: Maybe<Chapters>;
  getExerciseAuthenticated?: Maybe<Exercise>;
  getExerciseById?: Maybe<Exercise>;
  getExercises?: Maybe<Exercises>;
  getMessages?: Maybe<Messages>;
  getMessenger?: Maybe<Messenger>;
  getPeer: Array<Peer>;
  getSearchs?: Maybe<Searchs>;
  getUserById?: Maybe<User>;
  getUsers: Users;
  hello: Scalars['String']['output'];
  isExistedChapter?: Maybe<Scalars['Boolean']['output']>;
};


export type QueryGetChaptersArgs = {
  filterChapterDto?: InputMaybe<FilterChapterDto>;
  orderByDto?: InputMaybe<OrderByDto>;
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryGetExerciseAuthenticatedArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetExerciseByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetExercisesArgs = {
  filterExerciseDto?: InputMaybe<FilterExerciseDto>;
  orderByDto?: InputMaybe<OrderByDto>;
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryGetMessagesArgs = {
  filterMessageDto: FilterMessageDto;
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryGetMessengerArgs = {
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryGetSearchsArgs = {
  paginationDto?: InputMaybe<PaginationDto>;
  searchFilterDto?: InputMaybe<SearchFilterDto>;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUsersArgs = {
  filterUserDto?: InputMaybe<FilterUserDto>;
  orderByDto?: InputMaybe<OrderByDto>;
  paginationDto?: InputMaybe<PaginationDto>;
};


export type QueryIsExistedChapterArgs = {
  existedChapterDto: ExistedChapterDto;
};

export type Question = {
  __typename?: 'Question';
  answer: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  exercise?: Maybe<Exercise>;
  exerciseId: Scalars['String']['output'];
  explanation: Scalars['String']['output'];
  id: Scalars['String']['output'];
  question: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Reaction = {
  __typename?: 'Reaction';
  author?: Maybe<User>;
  authorId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  postId: Scalars['String']['output'];
  reaction: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ResetPasswordDto = {
  password: Scalars['String']['input'];
  resetPasswordToken: Scalars['String']['input'];
};

export type Search = {
  __typename?: 'Search';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  relativeId?: Maybe<Scalars['String']['output']>;
  sourceValues: Scalars['JSONObject']['output'];
  target: Scalars['String']['output'];
};

export type SearchFilterDto = {
  name?: InputMaybe<Scalars['String']['input']>;
  sourceValues?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
};

export type Searchs = {
  __typename?: 'Searchs';
  pagination: Pagination;
  searchs: Array<Search>;
};

export type SignUpDto = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};

export type SignalingInput = {
  candidate?: InputMaybe<Scalars['String']['input']>;
  sdp?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type SignalingMessage = {
  __typename?: 'SignalingMessage';
  candidate?: Maybe<Scalars['String']['output']>;
  sdp?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SpeakingRoom = {
  __typename?: 'SpeakingRoom';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  host?: Maybe<User>;
  hostId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userSpeakingRoom?: Maybe<Array<UserSpeakingRoom>>;
};

export type SpecificUser = {
  __typename?: 'SpecificUser';
  id: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messengerAdd?: Maybe<Message>;
  signalingMessage: SignalingMessage;
};


export type SubscriptionMessengerAddArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionSignalingMessageArgs = {
  peerId: Scalars['String']['input'];
};

export type TagUser = {
  __typename?: 'TagUser';
  id: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type UpdateChapterDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateExerciseDto = {
  construction?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<Array<UpdateQuestionDto>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateQuestionDto = {
  answer?: InputMaybe<Scalars['String']['input']>;
  explanation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  id: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  resume?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserChat = {
  __typename?: 'UserChat';
  chat?: Maybe<Chat>;
  chatId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  seen: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserSpeakingRoom = {
  __typename?: 'UserSpeakingRoom';
  id: Scalars['String']['output'];
  participant?: Maybe<User>;
  participantId?: Maybe<Scalars['String']['output']>;
  speakingRoom?: Maybe<SpeakingRoom>;
  speakingRoomId?: Maybe<Scalars['String']['output']>;
};

export type Users = {
  __typename?: 'Users';
  pagination: Pagination;
  users: Array<User>;
};

export type VerifyUserDto = {
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type SignUpMutationVariables = Exact<{
  signUpDto: SignUpDto;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', id: string, name?: string | null, email?: string | null, image?: string | null } };

export type CreateSpeakingRoomMutationVariables = Exact<{
  createSpeakingRoomDto: CreateSpeakingRoomDto;
}>;


export type CreateSpeakingRoomMutation = { __typename?: 'Mutation', createSpeakingRoom?: { __typename?: 'SpeakingRoom', id: string, name?: string | null, level?: string | null, language?: string | null, hostId?: string | null } | null };


export const SignUpDocument = gql`
    mutation SignUp($signUpDto: SignUpDto!) {
  signUp(signUpDto: $signUpDto) {
    id
    name
    email
    image
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      signUpDto: // value for 'signUpDto'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const CreateSpeakingRoomDocument = gql`
    mutation CreateSpeakingRoom($createSpeakingRoomDto: CreateSpeakingRoomDto!) {
  createSpeakingRoom(createSpeakingRoomDto: $createSpeakingRoomDto) {
    id
    name
    level
    language
    hostId
  }
}
    `;
export type CreateSpeakingRoomMutationFn = Apollo.MutationFunction<CreateSpeakingRoomMutation, CreateSpeakingRoomMutationVariables>;

/**
 * __useCreateSpeakingRoomMutation__
 *
 * To run a mutation, you first call `useCreateSpeakingRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSpeakingRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSpeakingRoomMutation, { data, loading, error }] = useCreateSpeakingRoomMutation({
 *   variables: {
 *      createSpeakingRoomDto: // value for 'createSpeakingRoomDto'
 *   },
 * });
 */
export function useCreateSpeakingRoomMutation(baseOptions?: Apollo.MutationHookOptions<CreateSpeakingRoomMutation, CreateSpeakingRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSpeakingRoomMutation, CreateSpeakingRoomMutationVariables>(CreateSpeakingRoomDocument, options);
      }
export type CreateSpeakingRoomMutationHookResult = ReturnType<typeof useCreateSpeakingRoomMutation>;
export type CreateSpeakingRoomMutationResult = Apollo.MutationResult<CreateSpeakingRoomMutation>;
export type CreateSpeakingRoomMutationOptions = Apollo.BaseMutationOptions<CreateSpeakingRoomMutation, CreateSpeakingRoomMutationVariables>;