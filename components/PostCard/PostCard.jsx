import React from 'react';
import moment from 'moment';
import Link from 'next/link';

import styles from './PostCard.module.scss'

const Postcard = ({ post }) => {
    console.log(post)
    return (
        <div className={styles.wrapper}>
            <div className={styles.img_container}>
                <img
                    src={post.image.url}
                    alt={post.title}
                />
            </div>
            <h1><Link href={`/post/${post.link}`}>{post.title}</Link></h1>
        </div>
    );
};

export default Postcard;