import React, { useCallback, useState } from 'react';
import UseData from '../../hooks/UseData';
import LeftCard from '../LeftCard/LeftCard';

const TabComponent = () => {
    const [tabClicked, setTabClicked] = useState('latest');
    const data = UseData();

    const handleTabClick = useCallback((value) => {
        setTabClicked(value)
    }, []);


    return (
        <div className='tab-component'>
            <ul>
                <li
                    className={`${tabClicked === 'latest' ? 'tab-border' : ''}`}
                    onClick={() => handleTabClick('latest')}>
                    {data?.latest?.name}
                </li>

                <li
                    className={`${tabClicked === 'mostread' ? 'tab-border' : ''}`}
                    onClick={() => handleTabClick('mostread')}>
                    {data?.mostread?.name}
                </li>

                <li
                    className={`${tabClicked === 'discussed' ? 'tab-border' : ''}`}
                    onClick={() => handleTabClick('discussed')}>
                    {data?.discussed?.name}
                </li>

            </ul>

            {
                tabClicked === 'latest' && <div className="latest" >
                    {
                        data?.latest?.items?.sort((a, b) => a.sort - b.sort)?.map((el, i) => <LeftCard category='latest' key={i} data={el} />)
                    }
                </div>
            }

            {
                tabClicked === 'mostread' && <div className="most-read" >
                    {
                        data?.mostread?.items?.sort((a, b) => a.sort - b.sort)?.map((el, i) => <LeftCard category='mostread' key={i} data={el} />)
                    }
                </div>
            }
            {
                tabClicked === 'discussed' && <div className="discussed" >
                    {
                        data?.discussed?.items?.sort((a, b) => a.sort - b.sort)?.map((el, i) => <LeftCard category='discussed' key={i} data={el} />)
                    }
                </div>
            }

        </div>
    );
};

export default TabComponent;