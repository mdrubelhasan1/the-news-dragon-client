import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);
    console.log(categories);

    useEffect(() => {
        fetch('https://the-news-dragon-server-7xubq21wr-md-rubel-hasans-projects.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h3>All Categories</h3>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                    >

                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;