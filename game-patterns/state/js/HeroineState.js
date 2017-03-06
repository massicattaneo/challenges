/*/
 ///////////////////////////////////////////////////////////////////////////
 Module: HeroineState
 Created Date: 06 March 2017
 Author: mcattaneo

 //////////////////////////////////////////////////////////////////////////////
 //       Copyright (c) 2016 - The Workshop  All rights reserved.
 //////////////////////////////////////////////////////////////////////////////
 */
function HeroineState(params) {
    this.handleInput = params.handleInput || function () {
        };
    this.enter = params.enter || function () {
        };
    this.update = params.update || function () {
        };
}
HeroineState.standing = function DuckingState() {
    return new HeroineState({
        handleInput: function (heroine, input) {
            if (input == 'ArrowDown') {
                return HeroineState.ducking;
            }
        },
        enter: function (heroine) {
            heroine.setGraphics('IMAGE_STAND');
        }
    })
}();
HeroineState.ducking = function DuckingState() {
    var chargeTime = 0;
    var MAX_CHARGE = 30;
    return new HeroineState({
            handleInput: function (heroine, input) {
                if (input == 'ArrowDown') {
                    return;
                }
                return HeroineState.standing;
            },
            update: function (heroine) {
                chargeTime++;
                if (chargeTime > MAX_CHARGE) {
                    heroine.superBomb();
                    chargeTime = 0;
                }
            }
            ,
            enter: function (heroine) {
                chargeTime = 0;
                heroine.setGraphics('IMAGE_DUCK');
            }
        }
    )}
();