import { init } from '@rematch/core'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import * as models from './models'


import { connectRouter} from 'connected-react-router';
// import createLoadingPlugin from '@rematch/loading';


// const loading = createLoadingPlugin(options);

export const history = createBrowserHistory()

const reducers = { router: connectRouter(history) };

export const store = init({
    redux: {
        reducers,
        middlewares: [
            routerMiddleware(history)
        ],
        devtoolOptions: {}
    },
    models,
    plugins: [
        // loading
    ]
})




