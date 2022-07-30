import React from 'react';
import UseNavigateTo from '../../hooks/UseNavigateTo';

const RightCard = ({ data }) => {
    const navigateToDetail = UseNavigateTo();
    return (
        <div className='right-card' onClick={() => navigateToDetail('selected', 1)}>
            <div className='right-card-body'>
                <h3>
                    <span>{data?.subheadline} / </span> প্রথম বিশ্বযুদ্ধের ঝানু বৈমানিক
                </h3>
                <img src={data?.coverPhoto} alt="" />
            </div>

            <small>{data?.duration} ঘণ্টা আগে</small>
        </div>
    );
};

export default RightCard;