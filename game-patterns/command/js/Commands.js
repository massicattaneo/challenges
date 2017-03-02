/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: Commands
 Created Date: 02 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

/** COMMANDS */
function Command(execute, undo) {
    var obj = this;
    obj.execute = execute || function () {};
    obj.undo = undo || function () {};
}
function JumpCommand(actor) {
    return new Command(function () {
        actor.jump()
    });
}
function CouchStartCommand(actor) {
    return new Command(function () {
        actor.crouchStart()
    });
}
function CouchEndCommand(actor) {
    return new Command(function () {
        actor.crouchEnd()
    });
}
function MoveUnitCommand(actor, x, y) {
    var xBefore = 0;
    var yBefore = 0;
    return new Command(function () {
        xBefore = actor.x;
        yBefore = actor.y;
        actor.moveTo(x, y);
    }, function () {
        actor.moveTo(xBefore, yBefore);
    })
}
function UndoCommand(command) {
    return new Command(function () {
        command.undo();
    })
}