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

    console.log(relatedPosts)

    return (
        <div className={styles.wrapper}>
            <h3>{link ? 'Related Posts' : 'Recent Posts'}</h3>
            <p>PostWidget</p>
        </div>
    );
}

export default PostWidget;