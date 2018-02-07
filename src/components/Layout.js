import React from 'react';
import '../styles/layout-base.css';
import '../styles/layout-grid.css';
import { message } from 'antd';
import logo from '../media/pokedex.png';

const info = ({cardList}) => {
        message.info('Open Source Pokedex V0.4');
      };

const layout = ({customCardsList}) => {

        return(
                <div className="main-container">
                        <div className="header">
                                <a className="btn-nav-about" onClick={info}>About</a>
                                <img src={logo} className="nav-logo"/>
                        </div>
                        <div className="card-content">
                                {customCardsList}
                        </div>
                        <div className="footer">
                                Footer
                        </div>
                </div>
        );
    }

export default layout;