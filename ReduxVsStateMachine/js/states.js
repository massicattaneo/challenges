/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: states
 Created Date: 01 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
var states = new States([
    {
        name: 'increase',
        before: function (data) {
            data.counter++;
            data.decrease = true;
            return data;
        }
    },
    {
        name: 'decrease',
        before: function (data) {
            data.counter--;
            data.decrease = data.counter > 0;
            return data;
        }
    },
    {
        name: 'init',
        before: function () {
            return {
                counter: 0,
                increase: true,
                decrease: false
            };
        }
    }
]);