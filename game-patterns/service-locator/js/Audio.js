/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Audio
 Created Date: 08 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function Audio(implementer) {
    var obj = this;
    implementer = implementer || {};
    obj.playSound = implementer.playSound || function (id, volume) {
        };
    obj.stopSound = implementer.stopSound || function (id) {
        };
    obj.stopAllSounds = implementer.stopAllSounds || function () {
        };
}
function ConsoleAudio() {
    var obj = new Audio({
        playSound: function (id, volume) {
            console.log('play', id, volume);
        },
        stopSound: function (id) {
            console.log('stop', id);
        },
        stopAllSounds: function () {
            console.log('stop all');
        }
    });
    return obj;
}
function AudioLogger(wrapped) {
    var obj = new Audio({
        playSound: function (id, volume) {
            console.log('wrapped');
            wrapped.playSound(id, volume);
        },
        stopSound: function (id) {
            console.log('wrapped');
            wrapped.stopSound(id);
        },
        stopAllSounds: function () {
            console.log('wrapped');
            wrapped.stopAllSounds();
        }
    });
    return obj;
}