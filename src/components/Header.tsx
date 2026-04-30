import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="app-header">
            <h1 className='title-header'>Food Recipe</h1>
            <div className="nav-menu">
                <a className="nav-item" href="#">Trang chủ</a>
                <a className="nav-item" href="#">Tìm kiếm</a>
                <a className="nav-item" href="#">Yêu thích</a>
                <a
                    href="#"
                    className="nav-item"
                    style={{ marginRight: "20px" }}
                    onClick={(e) => {
                        e.preventDefault(); // ❗ chặn hành vi mặc định
                        window.history.back();
                    }}
                >
                    Trở lại
                </a>
            </div>
        </header>
    );
};

export default Header;