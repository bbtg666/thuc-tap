import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

import TopMenu from "./TopMenu.js";
import {logout} from './logout';

const Example = (props) => {
  return (
    <div>
      <TopMenu logout={()=>{
        logout(props)
      }}/>
      <Jumbotron>
        <h1 className="display-3">Welcome!!!</h1>
        <p className="lead">Chào mừng bạn đến website demo theo dõi xe của tôi</p>
        <hr className="my-2" />
        <img src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80" width="100%" height="60%"/>
      </Jumbotron>
    </div>
  );
};

export default Example;