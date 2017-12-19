import React from 'react'
import news from '../../images/news.png'
import './../../css/mobile_header.css';

class MobileHeader extends React.Component {

    render() {
        return(
            <div id='mobileheader'>
                <header>
                    <img src={ news } alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        );
    };
}

export default MobileHeader;