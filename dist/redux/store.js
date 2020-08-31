import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import { lazyReducerEnhancer } from 'pwa-helpers';
import thunk from 'redux-thunk';
export const store = createStore(reducer, compose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk)));
/* declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;

export const store = createStore(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
    (state: any): any => state,
    composeEnhancers(lazyReducerEnhancer(combineReducers)),
); */ 
//# sourceMappingURL=store.js.map