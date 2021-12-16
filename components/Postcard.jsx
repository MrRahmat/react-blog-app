import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const Postcard = ({ post }) => {
    return (
        <div>
            {post.title}
            {post.excerpt}
        </div>
    );
};

export default Postcard;