import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
query {
    posts {
    author {
      avatar {
        url
      }
      name
    }
    title
    slug
    id
    coverphoto {
      url
    }
  }
}


`
export const GET_AUTHORS_INFO = gql`
query {
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}

`
  ;

export const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug:String!) {
    author(where:{slug: $slug }){
    avatar {
      url
    }
    description {
      html
    }
    field
    name
    posts {
      slug
      title
      coverphoto {
        url
      }
      id
    }
  }
}
`
export const GET_BLOG_INFO = gql`
query QueryBlog($slug:String!) {
  post(where: {slug:$slug }) {
    author {
      avatar {
        url
      }
      name
      field
    }
    content {
      html
    }
    coverphoto {
      url
    }
    title
  }
}
`

export const GET_POST_COMMENTS = gql`
  query getPostComments($slug:String!) {
  comments(where: {post: {slug: $slug}}) {
    id
    name
    text
  
}

  }

`


