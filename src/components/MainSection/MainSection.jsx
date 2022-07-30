import React from 'react';
import UseData from '../../hooks/UseData';
import RightCard from '../RightCard/RightCard';
import SelectedSmallCard from '../SelectedCard/SelectedSmallCard';
import SelectedTopCard from '../SelectedCard/SelectedTopCard';
import AdComponent from '../shared/AdComponent/AdComponent';
import VerticalDevider from '../shared/Devider/VerticalDevider';
import TabComponent from '../TabComponent/TabComponent';

const MainSection = () => {
    const data = UseData();
    const sortedData = data?.selected?.items?.sort((a, b) => a.sort - b.sort);
    const selectedTop = sortedData && sortedData[0];
    const selectedSmall1 = sortedData && sortedData[1];
    const selectedSmall = sortedData && sortedData[2];

    return (
        <div className="container">
            <div className='main-section'>
                <div className="left-section">
                    <TabComponent />
                    <div className="add-mobile">
                        <h5>বিজ্ঞাপন</h5>
                        <AdComponent addNumber={1} />
                    </div>
                </div>
                <div className="right-section">
                    <div className="right-middle-section">
                        <h2 className='mini-heading'>নির্বাচিত</h2>
                        <SelectedTopCard data={selectedTop} />
                        <div className='small-card-wrapper'>
                            <SelectedSmallCard data={selectedSmall1} />
                            <VerticalDevider />
                            <SelectedSmallCard data={selectedSmall} />
                        </div>
                    </div>
                    <div className="right-right-section">
                        <div className="add-one-wrapper">
                            <h2>বিজ্ঞাপন</h2>
                            <AdComponent addNumber={1} />
                        </div>
                        {
                            sortedData?.slice(3).map(el => <RightCard key={el.id} data={el} />)
                        }
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