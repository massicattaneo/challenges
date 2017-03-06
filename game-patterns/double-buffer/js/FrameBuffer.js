/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: FrameBuffer
 Created Date: 06 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function FrameBuffer() {
    var obj = this;
    var WIDTH = 6;
    var HEIGHT = 6;
    var pixels = new Array(WIDTH * HEIGHT);
    obj.clear = function () {
        for (var i = 0; i < WIDTH * HEIGHT; i++) {
            pixels[i] = 'white';
        }
    };
    obj.draw = function (x, y) {
        pixels[(WIDTH * y) + x] = 'black';
    };
    obj.getPixels = function () {
        return pixels;
    }
}
