import React from 'react';
import UseNavigateTo from '../../hooks/UseNavigateTo';

const LeftCard = ({ data, category }) => {
    const { id, serial, subheadline, headline } = data;

    const navigateToDetail = UseNavigateTo();
    return (
        <div className='left-card' onClick={() => navigateToDetail(category, id)}>
            <h4>{serial}</h4>
            <h3>
                <span>{subheadline} / </span>
                {headline}
            </h3>
        </div>
    );
};

export default LeftCard;