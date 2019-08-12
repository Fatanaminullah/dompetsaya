import { createStore, combineReducers, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createHistory from 'history/createHashHistory';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { connectRouter,routerMiddleware } from 'connected-react-router';
import layoutReducer from '../layout/store/layout-reducer';
import loginReducer from '../../modules/login/store/login-reducer'
import notesReducer from '../../modules/inputnotes/store/notes-reducer'
import settingReducer from '../../modules/settings/store/setting-reducer'




const history = createHistory();
const browserHistory = createBrowserHistory();


const reducers = combineReducers({
    router : connectRouter(browserHistory),
    layout: layoutReducer,
    login:loginReducer,
    notes:notesReducer,
    setting:settingReducer
})

const middleware = routerMiddleware(browserHistory);

const store = createStore(reducers, applyMiddleware(middleware,thunk));

const persistor = persistStore(store);


export { history,browserHistory, store ,persistor};