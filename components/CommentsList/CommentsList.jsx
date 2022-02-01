import React, {useEffect, useState} from 'react';

import styles from './CommentsList.module.scss';
import { getComments } from "../../services";
import moment from "moment";

const CommentsList = ({ link }) => {
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        getComments( link ).then((res) => setComments( res ));
    }, [])

    return(
        <>
            { comments.length > 0 && (
                <div className={ styles.wrapper }>
                    <h3>
                        { comments.length }
                        { ' ' }
                        Comments
                    </h3>
                    { comments.map( ( comment ) => (
                        <div key={comment.createdAt} className={ styles.comment }>
                            <p>
                                <span>{comment.name}</span>
                                { ' ' }
                                on
                                { ' ' }
                                { moment( comment.createdAt ).format('MMM DD, YYYY') }
                            </p>
                            <p>
                                {comment.comment}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default CommentsList;