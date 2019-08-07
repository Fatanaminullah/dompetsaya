import { createStore, combineReducers, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
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

const store = createStore(reducers, applyMiddleware(middleware,thunk));

const persistor = persistStore(store);


export { history,browserHistory, store ,persistor};