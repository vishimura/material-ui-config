import { createStore, applyMiddleware } from 'redux'

import { connectRouter, routerMiddleware } from 'connected-react-router'

import history from '../routes/history'

import reducers from './reducers'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const middlewares = [ promise, multi, thunk, routerMiddleware(history)]

const store = createStore(
    connectRouter(history)(reducers),
    applyMiddleware(...middlewares)
)

export default store