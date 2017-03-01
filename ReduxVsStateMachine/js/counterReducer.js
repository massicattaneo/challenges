/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: counterReducer
 Created Date: 01 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function counterReducer(state, action) {
    return {
        counter: updateCounter(state, action),
        decrease: updateDecrease(state, action),
        increase: updateIncrease(state, action)
    };
}
function updateCounter(state, action) {
    var counter = state.counter;
    switch (action.type) {
        case 'INCREASE':
            return counter + 1;
            break;
        case 'DECREASE':
            return counter - 1;
            break;
        default:
            return counter || 0;
    }
}
function updateIncrease(state, action) {
    switch (action.type) {
        case 'INCREASE':
        case 'DECREASE':
            return true;
            break;
        default:
            return state.increase || true;
    }
}
function updateDecrease(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return true;
        case 'DECREASE':
            return state.counter > 1;
            break;
        default:
            return state.decrease || false;
    }
}