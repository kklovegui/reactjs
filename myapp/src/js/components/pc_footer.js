import React from 'react';
import {Row, Col} from 'antd';
import { Menu, Icon } from 'antd';
import './../../css/pc_footer.css';


class PcFooter extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <footer>
                <Row>
                    <Col span={2}/>
                    <Col span={20} className='footer'>
                        &copy;&nbsp;2016 ReactNews. All Rights Reserved
                    </Col>
                    <Col span={2}/>
                </Row>
            </footer>
        );
    };
}

export default PcFooter;