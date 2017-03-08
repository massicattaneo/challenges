/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Transform
 Created Date: 08 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function Transform(params) {
    var obj = this;
    params = params || {};
    obj.position = params.position || [0, 0, 0];
    obj.rotation = params.rotation || [0, 0, 0];
    /** etc */
    obj.combine = function (transform) {
        console.log('*** combining');
        return new Transform({
            position: combine(obj.position, transform.position),
            rotation: combine(obj.rotation, transform.rotation)
        });
    };

    function combine(a, b) {
        return a.map(function (o, i) {
            return o + b[i];
        })
    }
}