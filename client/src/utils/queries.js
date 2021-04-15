import gql from 'graphql-tag';

export const QUERY_POSTS = gql`
  query posts($forum: ID) {
    posts(forum: $forum) {
      _id
      name
      postText
      createdAt
      username
      forum {
        _id
      } 
     }
   }
  
`;


/*export const QUERY_ALL_POST = gql`
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
`;*/
export const QUERY_FORUM = gql`
 {
  Forums{
    _id
   name
 }
}
`;

export const QUERY_POST = gql`
  {
    post{
     _id
     name
     postText
     createdAt
     username
     forum {
       name
     } 
    }
  }
`;