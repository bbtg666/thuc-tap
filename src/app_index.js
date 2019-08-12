import React, { Component, Fragment } from 'react';
import axios from "axios";


import Firebase from "./model/firebase";
import Live from './components/live';
import TopMenu from './components/TopMenu'
import {logout} from './components/logout';

class AppManager extends Component {
    render() {
        return (
            <Fragment>
                <TopMenu logout={() => {
                    logout(this.props)
                }} />
                <Live />
            </Fragment>
        )
    }
}

export default AppManager;