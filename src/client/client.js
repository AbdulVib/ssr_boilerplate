//for async
import 'babel-polyfill'

//startup point for the client side
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//redux
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

//react-router-config for load data in server
import { renderRoutes } from 'react-router-config'

import Routes from './Routes'
import reducers from './reducers'

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))

ReactDOM.hydrate(<Provider store={store}><BrowserRouter><div>{renderRoutes(Routes)}</div></BrowserRouter></Provider>, document.getElementById('root'))