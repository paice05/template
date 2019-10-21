import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const rootReucers = combineReducers({
    form: formReducer,
    router: connectRouter(history),
});

export default rootReucers;
