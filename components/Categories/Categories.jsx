import React, {useState, useEffect} from 'react';
import Link from "next/link";

import {getCategories} from "../../services";
import styles from "./Categories.module.scss";

const Categories = () => {
    const [ categories, setCategories ] = useState([]);
    useEffect(() => {
        getCategories().then(( newCategories) => setCategories( newCategories ))
    }, []);
    return (
        <div className={styles.wrapper}>
            {categories.map(( category ) => (
                <Link key={category.link} href={`/category/${category.link}`}>
                    <span>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    );
};

export default Categories;