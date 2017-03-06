/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Scene
 Created Date: 06 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function Scene() {
    var obj = this;
    var buffer = [new FrameBuffer(), new FrameBuffer()];
    var current = buffer[0];
    var next = buffer[1];

    obj.happy = function () {
        next.clear();
        next.draw(1, 1);
        next.draw(4, 1);
        next.draw(1, 3);
        next.draw(2, 4);
        next.draw(3, 4);
        next.draw(4, 3);
        swap();
    };

    obj.normal = function () {
        next.clear();
        next.draw(1, 1);
        next.draw(4, 1);
        next.draw(1, 4);
        next.draw(2, 4);
        next.draw(3, 4);
        next.draw(4, 4);
        swap();
    };

    obj.sad = function () {
        next.clear();
        next.draw(1, 1);
        next.draw(4, 1);
        next.draw(1, 5);
        next.draw(2, 4);
        next.draw(3, 4);
        next.draw(4, 5);
        swap();
    };

    obj.getBuffer = function () {
        return current.getPixels().slice(0);
    };

    function swap() {
        var temp = current;
        current = next;
        next = temp;
    }
}
