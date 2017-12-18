import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';
// import Button from 'antd/lib/button';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}

export default App;
