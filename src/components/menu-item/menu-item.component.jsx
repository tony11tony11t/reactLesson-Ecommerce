import React from "react";

import './menu-item.style.scss';

const MenuItem = ({title , imageUrl , size}) => (
    <div className={`menu-item ${size ? size : ""}`} >
        <div className='backgroundImage' style={{
                backgroundImage:`url(${imageUrl})`
        }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem
