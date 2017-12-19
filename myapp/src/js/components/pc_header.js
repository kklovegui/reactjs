import React from 'react';
import {Row, Col} from 'antd';
import { Menu, Icon, Tabs, Form, Input, Button, Checkbox, Modal } from 'antd';
import news from '../../images/news.png'
import { Link } from 'react-router-dom';
import './../../css/pc_header.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;

class PcHeader extends React.Component {

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
    }

    render() {
        let { getFieldProps } = this.props.form;
        const userShow = this.state.hasLogined ?
            <Menu.Item key="logout" className="register">
                <Button type="primary" htmlType="button">
                    {this.state.userNickName}
                </Button>
                &nbsp;&nbsp;
                <Link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button">退出</Button>
            </Menu.Item>
            :
            <Menu.Item key='register' className='register'>
                <Icon type='appstore'/>注册/登录
            </Menu.Item>;

        return(
            <header>
                <Row>
                    <Col span={2}/>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={ news } alt="miss image"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16} className="items">
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei ">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

                    </Col>

                    <Modal title="用户中心"
                           wrapClassName="vertical-center-modal"
                           visible={this.state.modalVisible}
                           onCancel={()=>this.setModalVisible(false)}
                           onOk={()=>this.setModalVisible(false) okText="关闭"}
                            />
                    <Col span={2}/>
                </Row>
            </header>
        );
    };
}

export default PcHeader = Form.create({})(PcHeader);