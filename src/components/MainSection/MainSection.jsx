import React from 'react';
import SelectedTopCard from '../SelectedCard/SelectedTopCard';

const MainSection = () => {
    return (
        <div className="container">
            <div className='main-section'>
                <div className="left-section">
                    Hello World
                </div>
                <div className="right-section">
                    <div className="right-middle-section">
                        <SelectedTopCard />
                    </div>
                    <div className="right-right-section">
                        Hello World
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;