import React from 'react';

import { Layout } from 'antd';
import logo from '../../images/zenitsu.png'

const { Header } = Layout;

function header() {

return (
    <div>
        <Header>
            <div className="logo">
                <img src={logo} alt="" style={{ width: 50, height: 50}}></img>
            </div>   
        </Header> 
    </div>
);
}

export default header;