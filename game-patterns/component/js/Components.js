/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Components
 Created Date: 07 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

function InputComponent() {
    var obj = this;
    var WALK_ACCELERATION = 1;

    obj.update = function (bjorn) {
        var direction = ''; //FROM USER INPUT
        switch (direction) {
            case 'DIR_LEFT':
                bjorn.velocity_ -= WALK_ACCELERATION;
                break;

            case 'DIR_RIGHT':
                bjorn.velocity_ += WALK_ACCELERATION;
                break;
        }
    }
}
function PhysicComponent() {
    var obj = this;
    var volume_ = 1;
    obj.update = function (bjorn, world) {
        bjorn.x_ += bjorn.velocity_;
        world.resolveCollision(volume_, bjorn.x_, bjorn.y_, bjorn.velocity_);
    }
}
function GraphicComponent() {
    var obj = this;
    var spriteStand_ = 'STAND';
    var spriteWalkLeft_ = 'WALK LEFT';
    var spriteWalkRight_ = 'WAK RIGHT';

    obj.update = function (bjorn, graphics) {
        // Draw the appropriate sprite.
        var sprite = spriteStand_;
        if (bjorn.velocity_ < 0) {
            sprite = spriteWalkLeft_;
        } else if (obj.velocity_ > 0) {
            sprite = spriteWalkRight_;
        }
        graphics.draw(sprite, bjorn.x_, bjorn.y_);
    }
}