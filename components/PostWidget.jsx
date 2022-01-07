import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import moment from 'moment';

import { getRecentPosts, getRelatedPosts } from '../services';

const PostWidget = ( {categories, link} ) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if ( link ){
            getRelatedPosts( category, link ).then((result) => setRelatedPosts(result))
        } else{
            getRecentPosts().then((result) => setRelatedPosts(result))
        }
    }, [link])

    console.log(relatedPosts)

    return (
        <div>
            <p>PostWidget</p>
        </div>
    );
}

export default PostWidget;