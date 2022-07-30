import { useNavigate } from 'react-router-dom';

const UseNavigateTo = () => {
    const navigate = useNavigate()

    const navigateToDetail = (category, id) => {
        window.scrollTo(0, 0);
        navigate(`news-detail/${category}/${id}`);
    }
    return navigateToDetail;
};

export default UseNavigateTo;