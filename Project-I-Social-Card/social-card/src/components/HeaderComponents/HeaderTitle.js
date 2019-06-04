import React from 'react';
import './Header.css';
import HeaderBody from './HeadBody'

function HeaderTitle() {
    return  <div id="header-title">
               <h4>Lambda School</h4><span>@LambdaSchool - 26 jan</span>
               <HeaderBody />
            </div>
};

export default HeaderTitle
