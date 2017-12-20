import React from 'react'
import news from '../../images/news.png'
import './../../css/mobile_header.css';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

class MobileHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0,
        }
    };

    render() {
        const userShow = this.state.hasLogined ?
            <Link>
                <Icon type='inbox'/>
            </Link>
            :
            <Icon type='setting'/>

        return(
            <div id='mobileheader'>
                <header>
                    <img src={ news } alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
            </div>
        );
    };
}

export default MobileHeader;