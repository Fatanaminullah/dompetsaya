import { createStore, combineReducers, applyMiddleware} from 'redux';
import createHistory from 'history/createHashHistory';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { connectRouter,routerMiddleware } from 'connected-react-router';

const history = createHistory();
const browserHistory = createBrowserHistory();


const reducers = combineReducers({
    router : connectRouter(browserHistory)

})

const middleware = routerMiddleware(browserHistory);

const store = createStore(applyMiddleware(middleware,thunk));

export { history,browserHistory, store };