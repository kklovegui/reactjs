import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
import PcHeader from "./js/components/pc_header";
// import Button from 'antd/lib/button';

class App extends Component {
    render() {
        return (
            <div>
                <PcHeader/>
            </div>
        );
    }
}

export default App;
