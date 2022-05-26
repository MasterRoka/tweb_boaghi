import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'

import {HeaderPanel} from "./Layot/HeaderPanel";
import Continut from "./Layot/Continut";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Breadcrumb, Layout, Menu} from "antd";

function App() {
    return (
        <Layout>
                <HeaderPanel/>
            <div>
                <Continut/>
            </div>
            <Footer>Boaghi Petru</Footer>
        </Layout>
    );
}

export default App;