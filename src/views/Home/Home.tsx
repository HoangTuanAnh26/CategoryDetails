import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useHome } from '../../controllers/useHome';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { slideMeals, categories, loading } = useHome();

    const handleCategoryClick = (name: string) => {
        navigate(`/category/${name}`);
    };

    if (loading) {
        return <p>Đang tải trang chủ...</p>;
    }

    return (
        <div className="home-container">
            <div className="slide-container">
                <div className="image-wrapper">
                    {slideMeals.map((meal) => (
                        <div key={meal.idMeal} className="slide-card">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="slide-image" />
                        </div>
                    ))}
                </div>
                <h2 className="home-title">Món ăn Việt Nam 🔥</h2>
            </div>

            <div className="categories">
                <div className="categories-container">
                    <div className="categories-item">
                        {categories.map((Category) =>(
                            <div key={Category.idCategory} className="item-card" onClick={() => handleCategoryClick(Category.strCategory)}>
                                <img src={Category.strCategoryThumb} alt={Category.strCategory} className="category-image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;