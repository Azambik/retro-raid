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
export const QUERY_ALL_FORUM = gql`
  {
    Forums {
      _id
      name
      subforum {
        name
        createdAt
        createdBy
      }
    }
  }
`;