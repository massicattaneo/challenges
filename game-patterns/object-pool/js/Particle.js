/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Particle
 Created Date: 08 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function Particle() {
    var obj = this;
    var framesLeft_ = 0;
    var state_ = {live: {}};

    obj.getNext = function () {
        return state_.next;
    };
    obj.setNext = function (next) {
        state_.next = next;
    };

    obj.init = function (x, y, xVel, yVel, lifetime) {
        state_.live.x = x;
        state_.live.y = y;
        state_.live.xVel = xVel;
        state_.live.yVel = yVel;
        framesLeft_ = lifetime;
    };
    obj.animate = function () {
        if (!obj.inUse()) return;
        framesLeft_--;
        state_.live.x += state_.live.xVel;
        state_.live.y += state_.live.yVel;
        console.log('moving to', state_.live.x, state_.live.y);
        return framesLeft_ === 0;
    };

    obj.inUse = function() {
        return framesLeft_ > 0;
    }
}