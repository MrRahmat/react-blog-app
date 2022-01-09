import React from 'react';

import styles from '../../styles/Post.module.scss';
import {getPosts, getPostContent} from "../../services";
import { Categories, PostWidget, PostDetails } from "../../components";

const PostContent = ({ post }) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <PostDetails post={ post }/>
                </div>
                <div className={styles.secondary}>
                    <div>
                        <PostWidget link={ post.link } categories={ post.categories.map(( category ) => category.link ) }/>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostContent;

export async function getStaticProps( { params }) {
    const data = await getPostContent( params.link );
    return{
        props: { post: data }
    }
}

export async function getStaticPaths(){
    const posts = await getPosts();
    return {
        paths: posts.map(( {node: { link } }) => ({ params: { link } })),
        fallback: false
    }
}