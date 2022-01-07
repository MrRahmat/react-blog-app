import React from 'react';
import moment from 'moment';
import Link from 'next/link';

import styles from './PostCard.module.scss'

const PostCard = ({ post }) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_img}>
                <img
                    src={post.image.url}
                    alt={post.title}
                />
            </div>
            <h1><Link href={`/post/${post.link}`}>{post.title}</Link></h1>
            <div className={styles.post_info}>
                <div>
                    <img
                        alt={post.author.name}
                        height='50px'
                        width='50px'
                        src={post.author.photo.url}
                    />
                    <p>{post.author.name}</p>
                </div>
                <div className={styles.post_date}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
            </div>
            <p>{post.excerpt}</p>
            <div className={styles.post_link}>
                <Link href={`/post/${post.link}`}>
                    <span>Continue Reading</span>
                </Link>
            </div>
        </div>
    );
};

export default PostCard;