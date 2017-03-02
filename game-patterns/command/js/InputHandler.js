/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: InputHandler
 Created Date: 02 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function InputHandler() {
    var obj = this;
    var pressed = [];
    var commandPointer = new Command();

    obj.handleInputEnd = function (charCode) {
        /** Here the actor could be different, but the action is always the same applied to different actors **/
        pressed.splice(pressed.indexOf(charCode),1);
        return commandPointer = getEndCommand(charCode);
    };
    obj.handleInputStart = function (charCode) {
        var startCommand = getStartCommand(charCode);
        if (pressed.indexOf('ArrowDown') === -1) {
            pressed.push(charCode);
            return startCommand;
        }
    };

    function getStartCommand(charCode) {
        switch (charCode) {
            case 'ArrowDown':
                return CouchStartCommand(actor);
            default: return new Command()
        }
    }

    function getEndCommand(charCode) {
        switch (charCode) {
            case 'ArrowUp': return JumpCommand(actor);
            case 'ArrowDown': return CouchEndCommand(actor);
            case 'ArrowRight': return MoveUnitCommand(actor, actor.x + 1, actor.y);
            case 'ArrowLeft': return MoveUnitCommand(actor, actor.x - 1, actor.y);
            case 'KeyZ':
                if (pressed.indexOf('ControlRight') !== -1 || pressed.indexOf('ControlLeft') !== -1)
                    return UndoCommand(commandPointer);
            default: return new Command()
        }
    }
}