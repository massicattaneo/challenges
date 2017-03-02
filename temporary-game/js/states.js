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
        name: 'init',
        beforeChange: function () {
            return {
                x: 0,
                y: 180,
                jumpForce: 0
            };
        },
        afterChange: function (data) {
            return data;
        }
    },
    {
        name: 'jump',
        beforeChange: function (data) {
            data.jumpForce = 5;
            return data;
        },
        afterChange: function (data) {
            data.jumpForce = data.jumpForce - 1;
            return data;
        }
    }
]);