import React, { useCallback, useState } from 'react';
import LeftCard from '../LeftCard/LeftCard';

const TabComponent = () => {
    const [tabClicked, setTabClicked] = useState('mostRead');

    const handleTabClick = useCallback((value) => {
        setTabClicked(value)
    }, [])
    return (
        <div className='tab-component'>
            <ul>
                <li
                    className={`${tabClicked === 'mostRead' ? 'tab-border' : ''}`}
                    onClick={() => handleTabClick('mostRead')}>
                    পঠিত
                </li>

                <li
                    className={`${tabClicked === 'discussed' ? 'tab-border' : ''}`}
                    onClick={() => handleTabClick('discussed')}>
                    আলোচিত
                </li>

                <li
                    className={`${tabClicked === 'goodNews' ? 'tab-border' : ''}`}
                    onClick={() => handleTabClick('goodNews')}>
                    সুখবর
                </li>
            </ul>

            {
                tabClicked === 'mostRead' && <div className="most-read" >
                    {
                        [...new Array(5)].map((el, i) => <LeftCard key={i} id={i + 1} />)
                    }
                </div>
            }
            {
                tabClicked === 'discussed' && <div className="discussed" >
                    discussed
                </div>
            }
            {
                tabClicked === 'goodNews' && <div className="good-news" >
                    Good news
                </div>
            }
        </div>
    );
};

export default TabComponent;