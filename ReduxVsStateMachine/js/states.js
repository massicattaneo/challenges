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
        beforeChange: function (data) {
            data.counter++;
            return data;
        }
    },
    {
        name: 'decrease',
        beforeChange: function (data) {
            data.counter--;
            return data;
        }
    },
    {
        name: 'init',
        beforeChange: function () {
            return {
                counter: 0
            };
        }
    }
]);