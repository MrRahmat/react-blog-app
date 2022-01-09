import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import moment from 'moment';

import styles from './PostWidget.module.scss';
import { getRecentPosts, getRelatedPosts } from '../../services';

const PostWidget = ( {categories, link} ) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if ( link ){
            getRelatedPosts( categories, link ).then((result) => setRelatedPosts(result))
        } else{
            getRecentPosts().then((result) => setRelatedPosts(result))
        }
    }, [link])

    return (
        <div className={styles.wrapper}>
            <h3>{link ? 'Related Posts' : 'Recent Posts'}</h3>
            {relatedPosts.map(( post ) => (
                <div key={post.title} className={styles.container}>
                    <div className={styles.img_container}>
                        <img width='60px' height='60px' src={post.image.url} alt={post.title}/>
                    </div>
                    <div className={styles.post}>
                        <p>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.link}`}>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostWidget;