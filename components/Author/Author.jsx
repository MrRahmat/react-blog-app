import React from 'react';

import styles from './Author.module.scss';

const Author = ({ author }) => {
    return (
        <div className={styles.container}>
            <div>
                <img alt={author.name} height='100px' width='100px' src={author.photo.url}/>
            </div>
            <h3>{author.name}</h3>
            <p>{author.description}</p>
        </div>
    );
};

export default Author;