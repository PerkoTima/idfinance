import { combineReducers, legacy_createStore as createStore } from 'redux';
import {dataReducer} from './dataReducer.js'
import {stepReducer} from './stepReducer.js'

const rootReducer = combineReducers({
    data: dataReducer,
    step: stepReducer,
})

export const store = createStore(rootReducer)