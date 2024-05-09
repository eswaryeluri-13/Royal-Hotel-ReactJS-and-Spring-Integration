import React from "react";

const Header = ({ title }) => {
    return (
        <header className="header">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="image-container">
                    <h1 className="header-title">{title}</h1>
                </div>
                <div className="overlay"></div>
            </div>
        </header>
    );
};

export default Header;
