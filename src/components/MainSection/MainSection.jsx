import React from 'react';
import SelectedSmallCard from '../SelectedCard/SelectedSmallCard';
import SelectedTopCard from '../SelectedCard/SelectedTopCard';
import VerticalDevider from '../shared/Devider/VerticalDevider';

const MainSection = () => {
    return (
        <div className="container">
            <div className='main-section'>
                <div className="left-section">
                    Hello World
                </div>
                <div className="right-section">
                    <div className="right-middle-section">
                        <h2>নির্বাচিত</h2>
                        <SelectedTopCard />
                        <div className='small-card-wrapper'>
                            <SelectedSmallCard />
                            <VerticalDevider />
                            <SelectedSmallCard />
                        </div>
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