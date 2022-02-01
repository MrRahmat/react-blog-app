import React from 'react';

import styles from './PostDetails.module.scss'
import moment from "moment";

const PostDetails = ({ post }) => {
    const getContent = ( index, text, obj, type ) => {
        let Text = text;

        if ( obj ) {
            if ( obj.bold ) {
                Text = ( <b key={ index }>{ text }</b> )
            }
            if ( obj.italic ) {
                Text = ( <em key={ index }>{ text }</em> )
            }
            if ( obj.underline ) {
                Text = ( <u key={ index }>{ text }</u> )
            }
        }

        switch ( type ){
            case 'heading-three':
                return <h3 key={ index }>{ Text.map(( item, i ) => <React.Fragment key={ i }>{ item }</React.Fragment>) }</h3>
            case 'paragraph':
                return <p key={ index }>{ Text.map(( item, i ) => <React.Fragment key={ i }>{ item }</React.Fragment>) }</p>
            case 'heading-four':
                return <h4 key={ index }>{Text.map(( item, i ) => <React.Fragment key={ i }>{ item }</React.Fragment>) }</h4>
            case 'image':
                return <img key={index } alt={ obj.title } height={ obj.height } width={ obj.width } src={ obj.src }/>
            default:
                return Text
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.post_img}>
                <img src={post.image.url} alt={post.title}/>
            </div>
            <div className={styles.post}>
                <div className={styles.post_author_img}>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                </div>
                <h1>{post.title}</h1>
                {post.content.raw.children.map(( typeObj, index ) => {
                    const children = typeObj.children.map(( item, itemIndex ) => getContent( itemIndex, item.text, item ))

                    return getContent( index, children, typeObj, typeObj.type )
                })}
            </div>
        </div>
    );
};

export default PostDetails;