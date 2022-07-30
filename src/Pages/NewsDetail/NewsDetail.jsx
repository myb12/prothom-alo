import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { newsData } from '../../newsData/newsData';

const NewsDetail = () => {
    const { id, category } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        const specificNews = newsData && newsData[category].items?.find(el => el.id === +id);
        setNews(specificNews);
    }, [category, id])


    return (
        <div className="detail-container">
            <div className='news-detail'>
                <div className='news-detail-header'>
                    <div className="subheading">
                        <h5>{news?.subheadline}</h5>
                    </div>
                    <div className="heading">
                        <h1>{news?.headline}</h1>
                    </div>
                </div>

                <img src={news?.coverPhoto} alt="" />

                <div className="description" dangerouslySetInnerHTML={{ __html: news?.descriptions }} />
            </div>
        </div>
    );
};

export default NewsDetail;