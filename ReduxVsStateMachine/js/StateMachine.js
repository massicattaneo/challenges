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
        data = newState.before(data);
        subscribers.forEach(function(subscriber) {
            if (oldData[subscriber.prop] !== data[subscriber.prop]) {
                subscriber.fn(oldData, data);
            }
        }.bind(this));
    };
    this.onChange = function(prop, fn) {
        subscribers.push({prop: prop, fn: fn});
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
        Object.keys(o).forEach(function (k) {
            self[o.name][k] = function (data) {
                return o[k](new Data(data))
            };
        });
        self[o.name].name = o.name;
    });
}