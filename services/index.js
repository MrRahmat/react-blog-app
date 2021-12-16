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