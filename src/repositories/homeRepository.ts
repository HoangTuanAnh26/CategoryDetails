const mockSlideMeals = [
    { idMeal: '1', strMeal: 'Spicy Arrabiata Penne', strMealThumb: 'https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg' },
    { idMeal: '2', strMeal: 'Teriyaki Chicken Casserole', strMealThumb: 'https://www.themealdb.com/images/media/meals/4xcfai1763765676.jpg' }
];

const mockCategories = [
    { idCategory: '1', strCategory: 'Beef', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Beef.png' },
    { idCategory: '2', strCategory: 'Chicken', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Chicken.png' },
    { idCategory: '3', strCategory: 'Dessert', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Sugar.png' },
    { idCategory: '4', strCategory: 'Lamb', strCategoryThumb: 'https://www.themealdb.com/images/ingredients/Lamb.png' }
];

export const homeRepository = {
    getHomeData: async () => {
        try {
            return {
                slideMeals: mockSlideMeals,
                categories: mockCategories
            };
        } catch (error) {
            console.error("Lỗi khi lấy dữ liệu:", error);
            return {
                slideMeals: [],
                categories: []
            };
        }
    }
};