import { GraphQLClient, gql } from "graphql-request";

const qraphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments( req, res ) {

  const qraphQLClient = new GraphQLClient( qraphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  });

  const query = gql`
    mutation CreateComment( $name: String!, $email: String!, $comment: String!, $link: String! ) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { link: $link } } }) { id }
    }
  `
  try{
    const result = await qraphQLClient.request( query, req.body );
    return res.status( 200 ).send( result );
  } catch ( error ) {
    console.log(error)
    return res.status( 500 ).send( error );
  }

}
