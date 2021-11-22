import React, {useContext} from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const categories = [{name: 'React', slug: 'react'}, {name: 'Next', slug: 'next'}]
const Header = () => {
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
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;