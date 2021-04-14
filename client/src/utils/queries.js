import gql from 'graphql-tag';

export const QUERY_POSTS = gql`
  query posts($userName: String) {
    posts(userName: $userName) {
      _id
      postText
      createdAt
      userName
      replyCount
      replies {
        _id
        createdAt
        userName
        replyBody
      }
    }
  }
`;
export const QUERY_ALL_POST = gql`
  {
    posts {
      _id
      name
      postText
      createdAt
      forum {
        name
      }
    }
  }
`;