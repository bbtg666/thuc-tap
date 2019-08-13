import React from 'react';
import Map from './maps';

import { LocationContext } from '../context/LocationContext'

class List extends React.Component {
    render(){
        return(
            <div>
                <LocationContext.Consumer>
                    {({index}) => <Map index={index}/>}
                </LocationContext.Consumer>
            </div>
        )
    }
}

export default List