import React, { useEffect, useState } from 'react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [current, setCurrent] = useState(0);
    const length = reviews.length;

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(reviews) || reviews.length <= 0) {
        return null;
    }

    return (
        <section
            className="review-content-wrapper">
            <button className='slide-left' onClick={prevSlide}>
                <AiOutlineDoubleLeft className='arrow' />
            </button>
            <div
                className='slider-wrapper'>
                {reviews.map((slide, index) => {
                    return (
                        <>
                            {index === current && (
                                <div className='slider-content'>
                                    <div style={{ width: '20%' }}>
                                        <img src={slide.img} alt="" />
                                    </div>
                                    <div style={{ width: '70%' }}>
                                        <p>{slide.text}</p>
                                        <p>{slide.rating}</p>
                                        <h5>{slide.name}</h5>
                                    </div>
                                </div>
                            )}
                        </>
                    )
                })}
            </div>
            <button className='slide-right' onClick={nextSlide}>
                <AiOutlineDoubleRight className='arrow' />
            </button>
        </section>
    );
};

export default Review;