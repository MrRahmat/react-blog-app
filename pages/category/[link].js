import React from "react";
import { useRouter } from "next/router";

import styles from '../../styles/Post.module.scss';
import {getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

const CategoryPost = ({ posts }) => {
    const router = useRouter();

    if (router.isFallback){
        return <Loader/>;
    }

    return (
        <div className={ styles.wrapper }>
            <div className={ styles.container }>
                <div className={ styles.main }>
                    { posts.map(( post, index ) =>(
                        <PostCard key={ index } post={ post.node }/>
                    ))}
                </div>
                <div className={ styles.secondary }>
                    <div>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPost;

export async function getStaticProps( { params }) {
    const posts = await getCategoryPost( params.link );
    return{
        props: { posts }
    }
}

export async function getStaticPaths(){
    const categories = await getCategories();
    return {
        paths: categories.map(( { link }) => ({ params: { link } })),
        fallback: true
    }
}