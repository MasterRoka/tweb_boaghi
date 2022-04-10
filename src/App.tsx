import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import {HeaderPanel} from "./Layot/HeaderPanel";
import {FormPanel} from "./Layot/FormPanel";
import Continut from "./Layot/Continut";
import { Footer} from "antd/es/layout/layout";
import {Layout} from "antd";

function App() {
    return (
        <Layout>
                <HeaderPanel/>
            <div>
                <Continut/>
            </div>
            <FormPanel/>
            <Footer>Boaghi Petru</Footer>
        </Layout>
    );
}

export default App;