/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: stateMachine
 Created Date: 01 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function StateMachine() {
    var oldData = {};
    var data = {};
    var subscribers = [];
    var activeStates = [];
    this.state = function (newState) {
        activeStates.push(newState);
        oldData = data;
        data = newState.beforeChange(data);
        subscribers.forEach(function(subscriber) {
            if (subscriber.condition(data, oldData)) {
                subscriber.fn(data, oldData);
            }
        }.bind(this));
        data = newState.afterChange(data);
        this.state(newState);
    };
    this.on = function(condition, fn) {
        subscribers.push({condition: condition, fn: fn});
    };
}
function Data(data) {
    var self = this;
    Object.keys(data).forEach(function (k) {
        self[k] = data[k];
    });
}
function States(array) {
    var self = this;
    array.forEach(function (o) {
        self[o.name] = {};
        self[o.name].name = o.name;
        self[o.name].beforeChange = function (data) {return o.beforeChange(new Data(data))};
        self[o.name].afterChange = function (data) {return o.afterChange(new Data(data))};
    });
}