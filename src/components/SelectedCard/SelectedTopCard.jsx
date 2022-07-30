import React from 'react';
import UseNavigateTo from '../../hooks/UseNavigateTo';

const SelectedTopCard = () => {
    const navigateToDetail = UseNavigateTo();
    return (
        <div className='selected-top-card' onClick={() => navigateToDetail(5)}>
            <img className='top-card-image' src="https://images.prothomalo.com/prothomalo-bangla%2F2022-07%2Fbe9648e3-42e3-4f22-8e8a-83df6c5c0a31%2FK_1.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=600&dpr=1.0" alt="" />

            <h3>
                <span>কী কেন কীভাবে / </span> আঙুলের ছাপ একই রকম হয় না কেন?
            </h3>
        </div>
    );
};

export default SelectedTopCard;