import React, { useRef, useState, useEffect } from "react";

import styles from "./CommentForm.module.scss";
import { submitComment } from "../../services";

const CommentForm = ({ link }) => {
    const [ error, setError ] = useState( false );
    const [ localStorage, setLocalStorage ] = useState( null );
    const [ showMessage, setShowMessage ] = useState( false )

    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
      nameEl.current.value = window.localStorage.getItem( 'name' );
      emailEl.current.value = window.localStorage.getItem( 'email' );
    }, []);
    

    const handleSubmit = () => {
        setError( false );

        const { value: comment } = commentEl.current;
        const { value: name } = nameEl.current;
        const { value: email } = emailEl.current;
        const { checked: storeData } = storeDataEl.current;
        
        if(!comment || !name || !email){
            setError( true );
            return;
        }

        const commentObj = {
            name, email, comment, link
        };

        if ( storeData ) {
            window.localStorage.setItem( 'name', name );
            window.localStorage.setItem( 'email', email );
        } else {
            window.localStorage.removeItem( 'name', name );
            window.localStorage.removeItem( 'email', email );
        }

        submitComment( commentObj )
        .then(() => {
            setShowMessage( true );
            setTimeout(() => {
                setShowMessage( false );
            }, 3000 );
        })
    }

    return(
        <div className={ styles.wrapper }>
            <h3>Hello there</h3>
            <div className={ styles.container }>
                <textarea ref={ commentEl } placeholder='Leave your comment' name='comment'/>
            </div>
            <div className={ styles.container }>
                <input type='text' ref={ nameEl } placeholder='Your name' name='name'/>
                <input type='text' ref={ emailEl } placeholder='Your email' name='email'/>
            </div>
            <div className={ styles.container }>
                <div>
                    <input className={ styles.checkbox } ref={ storeDataEl } type='checkbox' id='storeData' name='storeData' value='true'/>
                    <label htmlFor="storeData">Remember the data.</label>
                </div>
             </div>
            { error && <p>All fields are required!</p> }
            <div className={ styles.button_container }>
                <button type='button' onClick={ handleSubmit }>
                    Post Comment
                </button>
                { showMessage && <span>Comment submitted!</span> }
             </div>
        </div>
    )
}

export default CommentForm;