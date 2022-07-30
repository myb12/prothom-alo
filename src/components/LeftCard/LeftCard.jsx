import React from 'react';
import UseNavigateTo from '../../hooks/UseNavigateTo';

const LeftCard = ({ id }) => {

    const navigateToDetail = UseNavigateTo();
    return (
        <div className='left-card' onClick={() => navigateToDetail(id)}>
            <h1>১</h1>

            <h3>
                <span>মিরসরাইয়ে দুর্ঘটনা / </span>
                যেভাবে বেঁচে গেলেন জুনায়েদ ও অন্যরা
            </h3>
        </div>
    );
};

export default LeftCard;