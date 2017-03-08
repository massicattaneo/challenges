/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Audio
 Created Date: 08 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function Audio() {
    var obj = this;
    var MAX_PENDING = 2;
    var pending_ = new Array(MAX_PENDING);
    var head_ = 0;
    var tail_ = 0;
    obj.init = function () {

    };

    obj.playSound = function (id, volume) {

        for (var i = head_; i != tail_; i = nextIndex(i)) {
            if (pending_[i].id == id) {
                // Use the larger of the two volumes.
                pending_[i].volume = Math.max(volume, pending_[i].volume);
                return;
            }
        }

        if (nextIndex(tail_) != head_) {
            // Add to the end of the list.
            pending_[tail_] = {id: id, volume: volume};
            tail_ = nextIndex(tail_);
        }
    };

    obj.update = function () {
        while (head_ !== tail_) {
            loadSound(pending_[head_].id).play(pending_[head_].volume);
            head_ = nextIndex(head_);
        }
    };

    function nextIndex(value) {
        return (value + 1) % (MAX_PENDING + 1);
    }

    function loadSound(id) {
        return {
            play: function (volume) {
                console.log('played sound', id, 'volume', volume);
            }
        }
    }
}
