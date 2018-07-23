import { SEARCH_TERM } from "../actions/index";

export default function (state = null, action) {
    
    switch (action.type){
        case SEARCH_TERM:
            return action.payload; // ES6 syntAax of the below ccode
    }
    return state;
} 