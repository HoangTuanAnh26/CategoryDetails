import React from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';

// 1. Dữ liệu giả (Mock Data) cho Slide món ăn hấp dẫn
const mockSlideMeals = [
    { idMeal: '1', strMeal: 'Spicy Arrabiata Penne', strMealThumb: 'https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg' },
    { idMeal: '2', strMeal: 'Teriyaki Chicken Casserole', strMealThumb: 'https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg' }
];

// 2. Dữ liệu giả (Mock Data) cho Danh sách Categories (Danh mục)
const mockCategories = [
    { idCategory: '1', strCategory: 'Beef', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Beef.png' },
    { idCategory: '2', strCategory: 'Chicken', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Chicken.png' },
    { idCategory: '3', strCategory: 'Dessert', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Sugar.png' },
    { idCategory: '4', strCategory: 'Lamb', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Lamb.png' }
];

const Home: React.FC = () => {
    const navigate = useNavigation();

    return (
        <div className="home-container">
            {/* --- Món ăn yêu thích --- */}
            <div className="slide-container">
                <div className="image-wrapper">
                    {mockSlideMeals.map((meal) => (
                        <div key={meal.idMeal} className="slide-card">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="slide-image"
                            />
                        </div>
                    ))}
                </div>
                <h2 className="home-title">Món ăn Việt Nam 🔥</h2>
            </div >

            {/* --- Danh sách Categories --- */}
            <div className="categories">
                <div className="categories-container">
                    <div className="categories-item">
                        {mockCategories.map((Category) =>(
                            <div className="item-card">
                                <img
                                src={Category.strCategoryThumb}
                                alt={Category.strCategory}
                                className="category-image"
                            />
                            </div>
                        ))}  
                    </div>
                </div>
                <h2 className="home-title">Categories</h2>
            </div>
        </div >
    );
};

export default Home;

//Đang làm phần chuyển trang
//Đọc tiệp theo Gemini > Sửa file Home