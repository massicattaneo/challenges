/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Store
 Created Date: 01 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function Store(reducer) {
    this.reducer = reducer;
    this.state = {};
    this.subscribers = [];
    this.state = this.reducer(this.state, {});
}
Store.prototype.dispatch = function(action) {
    this.prevState = this.state;
    this.state = this.reducer(this.state, action);
    this.notify();
    return action;
};
Store.prototype.onChange = function(prop, fn) {
    this.subscribers.push({prop: prop, fn: fn});
};

Store.prototype.notify = function() {
    this.subscribers.forEach(function(subscriber) {
        if (!this.prevState || this.prevState[subscriber.prop] !== this.state[subscriber.prop]) {
            subscriber.fn(this.prevState, this.state);
        }
    }.bind(this));
};