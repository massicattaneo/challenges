/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: entities
 Created Date: 07 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function Entity(update, render) {
    var obj = this;
    obj.x = 0;
    obj.y = 0;
    obj.update = update;
    obj.render = render;
}
function Skeleton(el) {
    var patrollingLeft = false;
    var obj = new Entity(function () {
        if (patrollingLeft) {
            obj.x -= 1;
            if (obj.x == 0) patrollingLeft = false;
        } else {
            obj.x += 1;
            if (obj.x == 100) patrollingLeft = true;
        }
    }, function () {
        el.style.left = obj.x + 'px';
    });
    return obj;
}
function Statue(delay, el) {
    var frames_ = 0;
    var delay_ = delay;
    var zoom = 1;
    var obj = new Entity(function () {
        frames_++;
        if (frames_ < 5) return;
        if (frames_ === delay_) {
            zoom = 1.2;
            frames_ = 0;
        } else {
            zoom = 1;
        }
    }, function () {
        el.style.transform = 'scale3d(' + zoom + ',' + zoom + ',' + zoom + ')'
    });
    return obj;
}