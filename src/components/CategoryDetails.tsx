import React from 'react';

// Tạo dữ liệu giả (Mock Data) để thiết kế giao diện trước
// const mockMeals = [
//   { idMeal: '2', strMeal: 'Beef Banh Mi Bowls', strMealThumb: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg' },
//   { idMeal: '2', strMeal: 'Beef Banh Mi Bowls', strMealThumb: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg' },
//   { idMeal: '2', strMeal: 'Beef Banh Mi Bowls', strMealThumb: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg' },
//   { idMeal: '2', strMeal: 'Beef Banh Mi Bowls', strMealThumb: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg' },
//   { idMeal: '2', strMeal: 'Beef Banh Mi Bowls', strMealThumb: 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg' },
//   { idMeal: '3', strMeal: 'Beef Bourguignon', strMealThumb: 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg' },
// ];

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const CategoryDetails: React.FC = () => {
  const [meals, setMeals] = React.useState<Meal[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef');
        const data = await response.json();

        setMeals(data.meals || []);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="category-container">
      {/* 1. Phần Header */}
      <header className="app-header">
        <button className="back-button">←</button>
        <h1 className='title-header'>Food Recipe</h1>
      </header>

      {/* 2. Phần Banner */}
      <section className="banner-section">
        <img
          src="https://www.themealdb.com/images/ingredients/Beef.png"
          alt="Beef Banner"
          className="banner-image"
        />
        <h2 className="category-title">Beef</h2>
      </section>

      {/* 3. Phần Danh sách Món ăn */}
      <section className="meals-grid">
        {loading ? (
          <p>Đang tải ...</p>
        ) : (
          meals.map((meal) => (

            <div key={meal.idMeal} className="meal-card">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="meal-image"
              />
              <div className="meal-title-container">
                <h3 className="meal-title">{meal.strMeal}</h3>
              </div>
            </div>
          ))
        )}
      </section>
      <footer>
        <div className='app-footer'>2026/04/27 Category Details</div>
      </footer>
    </div>
  );
};



export default CategoryDetails;

// Thêm đường dẫn cho nút back
// Phần list hiện quá nhiều
