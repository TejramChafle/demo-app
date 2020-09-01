import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import { lazyReducerEnhancer } from 'pwa-helpers';
import thunk from 'redux-thunk';
const logger = store => {
    return next => {
        return action => {
            // console.log('Middleware dispatching action: ', action );
            const result = next(action);
            // console.log('Middleware next state', store.getState());
            return result;
        };
    };
};
export const store = createStore(reducer, compose(lazyReducerEnhancer(combineReducers), state => state, applyMiddleware(logger, thunk))
// applyMiddleware(logger, thunk)
);
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