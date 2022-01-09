import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';
import { getCategories } from "../../services";



const Header = () => {
    const [ categories, setCategories ] = useState([]);
    useEffect(() => {
        getCategories().then(( newCategories) => setCategories( newCategories ))
    }, []);
    return(
        <div className={styles.container}>
            <div>
                <div>
                    <Link href="/">
                        <span>Next.js Blog Application</span>
                    </Link>
                </div>
                <div className={styles.category}>
                    {categories.map((category) => (
                        <Link key={category.link} href={`/category/${category.link}`}>
                            <span>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;