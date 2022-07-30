import { useEffect, useState } from 'react';

const UseData = () => {
    const [data, setData] = useState();

    const getData = async () => {
        const response = await fetch('data/sample-data.json');
        const data = await response.json();
        setData(data);
    }

    useEffect(() => {
        getData();
    }, []);


    return data;
};

export default UseData;