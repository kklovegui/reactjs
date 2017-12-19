import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import PcHeader from "./js/components/pc_header";
import PcFooter from './js/components/pc_footer';
import MobileHeader from './js/components/mobile_header';
import MobileFooter from './js/components/mobile_footer';
// import Button from 'antd/lib/button';

import MediaQuery from 'react-responsive';

class App extends Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <PcHeader/>
                    <PcFooter/>
                </MediaQuery>

                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileHeader/>
                    <MobileFooter/>
                </MediaQuery>
            </div>
        );
    }
}

export default App;
