import React from 'react';
import './navBar.css';
function navBar() {
    return (
        <nav className="navBar">
            <div className="left_nav">
                <i class="fa fa-bars"></i>
                <p>health and glow</p>
        </div>
            <div className="right_nav">
                <i class="fa fa-search"></i>
                <i class="fa fa-shopping-bag"></i>
            </div>
        </nav>
    )
}
export default navBar;