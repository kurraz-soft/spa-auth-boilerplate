import {ActionTypes} from '../actions/gameActions';

const InitialState = {};

export default function (state = InitialState, action) {
    switch (action.type)
    {
        case ActionTypes.INIT:
            return state;
        default:
            return state;
    }
}