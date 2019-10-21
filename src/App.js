import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store, history } from './store';

import Home from './views/Home';
import Login from './views/Login';

import './assets/css/bootstrap.min.css';
import './assets/scss/now-ui-kit.scss';

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/dashboard" component={Home} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
