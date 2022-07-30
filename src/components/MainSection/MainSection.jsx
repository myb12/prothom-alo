import React from 'react';
import RightCard from '../RightCard/RightCard';
import SelectedSmallCard from '../SelectedCard/SelectedSmallCard';
import SelectedTopCard from '../SelectedCard/SelectedTopCard';
import AdComponent from '../shared/AdComponent/AdComponent';
import VerticalDevider from '../shared/Devider/VerticalDevider';
import TabComponent from '../TabComponent/TabComponent';

const MainSection = () => {
    return (
        <div className="container">
            <div className='main-section'>
                <div className="left-section">
                    <TabComponent />
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
                        <AdComponent addNumber={1} />
                        <RightCard />
                        <RightCard />
                        <RightCard />
                    </div>
                </div>
            </div>
            <div className='add-wrapper'>
                <AdComponent addNumber={2} />
            </div>
        </div>
    );
};

export default MainSection;