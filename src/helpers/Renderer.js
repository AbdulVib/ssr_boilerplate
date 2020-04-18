import React from 'react';
import { renderToString } from 'react-dom/server'

import { StaticRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

//react-router-config for load data in server
import { renderRoutes } from 'react-router-config'
//all routes

//serialixe for xss
import serialixe from 'serialize-javascript'

import Routes from '../client/Routes'

export default (req, store) => {
    const context = renderToString(
        <Provider store={store}>
            <StaticRouter location={ req.path } context={{}}>
            <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    )

    return `
        <html>
            <head></head>
            <body>
                <div id="root">${ context }</div>
            </body>
            <script>
                window.INITIAL_STATE = ${serialixe(store.getState())}
            </script>
            <script src="bundle.js"></script>
        </html>
    `
}