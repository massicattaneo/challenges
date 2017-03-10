/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Unit
 Created Date: 10 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function Unit(grid_, x_, y_, name_) {
    var obj = this;

    obj.x = x_;
    obj.y = y_;
    obj.name = name_;
//            obj.prev;
//            obj.next;

    grid_.add(obj);

    obj.move = function (x_, y_) {
        grid.move(obj, x_, y_);
    }
}