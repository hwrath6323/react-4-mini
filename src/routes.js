import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Route1 from './Route1.js';
import Route2 from './Route2.js';
import Route3 from './Route3.js';

export default (
    <Switch>
        <Route exact path='/' component={Route1} />
        <Route path='/2' component={Route2} />
        <Route path='/3' component={Route3} />
    </Switch>
)