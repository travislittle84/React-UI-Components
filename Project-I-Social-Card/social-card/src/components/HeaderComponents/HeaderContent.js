import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
// import HeaderBody from "./HeadBody"

function HeaderContent() {
    return  <div id="header-content">
                <ImageThumbnail />
                <HeaderTitle />                
            </div>
};

export default HeaderContent;
