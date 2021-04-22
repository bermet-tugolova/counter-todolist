import { INCREASE_COUNT, DECREASE_COUNT } from '../actions';

const initialState = {//маленький state
    count: 0,
};

export const counterReducer = (state = initialState,action) => {//reducer,чистая функция,которая изменяет state
    switch(action.type){
        case INCREASE_COUNT:
            return {count: state.count+1};
        case DECREASE_COUNT:
            return {count: state.count-1};
        default:
            return state;
    }
};