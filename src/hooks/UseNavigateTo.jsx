import { useNavigate } from 'react-router-dom';

const UseNavigateTo = () => {
    const navigate = useNavigate()

    const navigateToDetail = (id) => {
        navigate(`news-detail/${id}`);
    }
    return navigateToDetail;
};

export default UseNavigateTo;