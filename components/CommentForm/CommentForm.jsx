import React, {useState, useEffect, useRef } from 'react';
import styles from "./CommentForm.module.scss";

const CommentForm = ({ link }) => {
    const [ error, setError ] = useState( false );
    const [ localStorage, setLocalStorage ] = useState( null );
    const [ showMessage, setShowMessage ] = useState( false );
    const element = useRef();
    const name = useRef();
    const email = useRef();
    const storeData = useRef();
    return (
        <div className={ styles.wrapper }>
            <h3>Hello there</h3>
            <div className={ styles.container }>
                <textarea ref={ element } placeholder='Leave your comment' name='comment'/>
            </div>
            <div className={ styles.container }>
                <input type='text' ref={ name } placeholder='Your name' name='name'/>
                <input type='text' ref={ email } placeholder='Your email' name='email'/>
            </div>
        </div>
    );
};

export default CommentForm;