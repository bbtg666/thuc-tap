import React, {Component, Fragment} from 'react';

import Live from './components/live';
import TopMenu from './components/TopMenu'

class AppManager extends Component{
    onLogout = ()=>{
        this.props.history.push('/')
    }
    render(){
        return(
            <Fragment>
                <TopMenu logout={this.onLogout} />
                <Live />
            </Fragment>
        )
    }
}

export default AppManager;