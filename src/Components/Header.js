import React, { Component } from 'react';

export const Header = (props) => {
    return (
        <nav className="Header">
            <div className="navbar">
                <ul>
                    <li>
                        <a href={ props.homeLink }>Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};