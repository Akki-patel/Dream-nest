import React, { useState } from 'react'
import { categories } from '../data'
import "../styles/Listings.scss"
import Loader from "./Loader"
import { useDispatch } from 'react-redux'
const Listings = () => {
    const dispatch = useDispatch();
    const [laoding ,seLoading] = useState(true);
    const [ selectedCtaegory,setSelectedCategory] = useState("");


    return (
        <div className='category-list'>
            {categories?.map((category, index) => (
                <div className={`category`} key={index}>
                    <div className="category_icon">{category.icon}</div>
                    <p>{category.label}</p>
                </div>
            ))
            }

        </div>
    )
}

export default Listings
