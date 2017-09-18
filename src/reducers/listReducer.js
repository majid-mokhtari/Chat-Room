import * as types from './../constants/types'

export function listReducer(state = null, action){
    switch(action.type){
        case types.LIST_LOADED:
        return {
            type: types.LIST_LOADED,
            list: action.payLoad
        }

        default:
        return state;
    }
}