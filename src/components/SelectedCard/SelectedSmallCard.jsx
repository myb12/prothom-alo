import React from 'react';
import UseNavigateTo from '../../hooks/UseNavigateTo';

const SelectedSmallCard = ({ data }) => {
    const navigateToDetail = UseNavigateTo();
    return (
        <div className='selected-small-card' onClick={() => navigateToDetail('selected', 2)}>
            <img src={data?.coverPhoto} alt="" />

            <h3>
                <span>{data?.subheadline} / </span>{data?.headline}
            </h3>

            <small>{data?.duration} ঘণ্টা আগে</small>
        </div>
    );
};

export default SelectedSmallCard;