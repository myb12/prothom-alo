import React from 'react';
import UseNavigateTo from '../../hooks/UseNavigateTo';

const SelectedSmallCard = () => {
    const navigateToDetail = UseNavigateTo();
    return (
        <div className='selected-small-card' onClick={() => navigateToDetail(2)}>
            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-07%2F32336056-d4b5-45e8-babe-13753494ef83%2Fmaxresdefault.jpg?rect=0%2C0%2C1080%2C720&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=0.8" alt="" />

            <h3>
                <span>জানাজায় মানুষের ঢল / </span>যখন খাবারের হাতেই প্রাণ যাওয়ার শঙ্কা থাকে
            </h3>

            <small>৫ ঘণ্টা আগে</small>
        </div>
    );
};

export default SelectedSmallCard;