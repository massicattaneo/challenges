/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: VirtualMachine
 Created Date: 07 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */

var health = 45;
var agility = 7;
var wisdom = 11;

function setHealth(amount, wizard) {
    health = amount + wizard
}
function getHealth() {
    return health;
}
function setWisdom(amount, wizard) {
    wisdom = amount + wizard
}
function getWisdom() {
    return wisdom;
}
function setAgility(amount, wizard) {
    agility = amount + wizard
}
function getAgility() {
    return agility;
}

function VM() {

    var obj = this;
    var stack = [];

    obj.interpret = function (bytecode) {
        var size = bytecode.length;
        for (var i = 0; i < size; i++) {
            switch (bytecode[i]) {
                case Instruction.SET_HEALTH:
                    var amount = pop();
                    var wizard = pop();
                    setHealth(amount, wizard);
                    break;
                case Instruction.GET_HEALTH:
                    push(getHealth(pop()));
                    break;
                case Instruction.SET_WISDOM:
                    var amount = pop();
                    var wizard = pop();
                    setWisdom(amount, wizard);
                    break;
                case Instruction.GET_WISDOM:
                    push(getWisdom(pop()));
                    break;
                case Instruction.SET_AGILITY:
                    var amount = pop();
                    var wizard = pop();
                    setAgility(amount, wizard);
                    break;
                case Instruction.GET_AGILITY:
                    push(getAgility(pop()));
                    break;
                case Instruction.LITERAL:
                    var value = bytecode[++i];
                    push(value);
                    break;
                case Instruction.ADD:
                    var b = pop();
                    var a = pop();
                    push(a + b);
                    break;
                case Instruction.DIVIDE:
                    var b = pop();
                    var a = pop();
                    push(a / b);
                    break;
            }
        }
        console.log(stack);
    };

    function push() {
        Array.prototype.push.apply(stack, arguments);
    }

    function pop() {
        return stack.pop();
    }

}