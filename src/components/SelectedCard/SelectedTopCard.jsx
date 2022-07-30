import React from 'react';
import UseNavigateTo from '../../hooks/UseNavigateTo';

const SelectedTopCard = ({ data }) => {
    const navigateToDetail = UseNavigateTo();
    return (
        <div className='selected-top-card' onClick={() => navigateToDetail('selected', data?.id)}>
            <img className='top-card-image' src={data?.thumb} alt="" />

            <h3>
                <span>{data?.subheadline} / </span>{data?.headline}
            </h3>
        </div>
    );
};

export default SelectedTopCard;