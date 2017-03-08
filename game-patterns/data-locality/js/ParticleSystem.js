/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: ParticleSystem
 Created Date: 08 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function ParticleSystem() {
    var obj = this;
    var numActive_ = 0;
    obj.update = function () {
        for (var index = 0; index < numActive_; index++) {
            obj[index].update();
        }
    };
    obj.activateParticle = function (index) {
        if (index >= numActive_) {
            var temp = obj[numActive_];
            obj[numActive_] = obj[index];
            obj[index] = temp;
            numActive_++;
        }
    };
    obj.deactivateParticle = function (index) {
        if (index < numActive_) {
            numActive_--;
            var temp = obj[numActive_];
            obj[numActive_] = obj[index];
            obj[index] = temp;
        }
    };
}
ParticleSystem.prototype = new Array; //Array like