import {request, gql} from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
            edges {
                node {
                author {
                    id
                    name
                    description
                    photo {
                    url
                    }
                }
                link
                createdAt
                excerpt
                title
                image {
                    url
                }
                categories {
                    name
                    link
                }
                }
            }
            }
        }
    `

    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}

export const getPostContent = async ( link ) => {
    const query = gql`
        query getPostContent( $link: String! ) {
            post( where: { link: $link } ){
                author {
                    id
                    name
                    description
                    photo {
                    url
                    }
                }
                link
                createdAt
                excerpt
                title
                image {
                    url
                }
                categories {
                    name
                    link
                }
                content {
                    raw
                }
            }
        }
    `

    const result = await request(graphqlAPI, query, { link });
    return result.post;
}

export const getRecentPosts = async () => {
    const query = gql`
        query getPostsDetails{
            posts(
                orderBy: createdAt_ASC
                last: 3
            ) {
                title
                createdAt
                link
                image {
                    url
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.posts;
}

export const getRelatedPosts = async ( categories, link ) => {
    const query = gql`
        query getPostsDetails( $link: String!, $categories: [ String! ] ){
            posts(
                where: { link_not: $link, AND: {categories_some: { link_in: $categories } }  }
                last: 3
            ) {
                title
                createdAt
                link
                image {
                    url
                }
            }
        }
    `
    const result = await request(graphqlAPI, query, { categories, link });
    return result.posts;
}

export const getCategories = async () => {
    const query = gql`
        query getCategories{
            categories {
                name
                link    
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.categories;
}
export const getCategoryPost = async ( link ) => {
    const query = gql`
    query GetCategoryPost( $link: String! ) {
      postsConnection(where: {categories_some: { link: $link }}) {
        edges {
          cursor
          node {
            author {
              description
              name
              id
              photo {
                url
              }
            }
            createdAt
            link
            title
            excerpt
            image {
              url
            }
            categories {
              name
              link
            }
          }
        }
      }
    }
  `;

    const result = await request(graphqlAPI, query, { link });

    return result.postsConnection.edges;
};

export const submitComment = async ( obj ) => {

    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( obj ),
    });

    return result.json();
};

export const getComments = async ( link ) => {
    const query = gql`
        query getComments( $link: String! ){
            comments( where: { post: { link: $link } } ){
                name
                createdAt
                comment
            } 
        }
    `
    const result = await request( graphqlAPI, query, { link } );
    return result.comments;
}