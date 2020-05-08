import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from '../../pages/home/Home';
import Header from '../header/Header';
// Importation from the Facebook Chat component.
import MessengerChat from '../messengerChat/messengerChat';

const Routes = () => {
    return (
        <div>
            <Header />
            <MessengerChat/>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </div>
    )
}

export default Routes;