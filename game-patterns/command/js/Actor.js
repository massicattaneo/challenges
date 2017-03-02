/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Actor
 Created Date: 02 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function Actor() {
    var obj = this;
    obj.x = 0;
    obj.y = 0;
    obj.jump = function () {console.log('jump')};
    obj.crouchStart = function () {console.log('crouch start')};
    obj.crouchEnd = function () {console.log('crouch end')};
    obj.moveTo = function (x, y) {
        obj.x = x;
        obj.y = y;
        console.log('move to: ', x, y);
    }
}